<script lang="ts">
	import '../app.postcss';

	import Meta from '$lib/components/Meta.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { headerlinks, footerlinks, socials } from '../data/links';

	export let title = 'Title Missing';
	// export let frontmatter = {};
</script>

<svelte:head>
	<Meta {title} />
</svelte:head>

<div class="flex flex-col min-h-screen bg-table dark:bg-table-dark">
	<Header links={headerlinks} />

	<article>
		<slot />
	</article>

	<Footer {footerlinks} {socials} />
</div>
