import type { PageLoad } from './$types';
import { fetchSlugFromPath } from '$lib/utils';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const modules = import.meta.glob(`/src/data/posts/*.{md,svelte.md}`);

	let match: { path?: string; resolver?: App.MdsvexResolver } = {};
	for (const [path, resolver] of Object.entries(modules)) {
		if (fetchSlugFromPath(path) === params.slug) {
			match = { path, resolver: resolver as unknown as App.MdsvexResolver };
			break;
		}
	}

	const post = await match?.resolver?.();

	if (!post || !post.metadata.published) {
		error(404); // Couldn't resolve the post
	}

	return {
		component: post.default,
		metadata: post.metadata
	};
};
