<script lang="ts">
	import type { Link } from '$lib/types';

	import {
		Footer,
		FooterBrand,
		FooterCopyright,
		FooterIcon,
		FooterLink,
		FooterLinkGroup
	} from 'flowbite-svelte';

	export let links: Link[];
</script>

<Footer class="absolute w-screen bottom-0">
	<!-- <FooterCopyright href="/" by="Flowbite™" year={2022} /> -->
	<FooterBrand href="/" src="/avatar.jpg" alt="gregdan3" name="gregdan3" />
	<FooterLinkGroup
		ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
	>
		<FooterLink href="/">About</FooterLink>
		<FooterLink href="/">Privacy Policy</FooterLink>
		<FooterLink href="/">Licensing</FooterLink>
		<FooterLink href="/">Contact</FooterLink>
	</FooterLinkGroup>
</Footer>

<!-- <footer class="text-xs text-center pt-4"> -->
<!-- 	<div>Licensed under <a href="/LICENSE.txt">GPLv3</a>.</div> -->
<!-- 	<div> -->
<!-- 		Code on -->
<!-- 		<a href="https://github.com/gregdan3/gregdan3.github.io">my GitHub</a>. -->
<!-- 	</div> -->
<!-- 	<script -->
<!-- 		data-goatcounter="https://gregdan3.goatcounter.com/count" -->
<!-- 		async -->
<!-- 		src="//gc.zgo.at/count.js" -->
<!-- 	></script> -->
<!-- </footer> -->

<style>
</style>
