import type { ProjectData } from '$lib/types';

import gregdan3Banner from '$src/data/images/gregdan3.dev.png';
import wttrBanner from '$src/data/images/wttr.in.png';
import lipuLinkuBanner from '$src/data/images/linku.la.png';
import ilotptBanner from '$src/data/images/ilotpt.png';
import swgigBanner from '$src/data/images/swgig.png';
import coolspacethingsBanner from '$src/data/images/coolspacethings.png';
import iloLinkuBanner from '$src/data/images/ilolinku.png';

export const projects: ProjectData[] = [
	{
		name: 'gregdan3.dev',
		link: 'https://gregdan3.dev',
		repo: 'https://github.com/gregdan3/gregdan3.github.io',
		blog: 'blog/learning-svelte',
		role: 'Creator',
		banner: gregdan3Banner,
		description:
			'Gregsite, now with SvelteKit and TailwindCSS. I wanted to make my site flashier and more interactive than my static site generator could do, and this is it!',
		skills: [
			{ name: 'SvelteKit', icon: 'skill-icons:svelte' },
			{ name: 'TypeScript', icon: 'skill-icons:typescript' },
			{ name: 'TailwindCSS', icon: 'skill-icons:tailwindcss-dark' },
			{ name: 'Markdown', icon: 'skill-icons:markdown-dark' }
		]
	},
	{
		name: 'lipu Linku',
		repo: 'https://github.com/lipu-linku/lipu',
		link: 'https://linku.la/',
		role: 'Maintainer',
		description:
			'A web dictionary for Toki Pona, with all the fancy search features you could ever ask for!',
		banner: lipuLinkuBanner,
		skills: [
			{ name: 'SvelteKit', icon: 'skill-icons:svelte' },
			{ name: 'TypeScript', icon: 'skill-icons:typescript' },
			{ name: 'TailwindCSS', icon: 'skill-icons:tailwindcss-dark' }
			// { name: 'HTML', icon: 'skill-icons:html' },
			// { name: 'CSS', icon: 'skill-icons:css' },
			// { name: 'JavaScript', icon: 'skill-icons:javascript' }
		]
	},
	{
		name: 'ilo Linku',
		repo: 'https://github.com/lipu-linku/ilo',
		role: 'Maintainer',
		link: 'https://discord.gg/A3ZPqnHHsy',
		banner: iloLinkuBanner,
		description:
			'A Discord bot dictionary for Toki Pona, with various other features tacked on haphazardly!',
		skills: [
			{ name: 'Python', icon: 'skill-icons:python-dark' },
			{ name: 'Pycord', icon: 'skill-icons:discord' }
		]
	},
	// {
	// 	name: 'ilo pi kama sona',
	// 	repo: 'https://github.com/gregdan3/ilo-sona',
	// 	role: 'Maintainer',
	// 	description: 'A Discord bot which runs translation challenges for Toki Pona discord servers!',
	// 	skills: [
	// 		{ name: 'Python', icon: 'skill-icons:python-dark' },
	// 		{ name: 'SQLite', icon: 'skill-icons:sqlite' },
	// 		{ name: 'Pycord', icon: 'skill-icons:discord' }
	// 	]
	// },
	{
		name: 'ilo pi toki pona taso',
		repo: 'https://github.com/gregdan3/ilo-pi-toki-pona-taso',
		link: 'https://discord.gg/3kUGdHHcmj',
		role: 'Creator',
		description:
			'ilo ni li lon ilo Siko li toki pona taso e sina! A Discord bot which enforces that you speak Toki Pona!',
		banner: ilotptBanner,
		skills: [
			{ name: 'Python', icon: 'skill-icons:python-dark' },
			{ name: 'SQLite', icon: 'skill-icons:sqlite' },
			{ name: 'Pycord', icon: 'skill-icons:discord' }
		]
	},
	// {
	// 	name: 'Homelab',
	// 	repo: 'https://github.com/gregdan3/homelab',
	// 	role: 'Creator',
	// 	description: 'My homelab.',
	// 	skills: [
	// 		{ name: 'Kubernetes', icon: 'skill-icons:kubernetes' },
	// 		{ name: 'Ansible', icon: 'skill-icons:ansible' },
	// 		{ name: 'Linux', icon: 'skill-icons:linux-dark' },
	// 		{ name: 'Docker', icon: 'skill-icons:docker' }
	// 	]
	// },
	{
		name: 'Static Website Generator I Guess (SWGIG)',
		repo: 'https://github.com/gregdan3/SWGIG',
		role: 'Creator',
		description:
			"If you've ever wanted to generate a static website, this is not the place to start. But you'll sure learn how weird Pandoc is.",
		banner: swgigBanner,
		skills: [
			{ name: 'HTML', icon: 'skill-icons:html' },
			{ name: 'CSS', icon: 'skill-icons:css' },
			{ name: 'JavaScript', icon: 'skill-icons:javascript' },
			{ name: 'Markdown', icon: 'skill-icons:markdown-dark' }
		]
	},
	{
		name: 'wttr.in',
		link: 'https://wttr.in/',
		repo: 'https://github.com/chubin/wttr.in',
		role: 'Contributor',
		description:
			"A weather service fit for your terminal. I fixed a weird bug that was making it useless in the United States, and I'm proud of that forever.",
		banner: wttrBanner,
		skills: [
			{ name: 'Python', icon: 'skill-icons:python-dark' },
			{ name: 'Golang', icon: 'skill-icons:golang' }
		]
	},
	{
		name: 'Cool Space Things',
		link: 'https://coolspacethings.neocities.org',
		repo: 'https://github.com/gregdan3/n2yo-vis',
		role: 'Creator',
		banner: coolspacethingsBanner,
		description:
			'A very cool, if cludgy, NORAD object visualizer. Made with @jmfrees while in my undergrad. Yes, I know it takes a thousand years to load. Yes, I know the data is out of date.',
		skills: [
			{ name: 'JavaScript', icon: 'skill-icons:javascript' },
			{ name: 'D3', icon: 'skill-icons:d3-dark' }
		]
	}
];
