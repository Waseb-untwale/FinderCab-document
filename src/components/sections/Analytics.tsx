import React from 'react';
import { BarChart3 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { Card, CardContent } from '../ui/Card';
import { analyticsReports } from '../../data/documentationData';
import FeatureCard from '../ui/FeatureCard';
import * as LucideIcons from 'lucide-react';

const Analytics: React.FC = () => {
  const getIcon = (iconName: string) => {
    // @ts-ignore - Dynamic import from lucide-react
    const Icon = LucideIcons[iconName] || LucideIcons.Circle;
    return <Icon size={20} />;
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <SectionHeading 
        title="Reports & Analytics" 
        description="Comprehensive insights into fleet operations and performance metrics."
        icon={<BarChart3 size={24} />}
      />
      
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Available Reports</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {analyticsReports.map((report, index) => (
                  <FeatureCard
                    key={index}
                    title={report.title}
                    description={report.description}
                    icon={getIcon(report.icon)}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Analytics Features</h3>
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center justify-center w-8 h-8 mr-2 bg-blue-100 rounded-full">
                      <LucideIcons.LineChart size={16} className="text-blue-800" />
                    </div>
                    <h4 className="text-base font-medium text-gray-900">Real-time Dashboards</h4>
                  </div>
                  <p className="text-sm text-gray-600">Live performance metrics updated in real-time.</p>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center justify-center w-8 h-8 mr-2 bg-blue-100 rounded-full">
                      <LucideIcons.Download size={16} className="text-blue-800" />
                    </div>
                    <h4 className="text-base font-medium text-gray-900">Export Options</h4>
                  </div>
                  <p className="text-sm text-gray-600">Export reports in PDF, Excel, and CSV formats.</p>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center justify-center w-8 h-8 mr-2 bg-blue-100 rounded-full">
                      <LucideIcons.Bell size={16} className="text-blue-800" />
                    </div>
                    <h4 className="text-base font-medium text-gray-900">Automated Alerts</h4>
                  </div>
                  <p className="text-sm text-gray-600">Configurable notifications for performance thresholds.</p>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center justify-center w-8 h-8 mr-2 bg-blue-100 rounded-full">
                      <LucideIcons.Clock size={16} className="text-blue-800" />
                    </div>
                    <h4 className="text-base font-medium text-gray-900">Scheduled Reports</h4>
                  </div>
                  <p className="text-sm text-gray-600">Set up regular report delivery to stakeholders.</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;