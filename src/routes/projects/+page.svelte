<script lang="ts">
	import { projects } from '$src/data/projects';
	import Meta from '$lib/components/Meta.svelte';
	import Project from '$lib/components/Project.svelte';

	const metadata = {
		title: 'Projects',
		description: 'My software projects.'
	};
</script>

<svelte:head>
	<Meta {metadata} />
</svelte:head>

<div class="grid grid-cols-1 space-y-6">
	{#each projects as project}
		<Project {project}></Project>
	{/each}
</div>
