<script lang="ts">
	import type { ProjectData } from '$lib/types';

	import { Tooltip } from 'flowbite-svelte';
	import Icon from '@iconify/svelte';
	import codeIcon from '@iconify/icons-mingcute/code-line';
	import linkIcon from '@iconify/icons-mingcute/external-link-line';
	import blogIcon from '@iconify/icons-mingcute/document-line';

	export let project: ProjectData;
</script>

<div
	class="not-prose relative h-60 bg-table dark:bg-table-dark rounded-lg shadow-md border border-accent dark:border-ctrim-dark"
>
	{#if project.banner}
		<img
			src={project.banner}
			alt="blog-banner"
			class="absolute top-0 left-0 w-full h-3/5 rounded-t-lg object-cover border-b border-accent dark:border-ctrim-dark"
		/>
	{:else}
		<div
			class="absolute top-0 left-0 w-full h-3/5 bg-gradient-to-br from-table to-accent dark:from-table-dark dark:to-trim-dark rounded-t-lg border-b border-accent dark:border-ctrim-dark"
		></div>
	{/if}

	{#if project.skills}
		<div class="absolute right-0 flex flex-wrap space-x-1.5 m-2">
			{#each project.skills as skill}
				<span class="text-2xl md:text-4xl">
					<Icon icon={skill.icon} />
					<Tooltip class="absolute font-bold">{skill.name}</Tooltip>
				</span>
			{/each}
		</div>
	{/if}

	<div class="absolute flex flex-col bottom-0 w-full p-2 h-2/5">
		<div class="relative flex flex-row">
			<div class="leading-5">
				<span class="font-semibold text-major dark:text-major-dark">{project.name}</span>
				<span class="text-base italic"> - {project.role}</span>
			</div>

			<div class="absolute text-2xl right-0 flex flex-row gap-3">
				{#if project.blog}
					<a
						href={project.blog}
						class="rounded-md hover:text-blue-500 hover:ring-2 hover:ring-blue-500"
					>
						<Icon icon={blogIcon} />
						<Tooltip class="absolute">Blog post</Tooltip>
					</a>
				{/if}

				{#if project.repo}
					<a
						href={project.repo}
						class="rounded-md hover:text-blue-500 hover:ring-2 hover:ring-blue-500"
					>
						<Icon icon={codeIcon} />
						<Tooltip class="absolute">Code</Tooltip>
					</a>
				{/if}

				{#if project.link}
					<a
						href={project.link}
						class="rounded-md hover:text-blue-500 hover:ring-2 hover:ring-blue-500"
					>
						<Icon icon={linkIcon} />
						<Tooltip class="absolute">{project.link}</Tooltip>
					</a>
				{/if}
			</div>
		</div>

		{#if project.description}
			<div class="pt-1 text-sm leading-4 text-accent dark:text-accent-dark overflow-hidden">
				{project.description}
			</div>
		{/if}
	</div>
</div>
