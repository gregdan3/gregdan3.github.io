import type { LinkType } from 'flowbite-svelte';

const centralTimeOffsetms = 6 * 60 * 60 * 1000;

export const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

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
	const date = new Date(Date.parse(blogPostDate) + centralTimeOffsetms);
	// the blog dates are based on my timezone, but are read in UTC.
	// the offset corrects for this, lazily, by always using

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
