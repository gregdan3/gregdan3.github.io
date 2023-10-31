<script lang="ts">
	export let slug: string;
	export let title: string;
	export let author: string;
	export let description: string;
	export let date: string;
	export let tags: string[] = ['bruh', 'moment', '64', '128', 'god']; // Add this line to support tags
</script>

<div class="relative p-0 my-2 border-l-4 bg-gray-100 dark:bg-gray-800">
	<span
		class="absolute top-0 left-0 mt-[-1.5] ml-4 px-2 py-1 text-xs text-gray-600 bg-bg-main-dark"
	>
		{date.split('T')[0]}
	</span>
	<a
		href="/blog/{slug}"
		class="block px-4 py-2 font-semibold hover:text-blue-600 dark:hover:text-blue-400"
	>
		{title}
	</a>
	<div class="flex flex-wrap px-4 mt-1">
		{#each tags as tag}
			<!-- https://flowbite.com/docs/components/badge/ -->
			<span
				class="px-2 py-1 mr-1 mb-1 text-xs text-gray-700 dark:text-gray-300 bg-gray-300 dark:bg-gray-600 rounded"
			>
				{tag}
			</span>
		{/each}
	</div>
	{#if description}
		<div class="m-6 p-2 px-4">{description}</div>
	{/if}
</div>
