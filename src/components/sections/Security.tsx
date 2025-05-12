import React from 'react';
import { Shield } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { Card, CardContent } from '../ui/Card';
import { securityFeatures } from '../../data/documentationData';
import FeatureCard from '../ui/FeatureCard';
import * as LucideIcons from 'lucide-react';

const Security: React.FC = () => {
  const getIcon = (iconName: string) => {
    // @ts-ignore - Dynamic import from lucide-react
    const Icon = LucideIcons[iconName] || LucideIcons.Circle;
    return <Icon size={20} />;
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <SectionHeading 
        title="Security & Compliance" 
        description="Robust security measures to protect sensitive data and ensure regulatory compliance."
        icon={<Shield size={24} />}
      />
      
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Security Features</h3>
              <div className="grid grid-cols-1 gap-4">
                {securityFeatures.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    icon={getIcon(feature.icon)}
                  />
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Compliance Framework</h3>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="mb-3 text-base font-medium text-gray-900">Data Protection Standards</h4>
                <ul className="pl-5 space-y-3 list-disc text-gray-700">
                  <li>
                    <span className="font-medium">GDPR Compliance</span>
                    <p className="mt-1 text-sm text-gray-600">Adherence to European data protection regulations.</p>
                  </li>
                  <li>
                    <span className="font-medium">Data Minimization</span>
                    <p className="mt-1 text-sm text-gray-600">Only collecting necessary data for operational purposes.</p>
                  </li>
                  <li>
                    <span className="font-medium">Retention Policies</span>
                    <p className="mt-1 text-sm text-gray-600">Clear timeline for data storage and deletion.</p>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="mb-3 text-base font-medium text-gray-900">Security Certifications</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-3 text-center bg-gray-50 rounded-md">
                    <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 bg-blue-100 rounded-full">
                      <LucideIcons.ShieldCheck size={20} className="text-blue-800" />
                    </div>
                    <p className="text-sm font-medium text-gray-800">ISO 27001</p>
                  </div>
                  <div className="p-3 text-center bg-gray-50 rounded-md">
                    <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 bg-blue-100 rounded-full">
                      <LucideIcons.Lock size={20} className="text-blue-800" />
                    </div>
                    <p className="text-sm font-medium text-gray-800">SOC 2</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="mb-3 text-base font-medium text-gray-900">Security Auditing</h4>
                <p className="mb-2 text-sm text-gray-700">Regular security assessments conducted by third-party experts:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-blue-100 rounded-full text-blue-800">Penetration Testing</span>
                  <span className="px-2 py-1 text-xs bg-teal-100 rounded-full text-teal-800">Vulnerability Scanning</span>
                  <span className="px-2 py-1 text-xs bg-amber-100 rounded-full text-amber-800">Code Security Reviews</span>
                  <span className="px-2 py-1 text-xs bg-purple-100 rounded-full text-purple-800">Security Compliance Checks</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Security;