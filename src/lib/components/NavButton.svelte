<script lang="ts">
	import { page } from '$app/stores';

	import { NavLi, Button, Tooltip } from 'flowbite-svelte';
	import type { IconifyIcon } from '@iconify/svelte';
	import Icon from '@iconify/svelte';

	$: current = href == $page.url.pathname;

	export let name: string;
	export let href: string;
	export let icon: IconifyIcon | null;
	export let bclass: string = '';
	export let tooltip: string = '';
	bclass =
		'h-8 font-bold bg-paper dark:bg-paper-dark text-major dark:text-major-dark ring-1 ring-gray-400 dark:ring-gray-950' +
		' ' +
		bclass;
</script>

<NavLi>
	<Button {href} outline shadow color="dark" class={bclass}>
		{#if icon}
			<Icon {icon} class="-ml-0.5 mr-2 h-6 w-6" />
		{/if}
		<span class={current ? 'underline decoration-2' : ''}>{name}</span>
	</Button>
	{#if tooltip}
		<Tooltip arrow={false} type="auto" placement="bottom" class="absolute">{tooltip}</Tooltip>
		<!-- absolute prevents the tooltip from scrolling the page -->
	{/if}
</NavLi>
