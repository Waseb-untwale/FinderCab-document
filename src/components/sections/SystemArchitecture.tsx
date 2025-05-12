import React from 'react';
import { Cpu } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { Card, CardContent } from '../ui/Card';
import { architectureComponents } from '../../data/documentationData';
import * as LucideIcons from 'lucide-react';

const SystemArchitecture: React.FC = () => {
  const getIcon = (iconName: string) => {
    // @ts-ignore - Dynamic import from lucide-react
    const Icon = LucideIcons[iconName] || LucideIcons.Circle;
    return <Icon size={20} />;
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <SectionHeading 
        title="System Architecture Overview" 
        description="The technical foundation of the FleetOZ platform."
        icon={<Cpu size={24} />}
      />
      
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Architecture Diagram</h3>
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex flex-col items-center">
                  {/* Simple diagram representation */}
                  <div className="w-full max-w-md p-4 mb-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="text-center">
                      <div className="inline-block p-2 mb-2 bg-blue-100 rounded-lg">
                        <LucideIcons.LayoutDashboard className="text-blue-800" size={24} />
                      </div>
                      <p className="font-medium text-blue-800">Admin Panel</p>
                    </div>
                  </div>
                  
                  <LucideIcons.ArrowDown className="text-gray-400" size={20} />
                  
                  <div className="w-full max-w-md p-4 my-4 bg-teal-50 border border-teal-200 rounded-lg">
                    <div className="text-center">
                      <div className="inline-block p-2 mb-2 bg-teal-100 rounded-lg">
                        <LucideIcons.Waypoints className="text-teal-800" size={24} />
                      </div>
                      <p className="font-medium text-teal-800">API Gateway</p>
                    </div>
                  </div>
                  
                  <div className="grid w-full max-w-md grid-cols-2 gap-4 mb-4">
                    <div>
                      <LucideIcons.ArrowDown className="mx-auto text-gray-400" size={20} />
                      <div className="p-4 mt-2 bg-amber-50 border border-amber-200 rounded-lg">
                        <div className="text-center">
                          <div className="inline-block p-2 mb-2 bg-amber-100 rounded-lg">
                            <LucideIcons.Monitor className="text-amber-800" size={24} />
                          </div>
                          <p className="font-medium text-amber-800">Vendor Dashboard</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <LucideIcons.ArrowDown className="mx-auto text-gray-400" size={20} />
                      <div className="p-4 mt-2 bg-purple-50 border border-purple-200 rounded-lg">
                        <div className="text-center">
                          <div className="inline-block p-2 mb-2 bg-purple-100 rounded-lg">
                            <LucideIcons.Smartphone className="text-purple-800" size={24} />
                          </div>
                          <p className="font-medium text-purple-800">Driver App</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Key Components</h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {architectureComponents.map((component, index) => (
                  <div key={index} className="flex p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-center w-10 h-10 mr-3 text-blue-800 bg-blue-100 rounded-full">
                      {getIcon(component.icon)}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{component.name}</h4>
                      <p className="text-xs text-gray-500">{component.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 mt-4 border border-gray-200 rounded-lg">
                <h4 className="mb-2 text-sm font-medium text-gray-900">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs text-white bg-blue-700 rounded-full">React.js</span>
                  <span className="px-2 py-1 text-xs text-white bg-green-700 rounded-full">Java</span>
                  <span className="px-2 py-1 text-xs text-white bg-teal-700 rounded-full">Spring Boot</span>
                  <span className="px-2 py-1 text-xs text-white bg-purple-700 rounded-full">React Native</span>
                  <span className="px-2 py-1 text-xs text-white bg-amber-700 rounded-full">Tailwind CSS</span>
                  <span className="px-2 py-1 text-xs text-white bg-blue-500 rounded-full">Radix UI</span>
                  <span className="px-2 py-1 text-xs text-white bg-blue-900 rounded-full">PostgreSQL</span>
                  <span className="px-2 py-1 text-xs text-white bg-red-700 rounded-full">Socket.IO</span>
                  <span className="px-2 py-1 text-xs text-white bg-green-600 rounded-full">Google Maps API</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SystemArchitecture;