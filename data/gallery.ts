export interface GalleryImage {
    id: string;
    src: string;
    alt: string;
    caption: string;
    category: 'pod' | 'team' | 'event' | 'testing' | 'workshop';
    width: number;
    height: number;
}

export const galleryImages: GalleryImage[] = [
    {
        id: '1',
        src: '/images/gallery/gallery-1.jpg',
        alt: 'Hyperloopin pod in testing facility',
        caption: 'Velocity III pod during final assembly',
        category: 'pod',
        width: 1200,
        height: 800,
    },
    {
        id: '2',
        src: '/images/gallery/gallery-2.jpg',
        alt: 'Team working on pod electronics',
        caption: 'Electronics team integration session',
        category: 'team',
        width: 1200,
        height: 800,
    },
    {
        id: '3',
        src: '/images/gallery/gallery-3.jpg',
        alt: 'Competition day at SpaceX facility',
        caption: 'SpaceX Hyperloop Competition 2024',
        category: 'event',
        width: 1200,
        height: 800,
    },
    {
        id: '4',
        src: '/images/gallery/gallery-4.jpg',
        alt: 'High-speed testing run',
        caption: 'Achieving 450 km/h during testing',
        category: 'testing',
        width: 1200,
        height: 800,
    },
    {
        id: '5',
        src: '/images/gallery/gallery-5.jpg',
        alt: 'Team workshop session',
        caption: 'Design review workshop',
        category: 'workshop',
        width: 1200,
        height: 800,
    },
    {
        id: '6',
        src: '/images/gallery/gallery-6.jpg',
        alt: 'Pod levitation test',
        caption: 'Magnetic levitation system test',
        category: 'testing',
        width: 1200,
        height: 800,
    },
    {
        id: '7',
        src: '/images/gallery/gallery-7.jpg',
        alt: 'Team celebration after competition',
        caption: 'Celebrating our Top 10 finish',
        category: 'event',
        width: 1200,
        height: 800,
    },
    {
        id: '8',
        src: '/images/gallery/gallery-8.jpg',
        alt: 'Pod exterior design reveal',
        caption: 'Unveiling our new pod design',
        category: 'pod',
        width: 1200,
        height: 800,
    },
];
