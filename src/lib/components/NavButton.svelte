<script lang="ts">
	import { NavLi, Button, Tooltip } from 'flowbite-svelte';
	import type { IconifyIcon } from '@iconify/svelte';
	import Icon from '@iconify/svelte';

	export let name: string;
	export let href: string;
	export let icon: IconifyIcon | undefined;
	export let bclass: string = '';
	export let tooltip: string = '';

	bclass = 'transition ease-in-out font-bold' + ' ' + bclass;
</script>

<NavLi {href}>
	{#if tooltip}
		<Tooltip>{tooltip}</Tooltip>
	{/if}
	{#if icon}
		<Button outline shadow color="dark" class={bclass}>
			<Icon {icon} class="-ml-1 mr-2 h-6 w-6" />
			<div class="h-6"></div>
			{name}
		</Button>
	{:else}
		<Button outline shadow color="dark" class={bclass}>
			<div class="w-2.5 h-6"></div>
			{name}
			<div class="w-2.5 h-6"></div>
		</Button>
	{/if}
</NavLi>
