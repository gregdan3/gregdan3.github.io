<script lang="ts">
	import '../app.postcss';

	import Meta from '$lib/components/Meta.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { headerlinks, footerlinks } from '../data/links';

	export let title = 'Title Missing';
</script>

<svelte:head>
	<Meta {title} />
</svelte:head>

<Header {title} links={headerlinks} />

<article>
	<slot />
</article>

<Footer links={footerlinks} />

<style>
</style>
