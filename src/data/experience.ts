export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'present';
  highlights: string[];
  techTags: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: 'huawei-nsm',
    role: 'Network Security Manager',
    company: 'Huawei',
    location: 'Jakarta, Indonesia',
    startDate: '2019-07',
    endDate: 'present',
    highlights: [
      'Managed network security operations and governance across mission-critical infrastructure environments.',
      'Supported CyberArk PAM integration and privileged access workflows across large-scale device estates.',
      'Improved configuration and reporting workflows through Python-based automation, reducing multivendor processing time from approximately 24 hours to under 15 minutes.',
      'Automated large router-data processing activities, reducing manual workload by approximately 80%.',
      'Supported vulnerability governance, patch coordination, SIEM/log ingestion, and incident-response activities across operational teams.',
    ],
    techTags: ['CyberArk PAM', 'Python', 'Network Security', 'SIEM', 'Automation'],
  },
];
