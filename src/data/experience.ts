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
    startDate: '2023-04',
    endDate: 'present',
    highlights: [
      'Supervise and mentor teams of first and second-level security analysts, helping them develop their skills and stay current with industry best practices.',
      'Maintain continuous communication with key stakeholders in support of the security strategy, soliciting feedback to uplift programs and capabilities.',
      'Assist in the development of workflows for transitioning strategic plans into implementation plans and operational readiness.',
      'Develop security policies, procedures, and standards based on the security strategy and roadmap.',
      'Design cybersecurity awareness and stakeholder sensitization programs including materials, posters, newsletters, and training workshops.',
      'Facilitate strategic planning initiatives, documentation, technical roadmaps, and security tool rationalization.',
    ],
    techTags: ['Network Security Implementation', 'CyberArk PAM', 'Security Strategy', 'Stakeholder Management'],
  },
  {
    id: 'huawei-secops',
    role: 'XLMS Security - SecOps',
    company: 'Huawei',
    location: 'Jakarta, Indonesia',
    startDate: '2021-03',
    endDate: '2023-04',
    highlights: [
      'Managed all Identity Access Management activities with CyberArk and other platforms.',
      'Ensured findings of security threats targeting company systems were coordinated with responsible parties for mitigation.',
      'Oversaw patch management in development and production settings as a defense against vulnerabilities.',
      'Assisted with incident response, vulnerability analysis, threat hunting, and remediation activities at the first, second, and third levels.',
      'Reviewed existing rules, use cases, and playbooks to improve the effectiveness of security threat detection tools.',
      'Ensured all security devices reliably forwarded logs to monitoring tools and enforced security compliance based on CIS standards.',
      'Provided up-to-date reports of trends in security threat activity targeting the company\'s environment.',
    ],
    techTags: ['CyberArk PAM', 'IAM', 'Incident Response', 'Vulnerability Analysis', 'CIS Standards', 'Nessus', 'DevSecOps', 'Zero Trust'],
  },
  {
    id: 'huawei-noc',
    role: 'XLMS Network Operations Centers (NOC) - Software Engineer',
    company: 'Huawei',
    location: 'Jakarta, Indonesia',
    startDate: '2019-07',
    endDate: '2021-03',
    highlights: [
      'Developed the first IP Address Manager in the XLMS department.',
      'Automated network operations using Python scripts (Nornir, Netmiko, Ansible).',
      'Automated the collection and cleaning of network data from multivendor routers and microwave transport (NEC iPaso).',
      'Analyzed Transport KPIs (utilization, packet loss) using BI tools (Tableau, Power BI), reducing reporting delay from day-minus-one to real-time 15 minutes.',
      'Set up servers, ESXi virtualization, and NMS platforms including Solarwinds, Cacti, LibreNMS, and Observium.',
    ],
    techTags: ['Python', 'Nornir', 'Netmiko', 'Ansible', 'Tableau', 'Power BI', 'ESXi', 'LibreNMS', 'Network Automation'],
  },
];
