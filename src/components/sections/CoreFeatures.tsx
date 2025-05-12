import React, { useState } from 'react';
import { Users } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { Card, CardContent } from '../ui/Card';
import { roles } from '../../data/documentationData';
import FeatureCard from '../ui/FeatureCard';
import * as LucideIcons from 'lucide-react';

const CoreFeatures: React.FC = () => {
  const [activeRole, setActiveRole] = useState(roles[0].id);

  const getIcon = (iconName: string) => {
    // @ts-ignore - Dynamic import from lucide-react
    const Icon = LucideIcons[iconName] || LucideIcons.Circle;
    return <Icon size={20} />;
  };

  const selectedRole = roles.find(role => role.id === activeRole) || roles[0];

  return (
    <div className="space-y-6 animate-fadeIn">
      <SectionHeading 
        title="Core Features by Role" 
        description="Tailored functionality for each user type in the platform."
        icon={<Users size={24} />}
      />
      
      <Card>
        <CardContent className="p-6">
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {roles.map((role) => (
                <button
                  key={role.id}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    activeRole === role.id
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveRole(role.id)}
                >
                  {role.title}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900">{selectedRole.title}</h3>
            <p className="text-gray-600">{selectedRole.description}</p>
          </div>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {selectedRole.features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={getIcon(feature.icon)}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CoreFeatures;