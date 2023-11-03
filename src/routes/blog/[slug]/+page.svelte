<script lang="ts">
	import type { PageData } from './$types';
	import type { SvelteComponentTyped } from 'svelte/internal';
	import { formatBlogPostDate } from '$lib/utils';
	export let data: PageData;
	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as unknown as C;
</script>

<div class="">
	<!-- <div class="flex justify-center mt-4">{data.frontmatter.author}</div> -->
	<!-- <div></div> -->
	<h1 class="flex justify-center mb-6 text-5xl">{data.frontmatter.title}</h1>
	<!-- <div class="flex justify-center mt-4"> -->
	<!-- 	{formatBlogPostDate(data.frontmatter.date)} -->
	<!-- </div> -->
</div>
{#if data.frontmatter.description}
	<blockquote class="my-2 ml-16">{data.frontmatter.description}</blockquote>
{/if}

<!-- TODO: reading time indicator? -->

<!-- <hr class="my-8" /> -->

<svelte:component this={component} />
