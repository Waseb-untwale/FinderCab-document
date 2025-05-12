import React from 'react';
import ExecutiveSummary from '../sections/ExecutiveSummary';
import SystemArchitecture from '../sections/SystemArchitecture';
import CoreFeatures from '../sections/CoreFeatures';
import ApiIntegration from '../sections/ApiIntegration';
import Security from '../sections/Security';
import Analytics from '../sections/Analytics';
import Deployment from '../sections/Deployment';
import Pricing from '../sections/Pricing';
import Support from '../sections/Support';
import Future from '../sections/Future';

interface MainContentProps {
  activeSection: string;
  isSidebarOpen: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ activeSection, isSidebarOpen }) => {
  return (
    <main className={`flex-1 p-4 pt-16 transition-all duration-300 md:p-6 ${
      isSidebarOpen ? 'md:ml-64' : ''
    }`}>
      {activeSection === 'executive-summary' && <ExecutiveSummary />}
      {activeSection === 'system-architecture' && <SystemArchitecture />}
      {activeSection === 'core-features' && <CoreFeatures />}
      {activeSection === 'api-integration' && <ApiIntegration />}
      {activeSection === 'security' && <Security />}
      {activeSection === 'analytics' && <Analytics />}
      {activeSection === 'deployment' && <Deployment />}
      {activeSection === 'pricing' && <Pricing />}
      {activeSection === 'support' && <Support />}
      {activeSection === 'future' && <Future />}
    </main>
  );
};

export default MainContent;