// links.ts
export interface Link {
	name: string;
	url: string;
	icon?: string;
}

// projects.ts
export interface Technology {
	name: string;
	icon: string;
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

// socials.ts
export interface SocialMedia {
	name: string;
	url: string;
	icon?: string;
}
