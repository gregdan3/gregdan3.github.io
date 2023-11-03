<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import BlogEntry from '$lib/components/BlogEntry.svelte';
	import { Pagination } from 'flowbite-svelte';
	import { page } from '$app/stores';
	import { ChevronLeftOutline, ChevronRightOutline } from 'flowbite-svelte-icons';
	import { buildBlogPageLinks } from '$lib/utils';

	export let data: PageData;

	$: currentPage = Number($page.url.searchParams.get('page'));
	let pages = buildBlogPageLinks(data.totalPages);

	$: {
		pages.forEach((page) => {
			let splitUrl = page.href.split('?');
			let queryString = splitUrl.slice(1).join('?');
			const hrefParams = new URLSearchParams(queryString);
			let hrefValue = Number(hrefParams.get('page'));
			if (hrefValue === currentPage) {
				page.active = true;
			} else {
				page.active = false;
			}
		});
		pages = pages;
	}

	const previous = () => {
		currentPage -= 1;
		if (1 > currentPage || currentPage > data.totalPages) currentPage = 1;
		goto(`/blog?page=${currentPage}`);
	};
	const next = () => {
		currentPage += 1;
		if (1 > currentPage || currentPage > data.totalPages) currentPage = data.totalPages;
		goto(`/blog?page=${currentPage}`);
	};
</script>

<div class="grid grid-cols-2 gap-4">
	{#each data.posts as post}
		<BlogEntry {...post} />
	{/each}
</div>

<div class="not-prose flex flex-col h-full pt-8">
	<Pagination
		{pages}
		on:previous={previous}
		on:next={next}
		large
		icon
		ariaLabel="Blog Navigation"
		class="flex justify-center"
	>
		<svelte:fragment slot="prev">
			<span class="sr-only">Previous</span>
			<ChevronLeftOutline class="w-3 h-3" />
		</svelte:fragment>
		<svelte:fragment slot="next">
			<span class="sr-only">Next</span>
			<ChevronRightOutline class="w-3 h-3" />
		</svelte:fragment>
	</Pagination>
</div>
