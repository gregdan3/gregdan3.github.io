<script lang="ts">
	import type { LanyardData } from '$lib/types';
	import { sleep } from '$lib/utils';

	import { Skeleton, ImagePlaceholder, CardPlaceholder } from 'flowbite-svelte';

	import DiscordAvatar from '$lib/components/Discord/DiscordAvatar.svelte';
	import DiscordActivity from '$lib/components/Discord/DiscordActivity.svelte';

	export let user_id: string;

	async function fetchDiscordStatus(user_id: string): Promise<LanyardData> {
		let resp = await fetch('/discord', {
			method: 'POST',
			body: JSON.stringify({ user_id: user_id })
		});
		// await sleep(3000);
		return await resp.json();
	}

	const makeBannerURL = (user_id: number, banner_id: string, size: number = 1024): string => {
		return `https://cdn.discordapp.com/banners/${user_id}/${banner_id}?size=${size}`;
	};
	const makeBadgeURL = (badge_id: string, extension: string = 'png') => {
		return `https://cdn.discordapp.com/badge-icons/${badge_id}.${extension}`;
	};
</script>

<!-- TODO: copy discord profile look -->

<div
	class="not-prose flex shadow-xl border border-accent dark:border-accent-dark bg-white dark:bg-[#313338] rounded-lg leading-snug w-fit h-fit"
>
	{#await fetchDiscordStatus(user_id)}
		<div class="overflow-hidden">
			<CardPlaceholder size="lg" class="h-32 overflow-hidden" />
			<div class="flex overflow-hidden m-4">
				<ImagePlaceholder imgHeight="12" class="h-16 w-16 overflow-hidden" />
				<Skeleton class="h-20 w-72 overflow-hidden" />
			</div>
		</div>
	{:then data}
		<div class="flex flex-col">
			{#if data.kv.banner}
				<img
					src={makeBannerURL(data.discord_user.id, data.kv.banner)}
					alt={data.discord_user.username}
					class="rounded-t-md border-b border-accent dark:border-accent-dark"
				/>
			{/if}

			<div class="flex p-2">
				<DiscordAvatar {data} />
				<div class="flex flex-col ml-2 w-full">
					<div class="flex w-full relative">
						<!-- structurally, this is just another activity -->
						<span class="font-bold pr-1 whitespace-nowrap">{data.discord_user.global_name}</span>
						<span class="font-light ml-4 whitespace-nowrap">@{data.discord_user.username}</span>
						{#if data.kv.badges}
							{@const badges = data.kv.badges.split(' ')}
							<div
								class="flex absolute right-0 px-1 -translate-y-10 bg-white dark:bg-[#313338] rounded-full"
							>
								{#each badges as badge}
									<img
										src={makeBadgeURL(badge)}
										alt={data.discord_user.username + "'s badge'"}
										class="h-6 w-6"
									/>
								{/each}
							</div>
						{/if}
					</div>

					{#each data.activities.slice(0, 2) as activity}
						<!-- TODO: allow more activities to be shown -->
						<DiscordActivity {activity} />
					{/each}
				</div>
			</div>
		</div>
	{/await}
</div>
