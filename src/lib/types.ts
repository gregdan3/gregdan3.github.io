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

export interface LanyardData {
	spotify: LanyardSpotifyData | null;
	kv: { [key: string]: string };
	listening_to_spotify: boolean;
	discord_user: LanyardDiscordUser;
	discord_status: 'online' | 'idle' | 'dnd' | 'offline';
	activities: LanyardDiscordActivity[];
	active_on_discord_mobile: boolean;
	active_on_discord_desktop: boolean;
	active_on_discord_web: boolean;
}

export interface LanyardTimestamps {
	start: number;
	end: number;
}

export interface LanyardSpotifyData {
	track_id: string;
	timestamps: LanyardTimestamps;
	song: string;
	artist: string;
	album_art_url: string;
	album: string;
}

export interface LanyardDiscordUser {
	id: number;
	username: string;
	avatar: string;
	discriminator: string;
	bot: boolean;
	global_name: string;
	avatar_decoration_data: string;
	display_name: string;
	public_flags: number;
}

export interface LanyardDiscordEmoji {
	id: number;
	name: string;
	animated: boolean;
}

export interface LanyardDiscordParty {
	id: string;
}

export interface LanyardDiscordAssets {
	small_text: string;
	small_image: string;
	large_text: string;
	large_image: string;
}

export interface LanyardDiscordActivity {
	type: number;
	state: string;
	name: string;
	id: string;
	emoji?: LanyardDiscordEmoji;
	created_at: number;
	timestamps?: LanyardTimestamps;
	sync_id?: string;
	session_id?: string;
	party?: LanyardDiscordParty;
	flags?: number;
	details?: string;
	assets?: LanyardDiscordAssets;
	application_id?: number;
}
