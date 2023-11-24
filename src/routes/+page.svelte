<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import Clock from '$lib/components/Clock.svelte';
	import Github from '$lib/components/GithubActivity.svelte';
	import Running from '$lib/components/RunningRecord.svelte';
	import Discord from '$lib/components/DiscordStatus.svelte';

	const metadata = {
		// frontmatter standin
		description: 'Welcome to gregsite.'
	};

	export let tz = 'CT';
	export let user_id = '497549183847497739';
</script>

<svelte:head>
	<Meta {metadata} />
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

<Discord {user_id} />
<!-- avatar, online status, text status -->

<!-- TODO: youtube stats? -->
