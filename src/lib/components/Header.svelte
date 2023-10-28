<script lang="ts">
	import { DarkMode, Navbar, NavBrand, NavUl, NavHamburger } from 'flowbite-svelte';
	import { Avatar } from '@skeletonlabs/skeleton';

	import type { Link } from '$lib/types';
	import NavButton from '$lib/components/NavButton.svelte';

	export let links: Link[];
</script>

<header class="sticky w-screen top-0 z-50 rounded-b-xl">
	<Navbar let:NavContainer>
		<NavContainer fluid>
			<!-- <NavUl class="absolute hidden lg:visible"> -->
			<!-- 	<NavBrand href="/" src="/avatar.jpg" alt="gregdan3" name="gregdan3"> -->
			<!-- 		<Avatar -->
			<!-- 			src="/avatar.jpg" -->
			<!-- 			alt="gregdan3" -->
			<!-- 			initials="g3" -->
			<!-- 			border="border-2 border-slate-600 dark:border-slate-500 hover:border-orange-500 hover:dark:border-orange-400" -->
			<!-- 		/> -->
			<!-- 		<span class="absolute text-xl font-lobster font-bold ml-20">gregdan3.dev</span> -->
			<!-- 	</NavBrand> -->
			<!-- </NavUl> -->

			<NavUl></NavUl>
			<NavUl>
				{#each links as link}
					<NavButton {...link} />
				{/each}
			</NavUl>
			<NavUl></NavUl>

			<NavHamburger />

			<DarkMode class="absolute right-0 m-4 p-4" />
		</NavContainer>
	</Navbar>
</header>
