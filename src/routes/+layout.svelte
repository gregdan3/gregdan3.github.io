<script lang="ts">
	import '../app.postcss';

	import Meta from '$lib/components/Meta.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';

	import { links } from '../data/navlinks';

	export let title = 'Title Missing';
</script>

<article class="">
	<Meta {title} />
	<Header {title} />
	<Nav {links} />
	<!-- TODO: why prosen't?  -->
	<slot />

	<Footer />
</article>

<style>
</style>
