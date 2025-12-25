export interface Mentor {
    id: string;
    name: string;
    role: string;
    affiliation: string;
    bio: string;
    image: string;
    linkedin?: string;
}

export const mentors: Mentor[] = [
    {
        id: '1',
        name: 'Mentor 1',
        role: 'Faculty Advisor',
        affiliation: 'Department of Engineering',
        bio: 'Mentor description placeholder. Add mentor bio here.',
        image: '/images/mentors/mentor-1.jpg',
        linkedin: 'https://linkedin.com',
    },
    {
        id: '2',
        name: 'Mentor 2',
        role: 'Technical Advisor',
        affiliation: 'Department of Engineering',
        bio: 'Mentor description placeholder. Add mentor bio here.',
        image: '/images/mentors/mentor-2.jpg',
        linkedin: 'https://linkedin.com',
    },
    {
        id: '3',
        name: 'Mentor 3',
        role: 'Industry Mentor',
        affiliation: 'Industry Partner',
        bio: 'Mentor description placeholder. Add mentor bio here.',
        image: '/images/mentors/mentor-3.jpg',
        linkedin: 'https://linkedin.com',
    },
    {
        id: '4',
        name: 'Mentor 4',
        role: 'Research Advisor',
        affiliation: 'Department of Engineering',
        bio: 'Mentor description placeholder. Add mentor bio here.',
        image: '/images/mentors/mentor-4.jpg',
        linkedin: 'https://linkedin.com',
    },
];
