<script lang="ts">
	import type { ProjectData } from '$lib/types';
	import Icon from '@iconify/svelte';
	import codeIcon from '@iconify/icons-mingcute/code-line';
	import linkIcon from '@iconify/icons-mingcute/external-link-line';
	import blogIcon from '@iconify/icons-mingcute/paper-line';

	export let project: ProjectData;
</script>

<div class="border m-2">
	<div>
		<span>{project.name}</span>
		-
		<span class="text-sm text-ends">{project.role}</span>
	</div>

	{#if project.banner}
		<div>
			<img src={project.banner} />
		</div>
	{/if}

	<div class="flex flex-row gap-2">
		{#if project.link}
			<a href={project.link}>
				<Icon icon={linkIcon} />
			</a>
		{/if}

		{#if project.blog}
			<div></div>
		{/if}

		{#if project.blog}
			<a href={project.blog}>
				<Icon icon={blogIcon} />
			</a>
		{/if}

		<a href={project.repo}>
			<Icon icon={codeIcon} />
		</a>
	</div>

	{#if project.skills}
		<div class="flex flex-col">
			{#each project.skills as skill}
				<div>{skill.name}</div>
			{/each}
		</div>
	{/if}

	<div>{project.description}</div>
</div>
