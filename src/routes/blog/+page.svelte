<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import BlogEntry from '$lib/components/BlogEntry.svelte';
	import { Pagination } from 'flowbite-svelte';
	import { page } from '$app/stores';
	import { ChevronLeftOutline, ChevronRightOutline } from 'flowbite-svelte-icons';
	import { buildBlogPageLinks } from '$lib/utils';
	import Meta from '$lib/components/Meta.svelte';

	export let data: PageData;

	const metadata = {
		title: 'Blog',
		description: 'Every dev needs an abandoned blog.'
	};

	$: currentPage = Number($page.url.searchParams.get('page')) || 1;
	let pages = buildBlogPageLinks(data.totalPages);

	$: {
		pages.forEach((page) => {
			if (Number(page.name) === currentPage) {
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

<svelte:head>
	<Meta {...metadata} />
</svelte:head>

<div class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 pb-24">
	<!-- NOTE: pb is to make space for Pagination -->
	{#each data.posts as post}
		<BlogEntry {...post} />
	{/each}
</div>

<div class="not-prose absolute bottom-12 left-1/2 right-1/2">
	<!-- NOTE: bottom-12 is emulating pb-12 -->
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
			<ChevronLeftOutline class="w-4 h-4" />
		</svelte:fragment>
		<svelte:fragment slot="next">
			<ChevronRightOutline class="w-4 h-4" />
		</svelte:fragment>
	</Pagination>
</div>
