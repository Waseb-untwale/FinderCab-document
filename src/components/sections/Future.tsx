import React from 'react';
import { Lightbulb } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { Card, CardContent } from '../ui/Card';
import { futureEnhancements } from '../../data/documentationData';
import FeatureCard from '../ui/FeatureCard';
import * as LucideIcons from 'lucide-react';

const Future: React.FC = () => {
  const getIcon = (iconName: string) => {
    // @ts-ignore - Dynamic import from lucide-react
    const Icon = LucideIcons[iconName] || LucideIcons.Circle;
    return <Icon size={20} />;
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <SectionHeading 
        title="Future Enhancements" 
        description="Planned improvements and new features for the platform roadmap."
        icon={<Lightbulb size={24} />}
      />
      
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Upcoming Features</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {futureEnhancements.map((enhancement, index) => (
                  <FeatureCard
                    key={index}
                    title={enhancement.title}
                    description={enhancement.description}
                    icon={getIcon(enhancement.icon)}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Release Timeline</h3>
              <div className="relative pl-8 space-y-6 before:absolute before:left-4 before:top-2 before:h-full before:w-0.5 before:bg-blue-200">
                <div className="relative">
                  <div className="absolute left-0 w-8 h-8 -translate-x-4 -translate-y-1 bg-blue-100 border border-blue-300 rounded-full">
                    <div className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full left-1/2 top-1/2"></div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="text-base font-medium text-gray-900">Q3 2025</h4>
                    <p className="mt-1 text-sm text-gray-700">AI Route Optimization</p>
                    <p className="mt-1 text-xs text-gray-500">Machine learning algorithms that dynamically optimize vehicle routes based on traffic, weather, and historical data.</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-0 w-8 h-8 -translate-x-4 -translate-y-1 bg-blue-100 border border-blue-300 rounded-full">
                    <div className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full left-1/2 top-1/2"></div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="text-base font-medium text-gray-900">Q4 2025</h4>
                    <p className="mt-1 text-sm text-gray-700">EV Fleet Support</p>
                    <p className="mt-1 text-xs text-gray-500">Specialized features for managing electric vehicle fleets including battery tracking and charging station integration.</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-0 w-8 h-8 -translate-x-4 -translate-y-1 bg-blue-100 border border-blue-300 rounded-full">
                    <div className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full left-1/2 top-1/2"></div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="text-base font-medium text-gray-900">Q1 2026</h4>
                    <p className="mt-1 text-sm text-gray-700">Telematics & Automated Payments</p>
                    <p className="mt-1 text-xs text-gray-500">OBD data integration and UPI/autopay systems for streamlined operations and driver compensation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Future;