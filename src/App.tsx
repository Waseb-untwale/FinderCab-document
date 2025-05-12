import React, { useState } from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';
import './index.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('executive-summary');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative min-h-screen bg-gray-50 font-sans">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar 
        isOpen={isSidebarOpen} 
        activeSection={activeSection} 
        setActiveSection={(section) => {
          setActiveSection(section);
          if (window.innerWidth < 768) {
            setIsSidebarOpen(false);
          }
        }} 
      />
      <MainContent 
        activeSection={activeSection} 
        isSidebarOpen={true} 
      />
    </div>
  );
}

export default App;