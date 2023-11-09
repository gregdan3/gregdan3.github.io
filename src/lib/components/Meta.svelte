<script lang="ts">
	import avatar from '$lib/assets/avatar.jpg';
	import { page } from '$app/stores';

	export let title: string = '';
	export let description = "read because it's free";
	export let image: string = avatar;

	const locale = 'en_US';
	const site_name = 'gregsite';
	const href = 'https://gregdan3.dev';

	let titleFull: string;
	if (title) {
		titleFull = `${title} | ${site_name}`;
	} else {
		titleFull = `${site_name}`;
	}
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta
		name="viewport"
		content="width=device-width, height=device-height, user-scalable=yes, initial-scale=1.0"
	/>
	<meta property="og:title" content={titleFull} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{href}{$page.url.pathname}" />
	<meta property="og:image" content={image} />
	<meta property="og:locale" content={locale} />
	<meta property="og:site_name" content={site_name} />
	<meta property="og:description" content={description} />

	<title>{titleFull}</title>
	<link {href} rel="canonical" />
	<link href="/favicon.ico" rel="icon" type="image/png" />
</svelte:head>
