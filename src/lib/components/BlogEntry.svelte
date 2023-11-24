<script lang="ts">
	import type { BlogPost } from '$lib/types';
	import { formatBlogPostDate } from '$lib/utils';

	import { Card } from 'flowbite-svelte';
	import BlogTag from '$lib/components/BlogTag.svelte';

	export let post: BlogPost;
</script>

<!-- <Card img={post.image} href={post.slug} padding="none" class="not-prose"> -->
<!-- 	{#if post.tags} -->
<!-- 		<div class="absolute flex flex-wrap space-x-0.5 m-2"> -->
<!-- 			{#each post.tags as tag} -->
<!-- 				<span -->
<!-- 					class="text-xs bg-ends border border-trim dark:bg-ends-dark dark:border-trim-dark m-0.5 p-0.5 px-1 rounded opacity-80 dark:opacity-70" -->
<!-- 					>{tag}</span -->
<!-- 				> -->
<!-- 			{/each} -->
<!-- 		</div> -->
<!-- 	{/if} -->
<!---->
<!-- 	{#if post.image} -->
<!-- 		<div></div> -->
<!-- 	{:else} -->
<!-- 		<div -->
<!-- 			class="h-3/4 bg-gradient-to-br from-table to-accent dark:from-table-dark dark:to-trim-dark rounded-t-lg border-b border-accent dark:border-ctrim-dark" -->
<!-- 		></div> -->
<!-- 	{/if} -->
<!---->
<!-- 	<div class="p-3"> -->
<!-- 		<div class="font-semibold leading-5 text-major dark:text-major-dark pb-2"> -->
<!-- 			{post.title} -->
<!-- 		</div> -->
<!-- 		<div class="flex justify-between items-center"> -->
<!-- 			<div -->
<!-- 				class="text-xs italic line-clamp-2 leading-3 border-l-2 border-accent dark:border-accent-dark rounded-sm text-accent dark:text-accent-dark pl-1" -->
<!-- 			> -->
<!-- 				{#if post.description} -->
<!-- 					{post.description} -->
<!-- 				{/if} -->
<!-- 			</div> -->
<!-- 			<div class="text-xs text-accent justify-end dark:text-accent-dark ml-2 flex-none"> -->
<!-- 				{#if post.date} -->
<!-- 					{formatBlogPostDate(post.date)} -->
<!-- 				{/if} -->
<!-- 			</div> -->
<!-- 		</div> -->
<!-- 	</div> -->
<!-- </Card> -->
<!---->
<!-- class="bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700 shadow-md flex max-w-sm flex-col hover:bg-gray-100 dark:hover:bg-gray-700 p-0 not-prose" -->

<a
	href={`/blog/${post.slug}`}
	class="not-prose relative h-60 bg-table dark:bg-table-dark hover:bg-ends hover:dark:bg-ends-dark rounded-lg shadow-md border border-accent dark:border-ctrim-dark"
>
	{#if post.image}
		<img
			src={post.image}
			alt="blog-banner"
			class="absolute top-0 left-0 w-full h-3/5 rounded-t-lg object-cover border-b border-accent dark:border-ctrim-dark"
		/>
	{:else}
		<div
			class="absolute top-0 left-0 w-full h-3/5 bg-gradient-to-br from-table to-accent dark:from-table-dark dark:to-trim-dark rounded-t-lg border-b border-accent dark:border-ctrim-dark"
		></div>
	{/if}

	{#if post.tags}
		<div class="absolute flex flex-wrap space-x-0.5 m-2">
			{#each post.tags as tag}
				<span
					class="text-xs bg-ends border border-trim dark:bg-ends-dark dark:border-trim-dark m-0.5 p-0.5 px-1 rounded opacity-80 dark:opacity-70"
					>{tag}</span
				>
			{/each}
		</div>
	{/if}

	<div class="absolute flex flex-col bottom-0 left-0 w-full p-2 h-2/5">
		<div class="font-semibold leading-5 text-major dark:text-major-dark">
			{post.title}
		</div>

		<div class="flex justify-between items-end p-1 h-full">
			<div
				class="text-xs italic line-clamp-4 leading-3 pl-1 mb-auto border-l-2 border-accent dark:border-accent-dark rounded-sm text-accent dark:text-accent-dark"
			>
				{#if post.description}
					{post.description}
				{/if}
			</div>
			<div class="flex-none text-xs text-accent dark:text-accent-dark">
				{#if post.date}
					{formatBlogPostDate(post.date)}
				{/if}
			</div>
		</div>
	</div>
</a>
