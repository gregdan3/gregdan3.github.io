<script lang="ts">
	import type { Link } from '$lib/types';

	import NavButton from './NavButton.svelte';
	import { DarkMode } from 'flowbite-svelte';
  import { Avatar, Dropdown, DropdownHeader, DropdownItem, DropdownDivider, Tooltip } from 'flowbite-svelte';
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
  import { Navbar, NavBrand, NavUl, NavHamburger } from 'flowbite-svelte';

	export let links: Link[];
</script>

<!--   <Breadcrumb> -->
<!--   <BreadcrumbItem href="/" home>Home</BreadcrumbItem> -->
<!-- </Breadcrumb> -->


<!-- <nav -->
<!-- 	class="flex justify-evenly items-center mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md" -->
<!-- > -->

<!-- <Navbar> -->
<Navbar let:NavContainer>
  <NavContainer>
  <NavBrand href="/"> 
    <!-- <a href="/" class="pl-8"> -->
      <Avatar
        src="/avatar.jpg"
        alt="gregdan3"
        initials="GD"
      ></Avatar>
    <!-- </a> -->
  </NavBrand>
  <NavHamburger />
  <NavUl>
    {#each links as link}
      <NavButton {...link} />
    {/each}
  </NavUl>
  <NavUl>
    <DarkMode />
  </NavUl>
  </NavContainer>
</Navbar>
<!-- </nav> -->
