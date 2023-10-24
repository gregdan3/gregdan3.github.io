import remarkSectionize from 'remark-sectionize';
import remarkAbbr from 'remark-abbr';
import remarktoc from 'remark-toc';
import remarkSupersub from 'remark-supersub';
import remarkgfm from 'remark-gfm';

import rehypeSlug from 'rehype-slug';

import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx', '.mdx'],
	smartypants: false,
	// smartypants: { dashes: 'oldschool' },
	remarkPlugins: [
		remarkAbbr,
		remarkSupersub,
		remarkgfm,
		// remarkSectionize,
		[
			remarktoc,
			{
				heading: '^(Contents|TOC|Table of Contents|ijo|ijo lipu)$',
				ordered: false,
				tight: true,
				maxDepth: 4
			}
		]
	],
	rehypePlugins: [rehypeSlug]
	// TODO: this causes double loads?
	// layout: {
	// 	project: './src/routes/+layout.svelte',
	// 	// blog: './src/routes/+layout.svelte',
	// 	_: './src/routes/+layout.svelte'
	// }
});

export default config;
