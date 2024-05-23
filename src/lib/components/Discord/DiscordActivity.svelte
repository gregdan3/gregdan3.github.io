<script lang="ts">
	import type { LanyardDiscordActivity } from '$lib/types';

	const makeEmojiURL = (
		emoji_id: number,
		extension: string = 'webp',
		size: number = 256,
		quality: string = 'lossless'
	): string => {
		return `https://cdn.discordapp.com/emojis/${emoji_id}.${extension}?size=${size}&quality=${quality}`;
	};

	const makeAssetURL = (assetURL: string): string => {
		return assetURL.replace('mp:', 'https://media.discordapp.net/');
	};

	export let activity: LanyardDiscordActivity;
</script>

<div class="w-full">
	{#if activity.type === 0}
		<!-- NOTE: playing  -->
		{#if activity.assets?.small_image}
			<img
				src={makeAssetURL(activity.assets.small_image)}
				alt={activity.name}
				class="w-8 h-8 float-left mr-1 rounded-full"
			/>
		{/if}
		{#if activity.name}
			<!-- TODO: distinguish tools from games? -->
			<span>Playing</span> <span class="font-semibold">{activity.name}</span>
		{/if}
		{#if activity.name && activity.state}
			<span> - </span>
		{/if}
		<!-- TODO: fit this in better?  -->
		{#if activity.state}
			<span>{activity.state}</span>
		{/if}
	{:else if activity.type === 4}
		<!-- NOTE: custom status -->
		{#if activity.emoji?.id}
			<img
				src={makeEmojiURL(activity.emoji.id)}
				alt={activity.emoji.name}
				class="w-8 h-7 float-left mr-1"
			/>
		{:else if activity.emoji?.name}
			<span>{activity.emoji.name}</span>
		{/if}
		{#if activity.state}
			<span>{activity.state}</span>
		{/if}
	{:else}
		<!-- NOTE: unhandled activities  -->
		{#if activity.name}
			<span>Doing something! </span> <span class="font-semibold">{activity.name}</span>
		{/if}
		{#if activity.name && activity.state}
			<span> - </span>
		{/if}
		{#if activity.state}
			<span>{activity.state}</span>
		{/if}
	{/if}
</div>
