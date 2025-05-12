import React from 'react';
import { Network } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { Card, CardContent } from '../ui/Card';
import { apiEndpoints } from '../../data/documentationData';

const ApiIntegration: React.FC = () => {
  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-blue-100 text-blue-800';
      case 'POST': return 'bg-green-100 text-green-800';
      case 'PUT': return 'bg-amber-100 text-amber-800';
      case 'DELETE': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <SectionHeading 
        title="MMT API Integration Flow" 
        description="Seamless communication between MMT and vendor platforms."
        icon={<Network size={24} />}
      />
      
      <Card>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900">API Endpoints</h3>
              <div className="overflow-hidden border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Method</th>
                      <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Endpoint</th>
                      <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Description</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {apiEndpoints.map((endpoint, index) => (
                      <tr key={index} className="transition-colors hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getMethodColor(endpoint.method)}`}>
                            {endpoint.method}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-mono text-sm text-gray-800 whitespace-nowrap">
                          {endpoint.endpoint}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {endpoint.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900">Integration Flow</h3>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <ol className="pl-5 space-y-3 list-decimal">
                    <li className="text-gray-700">
                      <span className="font-medium">MMT to Partner:</span>
                      <p className="mt-1 text-sm text-gray-600">MMT system sends new trip duties to the partner's API endpoint.</p>
                    </li>
                    <li className="text-gray-700">
                      <span className="font-medium">Partner Updates:</span>
                      <p className="mt-1 text-sm text-gray-600">Partner systems send trip status updates and duty slip information back to MMT.</p>
                    </li>
                    <li className="text-gray-700">
                      <span className="font-medium">Real-time Sync:</span>
                      <p className="mt-1 text-sm text-gray-600">Bidirectional data flow ensures all systems remain synchronized.</p>
                    </li>
                  </ol>
                </div>
              </div>
              
              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900">Authentication</h3>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-start mb-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-1 mr-3 bg-blue-100 rounded-full">
                      <Network size={20} className="text-blue-800" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-gray-900">OAuth2 / Token-based Authentication</h4>
                      <p className="mt-1 text-sm text-gray-600">Secure access control using industry-standard protocols.</p>
                    </div>
                  </div>
                  
                  <div className="p-3 mt-3 text-sm bg-gray-50 rounded-md">
                    <pre className="font-mono text-xs text-gray-800">
                      {`// Example Authentication Header
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`}
                    </pre>
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

export default ApiIntegration;