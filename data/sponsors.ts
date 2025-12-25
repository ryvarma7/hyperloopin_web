export interface Sponsor {
    id: string;
    name: string;
    logo: string;
    website: string;
    tier: 'platinum' | 'gold' | 'silver' | 'bronze';
}

export const sponsors: Sponsor[] = [
    {
        id: '1',
        name: 'TechCorp Industries',
        logo: '/images/sponsors/sponsor-1.svg',
        website: 'https://example.com',
        tier: 'platinum',
    },
    {
        id: '2',
        name: 'AeroSpace Dynamics',
        logo: '/images/sponsors/sponsor-2.svg',
        website: 'https://example.com',
        tier: 'platinum',
    },
    {
        id: '3',
        name: 'InnovateTech',
        logo: '/images/sponsors/sponsor-3.svg',
        website: 'https://example.com',
        tier: 'gold',
    },
    {
        id: '4',
        name: 'Future Mobility Labs',
        logo: '/images/sponsors/sponsor-4.svg',
        website: 'https://example.com',
        tier: 'gold',
    },
    {
        id: '5',
        name: 'Engineering Solutions',
        logo: '/images/sponsors/sponsor-5.svg',
        website: 'https://example.com',
        tier: 'silver',
    },
    {
        id: '6',
        name: 'Design Studio Pro',
        logo: '/images/sponsors/sponsor-6.svg',
        website: 'https://example.com',
        tier: 'silver',
    },
    {
        id: '7',
        name: 'Materials Science Co',
        logo: '/images/sponsors/sponsor-7.svg',
        website: 'https://example.com',
        tier: 'bronze',
    },
    {
        id: '8',
        name: 'StartUp Ventures',
        logo: '/images/sponsors/sponsor-8.svg',
        website: 'https://example.com',
        tier: 'bronze',
    },
];
