import type { PageServerLoad } from './$types';
import { fetchSlugFromPath } from '$lib/utils';

const POSTS_PER_PAGE = 6;

export const load: PageServerLoad = async ({ url }) => {
	const modules = import.meta.glob(`/src/content/posts/*.{md,mdx,svx,svelte.md}`);
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
	const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

	posts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

	let serverCurrentPage = Number(url.searchParams.get('page') || '1');
	if (serverCurrentPage < 1) {
		serverCurrentPage = 1;
	}
	if (serverCurrentPage > totalPages) {
		serverCurrentPage = totalPages;
	}

	const firstPostIndex = (serverCurrentPage - 1) * POSTS_PER_PAGE;
	const lastPostIndex = firstPostIndex + POSTS_PER_PAGE;

	const pagePosts = posts.slice(firstPostIndex, lastPostIndex);

	return { posts: pagePosts, totalPages };
};
