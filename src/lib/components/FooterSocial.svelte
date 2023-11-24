<script lang="ts">
	import { FooterIcon } from 'flowbite-svelte';
	import type { IconifyIcon } from '@iconify/svelte';
	import Icon from '@iconify/svelte';

	export let name: string;
	export let href: string;
	export let icon: IconifyIcon | undefined;
	export let bclass: string = 'hover:text-gray-900 dark:hover:text-white';

	bclass = 'text-xl text-accent dark:text-accent-dark' + ' ' + bclass;
</script>

{#if icon}
	<FooterIcon {href} aClass="m-auto">
		<Icon {icon} class={bclass} />
	</FooterIcon>
{/if}
