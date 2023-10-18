<script lang="ts">
	import type { NavLinks } from '../data/navlinks';
	import NavButton from './NavButton.svelte';
	export let links: NavLinks[];
</script>

<nav
	class="flex justify-evenly items-center mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md"
>
	{#each links as link}
		<NavButton {...link} />
	{/each}
</nav>

<style>
</style>
