import type { PageServerLoad } from './$types';
import { slugFromPath } from '$lib/slugFromPath';

const POSTS_PER_PAGE = 8;

export const load: PageServerLoad = async ({ url }) => {
	const modules = import.meta.glob(`/src/content/posts/*.{md,mdx,svx,svelte.md}`);
	const postPromises = Object.entries(modules).map(([path, resolver]) =>
		resolver().then(
			(post) =>
				({
					slug: slugFromPath(path),
					...(post as unknown as App.MdsvexFile).metadata
				}) as App.BlogPost
		)
	);

	const posts = await Promise.all(postPromises);
	const publishedPosts = posts.filter((post) => post.published);
	const totalPages = Math.ceil(publishedPosts.length / POSTS_PER_PAGE);

	publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

	const currentPage = Number(url.searchParams.get('page') || '1');
	const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
	const endIndex = startIndex + POSTS_PER_PAGE;

	const pagePosts = publishedPosts.slice(startIndex, endIndex);

	return { posts: pagePosts, currentPage, totalPages };
};
