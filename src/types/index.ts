export interface NavItem {
  id: string;
  title: string;
  icon?: string;
}

export interface RoleFeature {
  title: string;
  description: string;
  icon: string;
}

export interface Role {
  id: string;
  title: string;
  description: string;
  features: RoleFeature[];
}

export interface ArchitectureComponent {
  name: string;
  description: string;
  icon: string;
}

export interface ApiEndpoint {
  method: string;
  endpoint: string;
  description: string;
}

export interface SecurityFeature {
  title: string;
  description: string;
  icon: string;
}

export interface AnalyticsReport {
  title: string;
  description: string;
  icon: string;
}

export interface DeploymentItem {
  title: string;
  description: string;
  icon: string;
}

export interface PricingOption {
  title: string;
  description: string;
  icon: string;
}

export interface SupportItem {
  title: string;
  description: string;
  icon: string;
}

export interface FutureEnhancement {
  title: string;
  description: string;
  icon: string;
}