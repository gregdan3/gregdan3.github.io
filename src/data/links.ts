import type { Link } from '$lib/types';
import type { DiscordShield } from '$lib/types';

// header links
import terminalIcon from '@iconify/icons-mingcute/terminal-box-line';
import clockIcon from '@iconify/icons-mingcute/calendar-time-add-line';
import bookIcon from '@iconify/icons-mingcute/book-6-line'; // book 4 is cool
import homeIcon from '@iconify/icons-mingcute/home-4-line';

// footer links
import licenseIcon from '@iconify/icons-mingcute/document-line';
import codeIcon from '@iconify/icons-mingcute/code-line';

// socials
import discordIcon from '@iconify/icons-fa-brands/discord';
import youtubeIcon from '@iconify/icons-fa-brands/youtube';
import githubIcon from '@iconify/icons-fa-brands/github';
import telegramIcon from '@iconify/icons-fa-brands/telegram-plane';
import linkedInIcon from '@iconify/icons-fa-brands/linkedin';
import twitterIcon from '@iconify/icons-fa-brands/twitter';
import gitlabIcon from '@iconify/icons-fa-brands/gitlab';
// import archIcon from '@iconify/icons-fa-brands/arch-linux';

export const footerlinks: Link[] = [
	{ name: 'License', href: '/LICENSE.txt', icon: licenseIcon },
	{ name: 'Repo', href: 'https://github.com/gregdan3/gregdan3.github.io', icon: codeIcon }
];

export const headerlinks: Link[] = [
	{ name: 'Home', href: '/', icon: homeIcon, tooltip: '' },
	{ name: 'Blog', href: '/blog', icon: bookIcon, tooltip: 'Every dev needs an abandoned blog.' },
	{ name: 'Projects', href: '/projects', icon: terminalIcon, tooltip: '' },
	// { name: 'Mind Map', url: '/map/' },
	{ name: 'Now', href: '/now', icon: clockIcon, tooltip: 'What am I doing right now?' },
	{
		name: 'Toki Pona',
		href: 'https://mun.la/sona',
		// yellow: #FFFF63
		// blue: #000099
		bclass:
			'hover:bg-yellow-200 hover:border-blue-700 hover:text-blue-700 hover:shadow-blue-300 \
      hover:dark:bg-yellow-200 hover:dark:border-blue-700 hover:dark:text-blue-600 hover:dark:shadow-blue-800',
		tooltip: 'A language with only 120 words!'
	}
];

export const socials: Link[] = [
	// {
	// 	name: 'Gitlab',
	// 	href: 'https://gitlab.com/gregdan3',
	// 	icon: gitlabIcon,
	// 	bclass: 'hover:text-orange-400 hover:dark:text-orange-400'
	// },
	// {
	// 	name: 'LinkedIn',
	// 	href: 'https://www.linkedin.com/in/gregdan3',
	// 	icon: linkedInIcon,
	// 	bclass: 'hover:text-[#0077B5] dark:hover:text-[#0077B5]'
	// },
	// { name: 'Reddit', url: 'https://reddit.com/u/gregdan3d' },
	// {
	// 	name: 'Twitter',
	// 	href: 'https://www.twitter.com/gregdan3d',
	// 	icon: twitterIcon,
	// 	bclass: 'hover:text-blue-400 hover:dark:text-blue-400'
	// },
	{
		name: 'Telegram',
		href: 'https://gregdan3.t.me',
		icon: telegramIcon,
		bclass: 'hover:text-[#0088CC] dark:hover:text-[#0088CC]'
	},
	{
		name: 'Discord',
		href: 'https://discord.com/users/497549183847497739',
		icon: discordIcon,
		bclass: 'hover:text-[#5865F2] dark:hover:text-[#5865F2]'
	},
	{
		name: 'YouTube',
		href: 'https://www.youtube.com/@gregdan3d',
		icon: youtubeIcon,
		bclass: 'hover:text-[#FF0000] dark:hover:text-[#FF0000]'
	},
	{
		name: 'GitHub',
		href: 'https://github.com/gregdan3',
		icon: githubIcon,
		bclass: 'hover:text-black dark:hover:text-white'
	}
];

// shields
export const servers: DiscordShield[] = [
	{
		invite_link: 'https://discord.gg/mapona',
		label: 'ma pona pi toki pona',
		server_id: '301377942062366741',
		color: '3A4740',
		logoColor: 'white',
		labelColor: '5865F2',
		style: 'plastic',
		logo: 'discord'
	},
	{
		invite_link: 'https://discord.gg/ChC6qtVsSE',
		label: 'kama sona',
		server_id: '969386329513295872',
		color: '3A4740',
		logoColor: 'white',
		labelColor: 'violet',
		style: 'plastic',
		logo: 'discord'
	},
	{
		invite_link: 'https://discord.gg/arjV4Nw',
		label: 'ma toki pona',
		server_id: '453933949362765826',
		color: '3A4740',
		logoColor: 'white',
		labelColor: 'yellow',
		style: 'plastic',
		logo: 'discord'
	},
	{
		invite_link: 'https://vrc.group/TOKI.9663',
		label: 'MA TOKI PONA VR',
		server_id: '929521083193888790',
		color: '3A4740',
		logoColor: 'white',
		labelColor: '00a6e8',
		style: 'plastic',
		logo: 'discord'
	},
	{
		invite_link: 'https://discord.gg/A3ZPqnHHsy',
		label: 'kulupu Linku',
		server_id: '972470770443886662',
		color: '3A4740',
		logoColor: 'white',
		labelColor: 'lightgray',
		style: 'plastic',
		logo: 'discord'
	},
	{
		invite_link: 'https://discord.gg/7BfyugsbEK',
		label: 'ma unpa pi toki unpa',
		server_id: '1036373672895725598',
		color: '3A4740',
		logoColor: 'white',
		labelColor: 'DD2222',
		style: 'plastic',
		logo: 'discord'
	}
];
