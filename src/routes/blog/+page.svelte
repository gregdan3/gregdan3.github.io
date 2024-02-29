<script lang="ts">
	import type { PageData } from './$types';
	import { fetchSlugFromPath } from '$lib/utils';
	import { goto } from '$app/navigation';
	import BlogEntry from '$lib/components/BlogEntry.svelte';
	import { Pagination } from 'flowbite-svelte';
	import { page } from '$app/stores';
	import { ChevronLeftOutline, ChevronRightOutline } from 'flowbite-svelte-icons';
	import { buildBlogPageLinks } from '$lib/utils';
	import Meta from '$lib/components/Meta.svelte';

	const metadata = {
		title: 'Blog',
		description: 'Every dev needs an abandoned blog.'
	};

	const modules = import.meta.glob(`/src/data/posts/*.{md,svelte.md}`);
	const POSTS_PER_PAGE = 6;
	$: totalPages = 1;
	$: pages = buildBlogPageLinks(totalPages);
	$: currentPage = Number($page.url.searchParams.get('page')) || 1;
	// TODO: if user goes directly to a page that doesn't exist, they get an empty page
	// TODO: clicking a page link from that page refreshes the page, but should not

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

	export const transformPosts = async () => {
		const postPromises = Object.entries(modules).map(([path, resolver]) =>
			resolver().then(
				(post) =>
					({
						slug: fetchSlugFromPath(path),
						...(post as App.MdsvexFile).metadata
					}) as App.BlogPost
			)
		);

		let posts = await Promise.all(postPromises);
		posts = posts.filter((post) => post.published);
		posts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

		// we have to fetch only published posts, but can't know which are published until now
		totalPages = Math.ceil(Object.keys(posts).length / POSTS_PER_PAGE);

		const firstPostIndex = (currentPage - 1) * POSTS_PER_PAGE;
		const lastPostIndex = firstPostIndex + POSTS_PER_PAGE;
		const pagePosts = posts.slice(firstPostIndex, lastPostIndex);
		return pagePosts;
	};

	$: posts = transformPosts();

	const updateCurrentPage = (page: number) => {
		currentPage = Math.min(Math.max(page, 1), totalPages); // force bounds
		goto(`/blog?page=${currentPage}`);
	};

	const previous = () => {
		let oldCurrent = currentPage;
		updateCurrentPage(currentPage - 1);
		if (currentPage == oldCurrent) {
			return;
		}

		posts = transformPosts();
	};
	const next = () => {
		let oldCurrent = currentPage;
		updateCurrentPage(currentPage + 1);
		if (currentPage == oldCurrent) {
			return;
		}

		posts = transformPosts();
	};

	const refreshPosts = () => {
		posts = transformPosts();
	};
</script>

<svelte:head>
	<Meta {metadata} />
</svelte:head>

<div class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 pb-16">
	<!-- NOTE: pb is to make space for Pagination -->
	{#await posts}
		<div></div>
		<!-- TODO: loading standin -->
	{:then resolvedPosts}
		{#each resolvedPosts as post}
			<BlogEntry {post} />
		{/each}
	{/await}
</div>

<div class="not-prose absolute bottom-12 left-1/2 right-1/2">
	<!-- NOTE: bottom-12 is emulating pb-12 -->
	<Pagination
		{pages}
		on:previous={previous}
		on:next={next}
		on:click={refreshPosts}
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
