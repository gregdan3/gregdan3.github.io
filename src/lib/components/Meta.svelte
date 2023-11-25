<script lang="ts">
	import type { MetaData } from '$lib/types';
	import avatar from '$lib/assets/avatar.png';
	import { page } from '$app/stores';

	const locale = 'en_US';
	const site_name = 'gregsite';
	const href = 'https://gregdan3.dev';
	let titleFull: string;

	export let metadata: MetaData = {};

	if (metadata.title) {
		titleFull = `${metadata.title} | ${site_name}`;
	} else {
		titleFull = `${site_name}`;
	}
	if (!metadata.description) {
		metadata.description = "read because it's free";
	}
	if (!metadata.image) {
		metadata.image = avatar;
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
	<meta property="og:url" content="{$page.url.origin}{$page.url.pathname}" />
	<meta property="og:image" content={metadata.image} />
	<meta property="og:locale" content={locale} />
	<meta property="og:site_name" content={site_name} />
	<meta property="og:description" content={metadata.description} />

	<title>{titleFull}</title>
	<link {href} rel="canonical" />
	<link href="/favicon.ico" rel="icon" type="image/png" />
</svelte:head>
