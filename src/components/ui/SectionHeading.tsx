import React, { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  description?: string;
  icon?: ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  description,
  icon
}) => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2">
        {icon && <div className="text-blue-800">{icon}</div>}
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      {description && (
        <p className="mt-1 text-gray-500">{description}</p>
      )}
      <div className="w-20 h-1 mt-2 bg-blue-800 rounded"></div>
    </div>
  );
};

export default SectionHeading;