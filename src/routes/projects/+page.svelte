<script lang="ts">
	import { links } from '$src/data/projects';
	import Meta from '$lib/components/Meta.svelte';

	const metadata = {
		title: 'Projects',
		description: 'My software projects.'
	};
</script>

<svelte:head>
	<Meta {metadata} />
</svelte:head>

{#each links as link}
	<div>{link.name}</div>
{/each}
