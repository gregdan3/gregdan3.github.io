import type { IconifyIcon } from '@iconify/svelte';

// links.ts
export interface Link {
	name: string;
	href: string;
	icon?: IconifyIcon;
	bclass?: string;
	tooltip?: string;
}

// projects.ts
export interface Technology {
	name: string;
	icon: string; // TODO
}

type Role = 'Contributor' | 'Maintainer' | 'Creator';

export interface Project {
	name: string;
	repo: string;
	link?: string;
	blog?: string;
	role: Role;
	description: string;
	skills: Technology[];
	header?: string;
}
