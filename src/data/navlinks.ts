export interface NavLinks {
	name: string;
	url: string;
}

export const links: NavLinks[] = [
	{ name: 'Home', url: '/' },
	{ name: 'Blog', url: '/blog/' },
	{ name: 'Projects', url: '/projects/' },
	// { name: 'Mind Map', url: '/map/' },
	{ name: 'Now', url: '/now/' },
	{ name: 'Toki Pona', url: 'https://mun.la' }
];
