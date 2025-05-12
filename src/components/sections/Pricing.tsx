import React from 'react';
import { Tag } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { Card, CardContent } from '../ui/Card';
import { pricingOptions } from '../../data/documentationData';
import FeatureCard from '../ui/FeatureCard';
import * as LucideIcons from 'lucide-react';

const Pricing: React.FC = () => {
  const getIcon = (iconName: string) => {
    // @ts-ignore - Dynamic import from lucide-react
    const Icon = LucideIcons[iconName] || LucideIcons.Circle;
    return <Icon size={20} />;
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <SectionHeading 
        title="Pricing & Licensing Model" 
        description="Flexible pricing options for MMT and partner organizations."
        icon={<Tag size={24} />}
      />
      
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Licensing Options</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {pricingOptions.map((option, index) => (
                  <FeatureCard
                    key={index}
                    title={option.title}
                    description={option.description}
                    icon={getIcon(option.icon)}
                  />
                ))}
              </div>
              
              <div className="p-4 mt-6 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="mb-2 text-base font-medium text-blue-800">Customization Options</h4>
                <p className="text-sm text-blue-700">
                  All plans include basic white-labeling options. Extended customization and integration services are available at additional costs depending on specific requirements.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Pricing Tiers</h3>
              <div className="space-y-4">
                <div className="overflow-hidden border border-gray-200 rounded-lg">
                  {/* <div className="px-4 py-3 bg-blue-800 text-white">
                    <h4 className="text-base font-medium">Starter</h4>
                  </div> */}
                  {/* <div className="p-4">
                    <div className="mb-4">
                      <p className="text-2xl font-bold text-gray-900">$999<span className="text-sm font-normal text-gray-500">/month</span></p>
                      <p className="text-sm text-gray-600">Up to 50 vehicles</p>
                    </div>
                    <ul className="pl-5 mb-4 space-y-2 list-disc">
                      <li className="text-sm text-gray-700">Basic white-labeling</li>
                      <li className="text-sm text-gray-700">Standard reports</li>
                      <li className="text-sm text-gray-700">Email support</li>
                    </ul>
                  </div> */}
                </div>
                
                {/* <div className="overflow-hidden border-2 border-blue-600 rounded-lg">
                  <div className="px-4 py-3 bg-blue-800 text-white">
                    <h4 className="text-base font-medium">Professional</h4>
                    <span className="px-2 py-0.5 text-xs bg-amber-400 text-amber-900 rounded-full">POPULAR</span>
                  </div>
                  <div className="p-4">
                    <div className="mb-4">
                      <p className="text-2xl font-bold text-gray-900">$1,999<span className="text-sm font-normal text-gray-500">/month</span></p>
                      <p className="text-sm text-gray-600">Up to 200 vehicles</p>
                    </div>
                    <ul className="pl-5 mb-4 space-y-2 list-disc">
                      <li className="text-sm text-gray-700">Advanced white-labeling</li>
                      <li className="text-sm text-gray-700">Custom reports</li>
                      <li className="text-sm text-gray-700">Priority support</li>
                      <li className="text-sm text-gray-700">API rate limit increase</li>
                    </ul>
                  </div>
                </div> */}
{/*                 
                <div className="overflow-hidden border border-gray-200 rounded-lg">
                  <div className="px-4 py-3 bg-blue-800 text-white">
                    <h4 className="text-base font-medium">Enterprise</h4>
                  </div>
                  <div className="p-4">
                    <div className="mb-4">
                      <p className="text-xl font-bold text-gray-900">Custom Pricing</p>
                      <p className="text-sm text-gray-600">Unlimited vehicles</p>
                    </div>
                    <ul className="pl-5 mb-4 space-y-2 list-disc">
                      <li className="text-sm text-gray-700">Full customization</li>
                      <li className="text-sm text-gray-700">Dedicated instance</li>
                      <li className="text-sm text-gray-700">24/7 premium support</li>
                      <li className="text-sm text-gray-700">SLA guarantees</li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Pricing;