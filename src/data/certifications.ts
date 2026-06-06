export type CertCategory = 'Security' | 'Cloud' | 'Networking' | 'Automation' | 'Data' | 'AI' | 'IoT';

export interface Certification {
  name: string;
  issuer: string;
  url?: string;
  category: CertCategory;
}

export const certifications: Certification[] = [
  {
    name: 'HCIA IoT',
    issuer: 'Huawei',
    category: 'IoT',
  },
  {
    name: 'HCIA Security',
    issuer: 'Huawei',
    category: 'Security',
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    url: 'https://www.credly.com/badges/956a4498-6df9-446f-b069-32ed0fe1b2d8/public_url',
    category: 'Cloud',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    url: 'https://www.credly.com/badges/3e0c62f3-8bba-4c22-b19b-c1e606d08ba4/public_url',
    category: 'Cloud',
  },
  {
    name: 'Google AI Essentials',
    issuer: 'Google / Coursera',
    url: 'https://www.coursera.org/account/accomplishments/specialization/BS89XSFM0PLZ',
    category: 'AI',
  },
  {
    name: 'Cisco DevNet Associate',
    issuer: 'Cisco',
    url: 'https://www.credly.com/badges/08572150-a887-49b8-9c51-6f4d7c355b43/linked_in_profile',
    category: 'Automation',
  },
  {
    name: 'CCNA',
    issuer: 'Cisco',
    url: 'https://www.credly.com/badges/fd78aa61-0e8b-4dca-b3c7-797839fb4733?source=linked_in_profile',
    category: 'Networking',
  },
  {
    name: 'CCNA Cybersecurity Operations',
    issuer: 'Cisco',
    url: 'https://www.credly.com/badges/ad5fb410-2ca9-4178-a550-ef50aade5825/public_url',
    category: 'Security',
  },
  {
    name: 'CCNA Automation',
    issuer: 'Cisco',
    url: 'https://www.credly.com/badges/08572150-a887-49b8-9c51-6f4d7c355b43/public_url',
    category: 'Automation',
  },
  {
    name: 'Data Science Foundations',
    issuer: 'IBM / Credly',
    url: 'https://www.credly.com/badges/06337717-d185-4644-a01f-17a256fcb67f/public_url',
    category: 'Data',
  },
];
