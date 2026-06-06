export type ProjectStatus = 'production' | 'active-dev' | 'concept-prd';
export type ProjectCategory =
  | 'PAM Tooling' | 'Security Tooling' | 'Network Monitoring'
  | 'AI Infrastructure' | 'AI Agent / Finance' | 'Cybersec Education';

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  description: string;
  architectureHighlights: string[];
  techStack: string[];
  status: ProjectStatus;
  featured: boolean;
  links: {
    github?: string;
    docs?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'cybarbot',
    name: 'CybArBot',
    category: 'PAM Tooling',
    description: 'ChatOps assistant for CyberArk PAM operations. Automates user management, access auditing, and credential lifecycle tasks via Telegram bot interface.',
    architectureHighlights: [
      'Go-based Telegram bot with CyberArk REST API integration',
      'Async session management with secure credential handling',
      'Role-based access control for bot commands',
      'Automated safe/account provisioning workflows',
      'Audit trail logging for all PAM operations',
    ],
    techStack: ['Go', 'CyberArk REST API', 'Telegram Bot API', 'Docker', 'Linux'],
    status: 'active-dev',
    featured: true,
    links: {
      github: 'https://github.com/lutfisan',
    },
  },
  {
    id: 'cyberark-auditor',
    name: 'CyberArk PAS REST Auditor',
    category: 'Security Tooling',
    description: 'Audits and detects risky configurations in CyberArk PAS via REST APIs. Maps IP addresses to accessible users and identifies privilege escalation paths.',
    architectureHighlights: [
      'Async Python with aiohttp for high-throughput API calls',
      'IP-to-user access mapping across enterprise vault',
      'Proxy-aware session management with retry logic',
      'CSV/Excel export for compliance reporting',
      'Handles 401/proxy edge cases gracefully',
    ],
    techStack: ['Python', 'aiohttp', 'CyberArk REST API', 'pandas', 'asyncio'],
    status: 'active-dev',
    featured: true,
    links: {
      github: 'https://github.com/lutfisan',
    },
  },
  {
    id: 'hyperscale-nms',
    name: 'Hyperscale Telemetry NMS',
    category: 'Network Monitoring',
    description: 'Telemetry-driven network monitoring system for large-scale infrastructure. Designed for high-volume SNMP/gNMI ingestion and operational dashboards.',
    architectureHighlights: [
      'SNMP and gNMI telemetry ingestion pipeline',
      'Time-series database for network metrics',
      'Real-time operational dashboards',
      'Alerting and anomaly detection rules',
      'Multi-vendor device support at scale',
    ],
    techStack: ['Python', 'gNMI', 'SNMP', 'InfluxDB', 'Grafana'],
    status: 'concept-prd',
    featured: true,
    links: {},
  },
  {
    id: 'openclaw',
    name: 'OpenClaw AI Agents',
    category: 'AI Infrastructure',
    description: 'AI agent orchestration framework for practical workflows. Coordinates multiple specialized agents for coding, research, and operational tasks.',
    architectureHighlights: [
      'Multi-agent orchestration with task routing',
      'Tool-use patterns for code generation and analysis',
      'Knowledge retrieval from structured data sources',
      'Configurable agent personas and capabilities',
      'Integration with local and cloud LLM providers',
    ],
    techStack: ['Python', 'TypeScript', 'LLM APIs', 'Vector DB', 'Docker'],
    status: 'active-dev',
    featured: false,
    links: {
      github: 'https://github.com/lutfisan',
    },
  },
  {
    id: 'axiom-portfolio',
    name: 'Axiom Portfolio Agent',
    category: 'AI Agent / Finance',
    description: 'AI-powered portfolio analysis agent for personal finance. Processes market data, generates insights, and supports investment decision workflows.',
    architectureHighlights: [
      'Real-time market data ingestion and processing',
      'LLM-powered analysis with structured output',
      'Portfolio tracking and performance metrics',
      'Risk assessment and allocation suggestions',
      'Automated reporting and alerts',
    ],
    techStack: ['Python', 'LLM APIs', 'pandas', 'Market APIs', 'SQLite'],
    status: 'active-dev',
    featured: false,
    links: {
      github: 'https://github.com/lutfisan',
    },
  },
  {
    id: 'cybershield-id',
    name: 'CyberShield Indonesia',
    category: 'Cybersec Education',
    description: 'Cybersecurity education platform concept for Indonesian professionals. Focuses on practical PAM, network security, and automation training content.',
    architectureHighlights: [
      'Structured learning paths for cybersecurity professionals',
      'Hands-on lab scenarios for PAM and network security',
      'Indonesian-language content for local accessibility',
      'Community-driven knowledge sharing',
      'Integration with certification preparation materials',
    ],
    techStack: ['TypeScript', 'Markdown', 'GitHub Pages', 'Vite'],
    status: 'concept-prd',
    featured: false,
    links: {},
  },
];
