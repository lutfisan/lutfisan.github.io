export interface SkillGroup {
  id: string;
  label: string;
  icon: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'security-pam',
    label: 'Security, PAM & IAM',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    items: ['CyberArk PAM', 'Privileged Access Management', 'Identity & Access Management',
            'Zero Trust', 'PKI', 'SIEM / Log Ingestion', 'Incident Response',
            'Vulnerability Governance', 'Patch Governance', 'ISO 27001 Awareness'],
  },
  {
    id: 'network-infra',
    label: 'Network Security & Infrastructure',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
    items: ['Network Security Architecture', 'Firewall / Routing / Switching', 'ESXi',
            'NMS Platforms', 'LibreNMS', 'NEC iPasoLink', 'SNMP', 'gNMI', 'Network Telemetry'],
  },
  {
    id: 'automation',
    label: 'Automation & Data Processing',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    items: ['Python', 'Nornir', 'Netmiko', 'Ansible-style Automation', 'CSV / Excel Processing',
            'API Integration', 'Reporting Automation', 'Tableau', 'Power BI'],
  },
  {
    id: 'software',
    label: 'Software & Systems Engineering',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    items: ['TypeScript', 'Go', 'REST APIs', 'GitHub Actions', 'Docker',
            'Linux / systemd', 'Secure Scripting', 'Logging & Error Handling'],
  },
  {
    id: 'ai-agents',
    label: 'AI Agents & Knowledge Systems',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"/><path d="M16 14H8a4 4 0 0 0-4 4v2h16v-2a4 4 0 0 0-4-4z"/><circle cx="12" cy="6" r="1"/></svg>`,
    items: ['AI-Agent Orchestration', 'Hermes Agent', 'Prompt Engineering',
            'Obsidian / Second-Brain Workflows', 'Finance & Coding Assistant Workflows',
            'Retrieval-style Knowledge Management'],
  },
];
