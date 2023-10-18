import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGithub from 'remark-github';
import remarkAbbr from 'remark-abbr';
import rehypeSlug from 'rehype-slug';
import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx', '.mdx', '.mdsvex'],

	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [
		[remarkGithub, { repository: 'https://github.com/gregdan3/gregdan3.github.io' }],
		remarkAbbr
	],
	rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]]
});

export default config;
