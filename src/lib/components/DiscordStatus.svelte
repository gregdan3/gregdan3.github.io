<script lang="ts">
	import { Skeleton, ImagePlaceholder } from 'flowbite-svelte';
	import type { LanyardData } from '$lib/types';

	export let user_id: string;

	const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));
	async function fetchDiscordStatus(user_id: string): Promise<LanyardData> {
		let resp = await fetch('/discord', {
			method: 'POST',
			body: JSON.stringify({ user_id: user_id })
		});
		// await sleep(15000);
		return await resp.json();
	}

	const makeAvatarURL = (user_id: number, avatar_id: string, size: number = 256): string => {
		return `https://cdn.discordapp.com/avatars/${user_id}/${avatar_id}?size=${size}`;
	};
	const makeBannerURL = (user_id: number, banner_id: string, size: number = 480): string => {
		return `https://cdn.discordapp.com/banners/${user_id}/${banner_id}?size=${size}`;
	};
	const makeBadgeURL = (badge_id: string, extension: string = 'png') => {
		return `https://cdn.discordapp.com/badge-icons/${badge_id}.${extension}`;
	};
	const makeEmojiURL = (
		emoji_id: number,
		extension: string = 'webp',
		size: number = 256,
		quality: string = 'lossless'
	): string => {
		return `https://cdn.discordapp.com/emojis/${emoji_id}.${extension}?size=${size}&quality=${quality}`;
	};

	const statusColors: Record<string, string> = {
		online: 'bg-emerald-500',
		idle: 'bg-amber-400',
		dnd: 'bg-rose-400',
		offline: 'bg-gray-400'
	};
	const getStatusColor = (status: 'online' | 'idle' | 'dnd' | 'offline') => {
		const str = statusColors[status];
		if (!str) return 'bg-gray-400';
		return str;
	};

	let statusClasses = `absolute bottom-0.5 right-0.5 w-4 h-4 rounded-full ring-4 ring-neutral-200 dark:ring-neutral-600`;
</script>

<!-- TODO: copy discord profile look -->

<div>
	<div
		class="not-prose bg-gradient-to-r from-slate-100 to-slate-400 dark:from-neutral-800 dark:to-neutral-600 shadow-sm border border-accent dark:border-accent-dark p-2.5 rounded-lg mb-4 flex gap-2 items-center leading-snug h-fit w-fit"
	>
		{#await fetchDiscordStatus(user_id)}
			<ImagePlaceholder imgHeight="20" class="w-20 h-20 overflow-hidden" />
			<Skeleton size="sm" class="w-52 h-20 inline-block flex-wrap overflow-hidden" />
		{:then data}
			<!-- <div> -->
			<!-- 	<img -->
			<!-- 		src={makeBannerURL(data.discord_user.id, data.kv.banner)} -->
			<!-- 		alt={data.discord_user.global_name} -->
			<!-- 	/> -->
			<!-- </div> -->
			<div class="w-20 h-20 bg-neutral flex-shrink-0 relative flex-nowrap rounded-full">
				<img
					src={makeAvatarURL(data.discord_user.id, data.discord_user.avatar)}
					alt={data.discord_user.global_name}
				/>
				<div class={statusClasses + ' ' + getStatusColor(data.discord_status)} />
				<!-- NOTE: flowbite-svelte avatar sucks -->
			</div>
			<div class="pr-4">
				<div>
					<span class="font-bold pr-1 rounded-full">{data.discord_user.display_name}</span>
					<span class="font-light text-md">@{data.discord_user.global_name}</span>
				</div>
				{#each data.activities as activity}
					<!-- TODO: handle more activity types? -->
					<div class="flex">
						{#if activity.emoji?.id}
							<img
								src={makeEmojiURL(activity.emoji.id)}
								alt={activity.emoji.name}
								class="w-8 h-8"
							/>
						{/if}
						{activity.state}
					</div>
				{/each}
				<div class="invisible">secret</div>
			</div>
		{/await}
	</div>
</div>
