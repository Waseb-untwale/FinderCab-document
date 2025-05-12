import React from 'react';
import { Server } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { Card, CardContent } from '../ui/Card';
import { deploymentItems } from '../../data/documentationData';
import FeatureCard from '../ui/FeatureCard';
import * as LucideIcons from 'lucide-react';

const Deployment: React.FC = () => {
  const getIcon = (iconName: string) => {
    // @ts-ignore - Dynamic import from lucide-react
    const Icon = LucideIcons[iconName] || LucideIcons.Circle;
    return <Icon size={20} />;
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <SectionHeading 
        title="Deployment Plan" 
        description="Infrastructure and deployment strategy for the FleetOZ platform."
        icon={<Server size={24} />}
      />
      
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Infrastructure Components</h3>
              <div className="grid grid-cols-1 gap-4">
                {deploymentItems.map((item, index) => (
                  <FeatureCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    icon={getIcon(item.icon)}
                  />
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Deployment Process</h3>
              <div className="overflow-hidden border border-gray-200 rounded-lg">
                <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
                  <h4 className="text-sm font-medium text-gray-900">Implementation Timeline</h4>
                </div>
                <div className="p-4">
                  <ol className="pl-5 space-y-3 list-decimal">
                    <li className="text-gray-700">
                      <span className="font-medium">Planning Phase (2 Weeks)</span>
                      <p className="mt-1 text-sm text-gray-600">Requirements gathering and architecture finalization.</p>
                    </li>
                    <li className="text-gray-700">
                      <span className="font-medium">Development Phase (8 Weeks)</span>
                      <p className="mt-1 text-sm text-gray-600">Core platform development and iterative testing.</p>
                    </li>
                    <li className="text-gray-700">
                      <span className="font-medium">Staging Deployment (2 Weeks)</span>
                      <p className="mt-1 text-sm text-gray-600">Setup of staging environment and partner onboarding.</p>
                    </li>
                    <li className="text-gray-700">
                      <span className="font-medium">Production Rollout (2 Weeks)</span>
                      <p className="mt-1 text-sm text-gray-600">Gradual production deployment with monitoring.</p>
                    </li>
                  </ol>
                </div>
              </div>
              
              <div className="overflow-hidden border border-gray-200 rounded-lg">
                <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
                  <h4 className="text-sm font-medium text-gray-900">Scaling Strategy</h4>
                </div>
                <div className="p-4">
                  <ul className="pl-5 space-y-3 list-disc">
                    <li className="text-gray-700">
                      <span className="font-medium">Horizontal Scaling</span>
                      <p className="mt-1 text-sm text-gray-600">Auto-scaling container clusters based on load.</p>
                    </li>
                    <li className="text-gray-700">
                      <span className="font-medium">Database Sharding</span>
                      <p className="mt-1 text-sm text-gray-600">Partition strategy for high-volume data growth.</p>
                    </li>
                    <li className="text-gray-700">
                      <span className="font-medium">CDN Integration</span>
                      <p className="mt-1 text-sm text-gray-600">Global content delivery for optimized performance.</p>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="mb-2 text-base font-medium text-blue-800">Disaster Recovery</h4>
                <p className="text-sm text-blue-700">
                  Multi-region deployment with automated failover and regular backup verification ensures 99.9% uptime SLA with a Recovery Time Objective (RTO) of &lt; 4 hours.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Deployment;