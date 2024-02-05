<script lang="ts">
	import { formatBlogPostDate } from '$lib/utils';
	import { Tooltip } from 'flowbite-svelte';

	import type { PageData } from './$types';
	import type { SvelteComponentTyped } from 'svelte/internal';

	export let data: PageData;

	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as C;
</script>

<div>
	<!-- <div class="flex justify-center mt-4">{data.metadata.author}</div> -->
	<h1 class="flex justify-center text-3xl md:text-5xl">{data.metadata.title}</h1>
</div>

<div class="flex pl-2 my-0">
	{#if data.metadata.description}
		<blockquote class="mt-0 pr-4 w-full text-sm md:pr-8 md:text-lg">
			{data.metadata.description}
		</blockquote>
	{:else}
		<div class="w-full"></div>
	{/if}

	<div class="p-0.5 justify-end text-end whitespace-nowrap">
		{#if data.metadata.updated}
			<div class="text-xs">
				*{formatBlogPostDate(data.metadata.date)}
			</div>
			<Tooltip type="auto" placement="bottom" class="absolute z-50">
				Post updated {formatBlogPostDate(data.metadata.updated)}
			</Tooltip>
		{:else}
			<div class="text-xs">{formatBlogPostDate(data.metadata.date)}</div>
		{/if}

		{#if data.metadata.readingTime}
			<div class="text-xs">{data.metadata.readingTime.text}</div>
		{/if}
	</div>
</div>
<!-- <hr class="my-8" /> -->

<svelte:component this={component} />
