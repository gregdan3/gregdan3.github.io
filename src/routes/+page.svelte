<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import Clock from '$lib/components/Clock.svelte';
	import Github from '$lib/components/GithubActivity.svelte';
	import Running from '$lib/components/RunningRecord.svelte';
	import Discord from '$lib/components/Discord/Discord.svelte';
	import Shield from '$lib/components/Shield.svelte';

	import { servers } from '$src/data/links';

	const metadata = {
		// frontmatter standin
		description: 'Welcome to gregsite.'
	};

	export let tz = 'CT';
	export let discordUserID = '497549183847497739';
</script>

<svelte:head>
	<Meta {metadata} />
</svelte:head>

<div>
	I'm Gregory (@gregdan3). I do devops, database, and backend. Frontend was suspiciously missing
	from this list, so this site is now a permanent work in progress as I
	<a href="/blog/learning-svelte">learn Svelte</a>. I have no idea how to breathe.
</div>

<br />

<div class="not-prose flex flex-col">
	<div class="flex flex-col md:flex-row">
		<div class="pb-2 md:pr-2">
			<Discord user_id={discordUserID} />
		</div>
		<div class="flex flex-wrap md:flex-col shrink-0 md:mt-1">
			{#each servers as server}
				<Shield {server}></Shield>
			{/each}
		</div>
	</div>

	<Clock {tz} />

	<Github />
	<!-- recent repos, activity graph -->

	<Running />
	<!-- recent run(s), personal records -->

	<!-- avatar, online status, text status -->

	<!-- TODO: youtube stats? -->
</div>
