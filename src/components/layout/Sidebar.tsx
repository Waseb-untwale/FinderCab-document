import React from 'react';
import { NavItem } from '../../types';
import { 
  BookOpen, 
  Cpu, 
  Users, 
  Network, 
  Shield, 
  BarChart3, 
  Server, 
  Tag, 
  HeadphonesIcon,
  Lightbulb
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isOpen, 
  activeSection, 
  setActiveSection 
}) => {
  const navItems: NavItem[] = [
    { id: 'executive-summary', title: 'Executive Summary', icon: 'BookOpen' },
    { id: 'system-architecture', title: 'System Architecture', icon: 'Cpu' },
    { id: 'core-features', title: 'Core Features', icon: 'Users' },
    { id: 'api-integration', title: 'API Integration', icon: 'Network' },
    { id: 'security', title: 'Security & Compliance', icon: 'Shield' },
    { id: 'analytics', title: 'Reports & Analytics', icon: 'BarChart3' },
    { id: 'deployment', title: 'Deployment Plan', icon: 'Server' },
    { id: 'pricing', title: 'Pricing & Licensing', icon: 'Tag' },
    { id: 'support', title: 'Support & SLA', icon: 'HeadphonesIcon' },
    { id: 'future', title: 'Future Enhancements', icon: 'Lightbulb' },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen size={18} />;
      case 'Cpu': return <Cpu size={18} />;
      case 'Users': return <Users size={18} />;
      case 'Network': return <Network size={18} />;
      case 'Shield': return <Shield size={18} />;
      case 'BarChart3': return <BarChart3 size={18} />;
      case 'Server': return <Server size={18} />;
      case 'Tag': return <Tag size={18} />;
      case 'HeadphonesIcon': return <HeadphonesIcon size={18} />;
      case 'Lightbulb': return <Lightbulb size={18} />;
      default: return null;
    }
  };

  return (
    <aside 
      className={`fixed top-0 left-0 z-40 h-full pt-16 transition-transform duration-300 bg-white border-r border-gray-200 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 w-64`}
    >
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center w-full px-4 py-2 text-left transition-colors rounded-lg ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="mr-3 text-blue-800">
                  {item.icon && getIcon(item.icon)}
                </span>
                <span className="text-sm font-medium">{item.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;