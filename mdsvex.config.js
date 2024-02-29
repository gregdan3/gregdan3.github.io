import remarkSectionize from 'remark-sectionize';
import remarkAbbr from 'remark-abbr';
import remarktoc from 'remark-toc';
import remarkSupersub from 'remark-supersub';
import remarkgfm from 'remark-gfm';
import remarkReadingTime from 'mdsvex-reading-time';

import rehypeSlug from 'rehype-slug';

import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.svelte.md', '.md'],
	smartypants: false,
	// NOTE: these are NESTED IN src/routes/+layout.svelte
	// so i only use them to edit the `svelte:head`
	layout: {
		now: './src/lib/layouts/+layout.svelte',
		blog: './src/lib/layouts/+layout.svelte',
		projects: './src/lib/layouts/+layout.svelte',
		_: './src/lib/layouts/+layout.svelte'
	},
	remarkPlugins: [
		remarkAbbr,
		remarkSupersub,
		remarkgfm,
		remarkReadingTime,
		// remarkSectionize,
		[
			remarktoc,
			{
				heading: '^(Contents|TOC|Table of Contents|ijo|ijo lipu|Now)$',
				ordered: false,
				tight: true,
				maxDepth: 4
			}
		]
	],
	rehypePlugins: [rehypeSlug],
	highlight: {}
	// frontmatter: {
	// 	parse: (frontmatter, messages) => {
	// 		try {
	// 			let content = yaml.load(frontmatter);
	// 			return { frontmatter: content, ...content };
	// 		} catch (e) {
	// 			messages.push(e.message);
	// 		}
	// 	}
	// }
});

export default config;
