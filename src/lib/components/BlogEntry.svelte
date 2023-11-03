<script lang="ts">
	import { formatBlogPostDate } from '$lib/utils';
	import { onMount } from 'svelte';

	import BlogTag from '$lib/components/BlogTag.svelte';

	export let slug: string;
	export let title: string;
	export let author: string;
	export let description: string;
	export let date: string;
	export let published: boolean;
	export let banner: string = '';
	export let updated: string | undefined;
	export let tags: string[] = [];

	let tagsContainer: HTMLElement;
</script>

<a
	href={`/blog/${slug}`}
	class="relative h-56 bg-table dark:bg-table-dark hover:bg-ends hover:dark:bg-ends-dark transition-all ease-in-out duration-300 rounded-lg shadow-md border border-accent dark:border-trim-dark"
>
	>
	{#if banner}
		<img
			src={banner}
			alt="blog-banner"
			class="absolute top-0 left-0 w-full h-2/3 rounded-t-lg object-cover"
		/>
	{:else}
		<div
			class="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-br from-table to-accent dark:from-table-dark dark:to-trim-dark rounded-t-lg"
		></div>
	{/if}

	<div class="absolute top-4 left-4 overflow-hidden h-10">
		{#if tags}
			<div class="flex space-x-1">
				{#each tags as tag}
					<span
						class="text-xs bg-ends border border-trim dark:bg-ends-dark dark:border-trim-dark p-1 px-2 rounded"
						>{tag}</span
					>
				{/each}
			</div>
		{/if}
	</div>
	<div class="absolute bottom-0 left-0 w-full p-4">
		<div class="text-xl font-bold mb-0 text-major dark:text-major-dark pb-2">
			{title}
		</div>
		<div class="flex justify-between items-center">
			<div
				class="text-xs italic max-w-xs truncate border-l-2 border-accent rounded-sm text-accent dark:text-accent-dark pl-1"
			>
				{#if description}
					{description}
				{/if}
			</div>
			<div class="text-xs text-accent justify-end dark:text-accent-dark ml-2 flex-none">
				{formatBlogPostDate(date)}
			</div>
		</div>
	</div>
</a>
