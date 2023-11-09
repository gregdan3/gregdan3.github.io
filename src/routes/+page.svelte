<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import Clock from '$lib/components/Clock.svelte';
	import Github from '$lib/components/GithubActivity.svelte';
	import Running from '$lib/components/RunningRecord.svelte';
	import Discord from '$lib/components/DiscordStatus.svelte';

	export let tz = 'CT';

	const metadata = {
		// frontmatter standin
		description: 'Welcome to gregsite.'
	};
</script>

<svelte:head>
	<Meta {...metadata} />
</svelte:head>

<div>
	I'm Gregory (@gregdan3). I do <a href="">devops</a>, <a href="">database</a>, and
	<a href="">backend</a>. I <a href="">self teach</a>, the scariest thing any dev can imagine. I
	have no idea how to breathe
</div>
<br />

<Clock {tz} />

<Github />
<!-- recent repos, activity graph -->

<Running />
<!-- recent run(s), personal records -->

<Discord />
<!-- avatar, online status, text status -->

<!-- TODO: youtube stats? -->
