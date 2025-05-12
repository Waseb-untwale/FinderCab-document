import React from 'react';
import { HeadphonesIcon } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { Card, CardContent } from '../ui/Card';
import { supportItems } from '../../data/documentationData';
import FeatureCard from '../ui/FeatureCard';
import * as LucideIcons from 'lucide-react';

const Support: React.FC = () => {
  const getIcon = (iconName: string) => {
    // @ts-ignore - Dynamic import from lucide-react
    const Icon = LucideIcons[iconName] || LucideIcons.Circle;
    return <Icon size={20} />;
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <SectionHeading 
        title="Support & SLA" 
        description="Comprehensive support structure and service level agreements."
        icon={<HeadphonesIcon size={24} />}
      />
      
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Support Services</h3>
              <div className="grid grid-cols-1 gap-4">
                {supportItems.map((item, index) => (
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
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Service Level Agreements</h3>
              <div className="overflow-hidden border border-gray-200 rounded-lg">
                <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
                  <h4 className="text-sm font-medium text-gray-900">Response Time Commitments</h4>
                </div>
                <div className="p-4">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-3 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Priority</th>
                        <th className="px-3 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Description</th>
                        <th className="px-3 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Response Time</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-2 text-sm text-gray-900 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium text-white bg-red-600 rounded-full">P1</span>
                        </td>
                        <td className="px-3 py-2 text-sm text-gray-700 whitespace-nowrap">System outage or critical functionality unavailable</td>
                        <td className="px-3 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">1 hour</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 text-sm text-gray-900 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium text-white bg-amber-500 rounded-full">P2</span>
                        </td>
                        <td className="px-3 py-2 text-sm text-gray-700 whitespace-nowrap">Major functionality impaired</td>
                        <td className="px-3 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">4 hours</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 text-sm text-gray-900 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium text-white bg-blue-600 rounded-full">P3</span>
                        </td>
                        <td className="px-3 py-2 text-sm text-gray-700 whitespace-nowrap">Minor issues with workarounds</td>
                        <td className="px-3 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">8 hours</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 text-sm text-gray-900 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium text-white bg-gray-500 rounded-full">P4</span>
                        </td>
                        <td className="px-3 py-2 text-sm text-gray-700 whitespace-nowrap">General questions or enhancement requests</td>
                        <td className="px-3 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">24 hours</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="mb-3 text-base font-medium text-gray-900">Uptime Guarantee</h4>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">System Availability</span>
                  <span className="text-sm font-bold text-blue-800">99.9%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div className="w-11/12 h-3 bg-blue-600 rounded-full"></div>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Calculated on a monthly basis, excluding scheduled maintenance windows.
                </p>
              </div>
              
              <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
                <h4 className="mb-2 text-base font-medium text-teal-800">Partner Onboarding Support</h4>
                <p className="text-sm text-teal-700">
                  Each new vendor partner receives dedicated onboarding assistance including technical integration support, training sessions, and documentation resources.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Support;