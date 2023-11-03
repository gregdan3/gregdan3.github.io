import type { LinkType } from 'flowbite-svelte';

export const fetchSlugFromPath = (path: string) =>
	path.match(/([\w-]+)\.(svelte\.md|md|mdx|svx)/i)?.[1] ?? null;

export const buildBlogPageLinks = (totalPages: number): LinkType[] => {
	const allPageIndices = Array.from({ length: totalPages }, (_, k) => k + 1);
	const pages = allPageIndices.map((x) => ({
		name: x.toString(),
		href: `/blog?page=${x}`,
		active: false
	}));
	return pages;
};

export const formatBlogPostDate = (blogPostDate: string): string => {
	const date = new Date(Date.parse(blogPostDate));
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	const day = date.getDate();
	const monthIndex = date.getMonth();
	const year = date.getFullYear();

	return `${monthNames[monthIndex]} ${day}, ${year}`;
};
