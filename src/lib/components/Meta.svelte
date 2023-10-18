<script lang="ts">
	export let title: string;
	import { page } from '$app/stores';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta
		name="viewport"
		content="width=device-width, height=device-height, user-scalable=yes, initial-scale=1.0"
	/>
	<meta property="og:title" content="gregsite - {title}" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://gregdan3.dev{page.path}" />
	<meta property="og:image" content="/avatar.jpg" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content="gregsite" />
	<meta property="og:description" content="gregsite, read because it's free" />
	<title>gregsite - {title}</title>
	<link href="https://gregdan3.dev/" rel="canonical" />
	<link href="/favicon.ico" rel="icon" type="image/png" />
</svelte:head>
