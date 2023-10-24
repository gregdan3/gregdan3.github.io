import type { Project } from '$lib/types';

export const links: Project[] = [
	{
		name: 'lipu Linku',
		repo: 'https://github.com/lipu-linku/lipu-linku.github.io',
		role: 'Maintainer',
		description: 'A Toki Pona dictionary.',
		skills: [
			{ name: 'JavaScript', icon: 'js' }
			// { name: 'TailwindCSS', icon: 'tailwindcss' },
			// { name: 'TypeScript', icon: 'ts' },
			// { name: 'Svelte', icon: 'svelte' },
		]
	},
	{
		name: 'ilo Linku',
		link: 'https://linku.la/',
		repo: 'https://github.com/lipu-linku/ilo',
		role: 'Maintainer',
		description: 'A Discord bot for lipu Link',
		skills: [
			{ name: 'Python', icon: 'python' },
			{ name: 'Pycord', icon: 'pycord' }
		]
	},
	{
		name: 'ilo pi toki pona taso',
		repo: 'https://github.com/gregdan3/ilo-pi-toki-pona-taso',
		role: 'Creator',
		description: "A Discord bot to ensure you're speaking Toki Pona",
		skills: [
			{ name: 'Python', icon: 'python' },
			{ name: 'SQLite', icon: 'sqlite' }
		]
	},
	{
		name: 'Homelab',
		repo: 'https://github.com/gregdan3/homelab',
		role: 'Creator',
		description: 'My homelab.',
		skills: [
			{ name: 'Linux', icon: 'linux' },
			{ name: 'Ansible', icon: 'ansible' },
			{ name: 'Docker', icon: 'docker' }
			// { name: 'Kubernetes', icon: 'kubernetes' }
		]
	},
	{
		name: 'wttr.in',
		link: 'https://wttr.in/',
		repo: 'https://github.com/chubin/wttr.in',
		role: 'Contributor',
		description: 'A weather service fit for your terminal.',
		skills: [
			{ name: 'Python', icon: 'python' },
			{ name: 'Golang', icon: 'golang' }
		]
	}
];
