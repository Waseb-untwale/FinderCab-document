import { Role, ArchitectureComponent, ApiEndpoint, SecurityFeature, AnalyticsReport, DeploymentItem, PricingOption, SupportItem, FutureEnhancement } from '../types';

export const roles: Role[] = [
  {
    id: 'mmt-admin',
    title: 'MMT Admin Panel',
    description: 'Centralized control center for MMT operations team.',
    features: [
      { 
        title: 'Manage API Partners', 
        description: 'Add, remove, and update vendor partnerships with full configuration options.',
        icon: 'Users'
      },
      { 
        title: 'View All Bookings', 
        description: 'Real-time monitoring of all bookings across the platform.',
        icon: 'CalendarClock'
      },
      { 
        title: 'Live Fleet Map', 
        description: 'Interactive map showing real-time location of all partner vehicles.',
        icon: 'Map'
      },
      { 
        title: 'Centralized Billing', 
        description: 'Comprehensive billing engine for tracking all financial transactions.',
        icon: 'Receipt'
      },
      { 
        title: 'Performance Reports', 
        description: 'Detailed analytics on partner performance metrics.',
        icon: 'BarChart'
      },
      { 
        title: 'Contract Management', 
        description: 'Tools to manage rates, SLAs, and contractual obligations.',
        icon: 'FileContract'
      }
    ]
  },
  {
    id: 'vendor-dashboard',
    title: 'Vendor Partner Dashboard',
    description: 'Dedicated interface for service providers to manage operations.',
    features: [
      { 
        title: 'Receive Trip Duties', 
        description: 'Automatically receive new bookings via the MMT API.',
        icon: 'BellRing'
      },
      { 
        title: 'Booking Management', 
        description: 'View and manage all assigned bookings through an intuitive interface.',
        icon: 'ClipboardList'
      },
      { 
        title: 'Driver Assignment', 
        description: 'Assign the appropriate driver and vehicle to each booking.',
        icon: 'UserCog'
      },
      { 
        title: 'Duty Slip Handling', 
        description: 'Generate and submit digital duty slips for completed trips.',
        icon: 'FileCheck'
      },
      { 
        title: 'Financial Tools', 
        description: 'Comprehensive invoicing and reconciliation capabilities.',
        icon: 'DollarSign'
      },
      { 
        title: 'Document Management', 
        description: 'Upload and manage important documents like permits and insurance.',
        icon: 'Files'
      }
    ]
  },
  {
    id: 'driver-app',
    title: 'Driver App (React Native)',
    description: 'Mobile application for drivers to manage trip assignments.',
    features: [
      { 
        title: 'Trip Assignments', 
        description: 'Receive and accept new trip assignments in real-time.',
        icon: 'Bell'
      },
      { 
        title: 'Status Updates', 
        description: 'Update trip status (start, on-trip, end) with a single tap.',
        icon: 'RefreshCw'
      },
      { 
        title: 'GPS Navigation', 
        description: 'Built-in navigation to pickup and drop locations.',
        icon: 'Navigation'
      },
      { 
        title: 'Duty Slip Upload', 
        description: 'Upload digital duty slips manually or automatically via geofencing.',
        icon: 'Upload'
      },
      { 
        title: 'Notifications', 
        description: 'Receive important alerts and updates.',
        icon: 'BellRing'
      },
      { 
        title: 'Emergency Support', 
        description: 'SOS button for immediate assistance in emergencies.',
        icon: 'AlertOctagon'
      }
    ]
  }
];

export const architectureComponents: ArchitectureComponent[] = [
  { 
    name: 'Admin Panel', 
    description: 'Web interface for MMT and vendor administrative functions.',
    icon: 'LayoutDashboard'
  },
  { 
    name: 'API Gateway', 
    description: 'Integration layer connecting MMT systems with vendor platforms.',
    icon: 'Waypoints'
  },
  { 
    name: 'Vendor Dashboard', 
    description: 'Role-based web interface for service providers.',
    icon: 'Monitor'
  },
  { 
    name: 'Driver Mobile App', 
    description: 'React Native application for iOS and Android.',
    icon: 'Smartphone'
  },
  { 
    name: 'Database', 
    description: 'MySQL/PostgreSQL for data storage and management.',
    icon: 'Database'
  },
  { 
    name: 'Backend', 
    description: 'JAVA + Spring Boot providing robust API services.',
    icon: 'ServerCog'
  },
  { 
    name: 'Frontend', 
    description: 'React.js + Tailwind + Radix/Ant Design for modern UIs.',
    icon: 'Layout'
  },
  { 
    name: 'Live Tracking', 
    description: 'Google Maps API + Socket.IO for real-time location updates.',
    icon: 'MapPin'
  },
  { 
    name: 'Notification Engine', 
    description: 'Twilio / WhatsApp Business / SMTP for communications.',
    icon: 'Bell'
  }
];

export const apiEndpoints: ApiEndpoint[] = [
  { 
    method: 'POST', 
    endpoint: '/api/trip/create', 
    description: 'New duty assigned to partner'
  },
  { 
    method: 'PUT', 
    endpoint: '/api/trip/update-status', 
    description: 'Partner updates trip status (start, end)'
  },
  { 
    method: 'POST', 
    endpoint: '/api/trip/duty-slip', 
    description: 'Upload duty slip'
  }
];

export const securityFeatures: SecurityFeature[] = [
  { 
    title: 'Role-Based Access Control', 
    description: 'Fine-grained permission system ensuring users only access appropriate functionality.',
    icon: 'Shield'
  },
  { 
    title: 'TLS/HTTPS Encryption', 
    description: 'Secure communication protocols for all data transmission.',
    icon: 'Lock'
  },
  { 
    title: 'Daily Database Backups', 
    description: 'Automated daily backups with secure off-site storage.',
    icon: 'Save'
  },
  { 
    title: 'Audit Logging', 
    description: 'Comprehensive logging of all trip and billing events for accountability.',
    icon: 'ListChecks'
  },
  { 
    title: 'GDPR Compliance', 
    description: 'Data handling practices aligned with global privacy regulations.',
    icon: 'FileCheck'
  }
];

export const analyticsReports: AnalyticsReport[] = [
  { 
    title: 'Trip Completion Rates', 
    description: 'Metrics on successful trip completions across partners.',
    icon: 'CheckCircle'
  },
  { 
    title: 'On-Time Performance', 
    description: 'Analysis of timeliness and adherence to schedules.',
    icon: 'Clock'
  },
  { 
    title: 'Duty Slip Mismatches', 
    description: 'Reports highlighting discrepancies in submitted duty slips.',
    icon: 'AlertTriangle'
  },
  { 
    title: 'Partner Financials', 
    description: 'Invoicing and payout ledger for transparent financial tracking.',
    icon: 'BarChart'
  },
  { 
    title: 'Driver Behavior Metrics', 
    description: 'Monitoring of speeding, delays, and other driver performance indicators.',
    icon: 'Activity'
  }
];

export const deploymentItems: DeploymentItem[] = [
  { 
    title: 'Cloud Hosting', 
    description: 'AWS/GCP infrastructure with CI/CD pipelines for seamless deployment.',
    icon: 'Cloud'
  },
  { 
    title: 'Multi-Tenant Support', 
    description: 'Each vendor receives a dedicated dashboard instance.',
    icon: 'Layers'
  },
  { 
    title: 'Monitoring', 
    description: 'Prometheus + Grafana + Sentry for comprehensive system monitoring.',
    icon: 'LineChart'
  },
  { 
    title: 'Staging Environment', 
    description: 'Dedicated environment for partner onboarding and testing.',
    icon: 'TestTube'
  }
];

export const pricingOptions: PricingOption[] = [
  { 
    title: 'White-Label License', 
    description: 'Per-partner licensing model with MMT reselling access.',
    icon: 'Tag'
  },
  { 
    title: 'Centralized Admin', 
    description: 'MMT maintains centralized administrative access.',
    icon: 'Users'
  },
  { 
    title: 'Subscription Model', 
    description: 'Monthly subscription or per-trip fee structure.',
    icon: 'CalendarClock'
  },
  { 
    title: 'Enterprise Option', 
    description: 'One-time enterprise license available for larger operations.',
    icon: 'Building'
  }
];

export const supportItems: SupportItem[] = [
  { 
    title: '24x7 Technical Support', 
    description: 'Round-the-clock support with L1-L3 service levels.',
    icon: 'HeadphonesIcon'
  },
  { 
    title: 'Dedicated Onboarding', 
    description: 'Specialized onboarding process for new vendor partners.',
    icon: 'UserPlus'
  },
  { 
    title: 'Uptime Guarantee', 
    description: 'SLA promising 99.9% system uptime.',
    icon: 'Timer'
  },
  { 
    title: 'Incident Response', 
    description: 'Priority incidents addressed within 1 hour.',
    icon: 'Siren'
  }
];

export const futureEnhancements: FutureEnhancement[] = [
  { 
    title: 'AI Route Optimization', 
    description: 'Machine learning algorithms for optimal route planning.',
    icon: 'Brain'
  },
  { 
    title: 'EV Fleet Support', 
    description: 'Specialized features for electric vehicle fleets including battery tracking.',
    icon: 'Zap'
  },
  { 
    title: 'Telematics Integration', 
    description: 'OBD data integration for comprehensive vehicle monitoring.',
    icon: 'Activity'
  },
  { 
    title: 'Automated Payments', 
    description: 'Integration with UPI/autopay systems for driver payments.',
    icon: 'CreditCard'
  }
];