export interface Achievement {
    id: string;
    year: string;
    title: string;
    description: string;
    icon: 'trophy' | 'rocket' | 'star' | 'medal' | 'flag' | 'lightning';
    highlight?: boolean;
}

export const achievements: Achievement[] = [
    {
        id: '1',
        year: '2024',
        title: 'Achievement 1',
        description: 'Achievement description placeholder. Add details about this achievement here.',
        icon: 'trophy',
        highlight: true,
    },
    {
        id: '2',
        year: '2024',
        title: 'Achievement 2',
        description: 'Achievement description placeholder. Add details about this achievement here.',
        icon: 'rocket',
    },
    {
        id: '3',
        year: '2023',
        title: 'Achievement 3',
        description: 'Achievement description placeholder. Add details about this achievement here.',
        icon: 'medal',
        highlight: true,
    },
    {
        id: '4',
        year: '2023',
        title: 'Achievement 4',
        description: 'Achievement description placeholder. Add details about this achievement here.',
        icon: 'lightning',
    },
    {
        id: '5',
        year: '2022',
        title: 'Achievement 5',
        description: 'Achievement description placeholder. Add details about this achievement here.',
        icon: 'flag',
    },
    {
        id: '6',
        year: '2022',
        title: 'Achievement 6',
        description: 'Achievement description placeholder. Add details about this achievement here.',
        icon: 'star',
    },
    {
        id: '7',
        year: '2021',
        title: 'Achievement 7',
        description: 'Achievement description placeholder. Add details about this achievement here.',
        icon: 'rocket',
        highlight: true,
    },
    {
        id: '8',
        year: '2020',
        title: 'Achievement 8',
        description: 'Achievement description placeholder. Add details about this achievement here.',
        icon: 'flag',
    },
];
