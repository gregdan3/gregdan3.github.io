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
	// NOTE: these load INSIDE of src/routes/+layout.svelte
	// this can only alter the in-article content, which is useless imo
	// layout: {
	// 	blog: './src/lib/layouts/+blog-layout.svelte',
	// 	project: './src/lib/layouts/+project-layout.svelte',
	// 	_: './src/lib/layouts/+layout.svelte'
	// }
	remarkPlugins: [
		remarkAbbr,
		remarkSupersub,
		remarkgfm,
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
