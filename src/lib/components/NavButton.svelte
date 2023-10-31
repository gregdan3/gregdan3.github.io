<script lang="ts">
	import { NavLi, Button, Tooltip } from 'flowbite-svelte';
	import type { IconifyIcon } from '@iconify/svelte';
	import Icon from '@iconify/svelte';

	export let name: string;
	export let href: string;
	export let icon: IconifyIcon | undefined | null = null;
	export let bclass: string = '';
	export let tooltip: string = '';
	bclass =
		'transition ease-in-out h-8 font-bold bg-paper dark:bg-paper-dark text-major dark:text-major-dark ring-2 dark:ring-blue-950' +
		' ' +
		bclass;
</script>

<NavLi {href}>
	<Button outline shadow color="dark" class={bclass}>
		{#if icon}
			<Icon {icon} class="-ml-0.5 mr-2 h-6 w-6" />
		{/if}
		{name}
	</Button>
	{#if tooltip}
		<Tooltip arrow={false} type="auto" placement="bottom" class="absolute">{tooltip}</Tooltip>
		<!-- absolute prevents the tooltip from scrolling the page -->
	{/if}
</NavLi>
