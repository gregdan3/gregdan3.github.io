import type { IconifyIcon } from '@iconify/svelte';

export interface MetaData {
	title: string;
	description?: string;
}

export interface BlogPost extends MetaData {
	slug: string; // url to post based on its name
	author?: string;
	date: string;
	published: boolean;
	tags: string[];
	image?: string; // src
}

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
