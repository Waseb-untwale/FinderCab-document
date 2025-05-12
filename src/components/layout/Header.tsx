import React from 'react';
import { Menu } from 'lucide-react';
import  Button  from '../ui/Button';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 md:px-6">
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="mr-2 md:hidden"
          aria-label="Toggle Menu"
        >
          <Menu size={20} />
        </Button>
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-blue-900">
            FleetOZ<span className="text-teal-600">Platform</span>
          </h1>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="hidden text-sm font-medium text-gray-600 md:block">
          MMT API Partners Documentation
        </span>
      </div>
    </header>
  );
};

export default Header;