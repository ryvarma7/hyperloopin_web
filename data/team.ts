export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: string;
    linkedin?: string;
    github?: string;
    email?: string;
}

export const teamMembers: TeamMember[] = [
    {
        id: '1',
        name: 'Member 1',
        role: 'Team Captain',
        bio: 'Team member description placeholder. Add team member bio here.',
        image: '/images/team/member-1.jpg',
        linkedin: 'https://linkedin.com',
    },
    {
        id: '2',
        name: 'Member 2',
        role: 'Technical Lead',
        bio: 'Team member description placeholder. Add team member bio here.',
        image: '/images/team/member-2.jpg',
        linkedin: 'https://linkedin.com',
    },
    {
        id: '3',
        name: 'Member 3',
        role: 'Propulsion Engineer',
        bio: 'Team member description placeholder. Add team member bio here.',
        image: '/images/team/member-3.jpg',
        linkedin: 'https://linkedin.com',
    },
    {
        id: '4',
        name: 'Member 4',
        role: 'Structural Lead',
        bio: 'Team member description placeholder. Add team member bio here.',
        image: '/images/team/member-4.jpg',
        linkedin: 'https://linkedin.com',
    },
    {
        id: '5',
        name: 'Member 5',
        role: 'Electronics Lead',
        bio: 'Team member description placeholder. Add team member bio here.',
        image: '/images/team/member-5.jpg',
        linkedin: 'https://linkedin.com',
    },
    {
        id: '6',
        name: 'Member 6',
        role: 'Design Lead',
        bio: 'Team member description placeholder. Add team member bio here.',
        image: '/images/team/member-6.jpg',
        linkedin: 'https://linkedin.com',
    },
    {
        id: '7',
        name: 'Member 7',
        role: 'Software Engineer',
        bio: 'Team member description placeholder. Add team member bio here.',
        image: '/images/team/member-7.jpg',
        linkedin: 'https://linkedin.com',
    },
    {
        id: '8',
        name: 'Member 8',
        role: 'Operations Manager',
        bio: 'Team member description placeholder. Add team member bio here.',
        image: '/images/team/member-8.jpg',
        linkedin: 'https://linkedin.com',
    },
];
