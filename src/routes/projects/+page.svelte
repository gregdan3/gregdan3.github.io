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

This page is a work in progress!
<hr />

<div class="grid grid-cols:2 md:grid-cols-3">
	{#each projects as project}
		<Project {project}></Project>
	{/each}
</div>
