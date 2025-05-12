import React, { ReactNode } from 'react';
import { Card, CardContent } from './Card';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-blue-200">
      <CardContent className="p-5">
        <div className="flex flex-col">
          <div className="flex items-center mb-2">
            <div className="flex items-center justify-center w-10 h-10 mr-3 text-blue-800 bg-blue-100 rounded-full">
              {icon}
            </div>
            <h3 className="text-base font-semibold text-gray-900">{title}</h3>
          </div>
          <p className="mt-2 text-sm text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;