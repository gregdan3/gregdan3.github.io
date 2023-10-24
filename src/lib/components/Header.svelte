<script lang="ts">
	import {
		Avatar,
		Dropdown,
		DropdownHeader,
		DropdownItem,
		DropdownDivider,
		Tooltip
	} from 'flowbite-svelte';
	import Nav from '$lib/components/Nav.svelte';
	import type { Link } from '$lib/types';

	export let title: string;
	export let links: Link[];
</script>

<header class="sticky w-screen top-0 z-50">
	<!-- <h2 class="hidden lg:block pl-2 text-gray-800 dark:text-gray-200 font-semibold"> -->
	<!-- 	<a href="/" class="font-lobster">gregdan3</a> -->
	<!-- </h2> -->
	<!-- <h3 class="m-auto p-0 text-center text-gray-800 dark:text-gray-200">{title}</h3> -->
	<Nav {links}></Nav>
</header>
