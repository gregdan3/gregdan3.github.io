<script lang="ts">
	import { DarkMode, Navbar, NavBrand, NavUl, NavHamburger } from 'flowbite-svelte';

	import type { Link } from '$lib/types';
	import NavButton from '$lib/components/NavButton.svelte';

	export let links: Link[];
</script>

<header class="sticky top-0 z-50">
	<Navbar class="md:p-0 bg-ends dark:bg-ends-dark border-b-2 border-trim dark:border-trim-dark">
		<NavHamburger />

		<NavUl class="absolute left-0 m-4 hidden sm:visible">
			<!-- <NavBrand href="/" src="/avatar.png" alt="gregdan3" name="gregdan3"> -->
			<!-- 	<span -->
			<!-- 		class="self-center whitespace-nowrap text-xl font-semibold dark:text-white invisible lg:visible" -->
			<!-- 		>gregdan3.dev</span -->
			<!-- 	> -->
			<!-- </NavBrand> -->
		</NavUl>

		<!-- the divs here allow the buttons to center -->
		<div></div>
		<NavUl class="justify-center">
			{#each links as link}
				<NavButton {...link} />
			{/each}
		</NavUl>
		<div></div>
		<DarkMode class="absolute top-3 right-4 text-accent dark:text-accent-dark" />
		<!-- this is a silly way to do this but the hamburger was eating the darkmode button -->
	</Navbar>
</header>
