export interface NavLink {
    label: string;
    href: string;
    isExternal?: boolean;
}

export const navigationLinks: NavLink[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Team', href: '#team' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Mentors', href: '#mentors' },
    { label: 'Sponsors', href: '#sponsors' },
    { label: 'News', href: '#news' },
    { label: 'Contact', href: '#contact' },
];

export const socialLinks = [
    {
        name: 'Twitter',
        href: 'https://twitter.com/hyperloopin',
        icon: 'twitter',
    },
    {
        name: 'Instagram',
        href: 'https://instagram.com/hyperloopin',
        icon: 'instagram',
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/company/hyperloopin',
        icon: 'linkedin',
    },
    {
        name: 'YouTube',
        href: 'https://youtube.com/@hyperloopin',
        icon: 'youtube',
    },
    {
        name: 'GitHub',
        href: 'https://github.com/hyperloopin',
        icon: 'github',
    },
];
