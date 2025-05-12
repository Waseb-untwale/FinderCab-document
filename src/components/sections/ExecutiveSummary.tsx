import React from 'react';
import { BookOpen } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { Card, CardContent } from '../ui/Card';

const ExecutiveSummary: React.FC = () => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <SectionHeading 
        title="Executive Summary" 
        description="A comprehensive fleet management platform for MMT and its API partners."
        icon={<BookOpen size={24} />}
      />
      
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Project Overview</h3>
              <p className="text-gray-700">
                <strong>FleetOZ Platform</strong> is a white-label fleet management system designed to provide MMT and its API partner vendors with a unified platform to manage, track, and fulfill trip duties efficiently.
              </p>
            </div>
            
            <div className="pt-4">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Target Users</h3>
              <ul className="pl-5 space-y-2 list-disc text-gray-700">
                <li>
                  <span className="font-medium">MMT Internal Operations & Admin Team</span>
                  <p className="text-sm text-gray-600">Centralized management of all vendor partners and trips.</p>
                </li>
                <li>
                  <span className="font-medium">API-Integrated Vendor Partners</span>
                  <p className="text-sm text-gray-600">Fleet operators who provide vehicles and drivers.</p>
                </li>
                <li>
                  <span className="font-medium">Drivers</span>
                  <p className="text-sm text-gray-600">Mobile app users who execute the trips.</p>
                </li>
              </ul>
            </div>
            
            <div className="pt-4">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Strategic Value</h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="mb-1 font-medium text-blue-800">Unified Management</h4>
                  <p className="text-sm text-gray-700">Single platform for all fleet operations and vendor management.</p>
                </div>
                <div className="p-4 bg-teal-50 rounded-lg">
                  <h4 className="mb-1 font-medium text-teal-800">Real-time Visibility</h4>
                  <p className="text-sm text-gray-700">Live tracking and status updates of all fleet vehicles.</p>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg">
                  <h4 className="mb-1 font-medium text-amber-800">Streamlined Compliance</h4>
                  <p className="text-sm text-gray-700">Automated documentation and regulatory compliance management.</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExecutiveSummary;