import type { Link } from '$lib/types';

// header links
import terminalIcon from '@iconify/icons-material-symbols/terminal-sharp';
import clockIcon from '@iconify/icons-material-symbols/calendar-clock-outline-sharp';
import bookIcon from '@iconify/icons-material-symbols/menu-book-outline-sharp';
import homeIcon from '@iconify/icons-material-symbols/home-outline-sharp';

// footer links
import licenseIcon from '@iconify/icons-carbon/license';
import codeIcon from '@iconify/icons-carbon/code';

// socials
import discordIcon from '@iconify/icons-carbon/logo-discord';
import youtubeIcon from '@iconify/icons-carbon/logo-youtube';
import githubIcon from '@iconify/icons-carbon/logo-github';
import telegramIcon from '@iconify/icons-cib/telegram-plane';
import linkedInIcon from '@iconify/icons-carbon/logo-linkedin';
import twitterIcon from '@iconify/icons-carbon/logo-twitter';
import gitlabIcon from '@iconify/icons-carbon/logo-gitlab';
import archIcon from '@iconify/icons-cib/arch-linux';

export const footerlinks: Link[] = [
	{ name: 'License', href: '/LICENSE.txt', icon: licenseIcon },
	{ name: 'Repo', href: 'https://github.com/gregdan3/gregdan3.github.io', icon: codeIcon }
];

export const headerlinks: Link[] = [
	{ name: 'Home', href: '/', icon: homeIcon, tooltip: '' },
	{ name: 'Blog', href: '/blog/', icon: bookIcon, tooltip: 'Every dev needs an abandoned blog.' },
	{ name: 'Projects', href: '/projects/', icon: terminalIcon, tooltip: '' },
	// { name: 'Mind Map', url: '/map/' },
	{ name: 'Now', href: '/now/', icon: clockIcon, tooltip: '' },
	{
		name: 'Toki Pona',
		href: 'https://mun.la',
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
