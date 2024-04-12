import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-auto';
// import adapter from "@sveltejs/adapter-cloudflare";
// import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [vitePreprocess(), preprocess({ postcss: true }), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter({
			strict: true,
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: true
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	}
};

export default config;
