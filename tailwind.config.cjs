// import { Config } from 'tailwindcss';
// @ts-check
import { join } from 'path';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

const config = {
	darkMode: ['class'],
	content: [
		'./src/**/*.{html,js,svelte,ts,md,mdx,svx}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		// extend: {
		// 	typography: {
		// 		default: { css: { 'code::before': { content: '' }, 'code::after': { content: '' } } }
		// 	}
		// }
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('flowbite/plugin'),
		skeleton({ themes: { preset: ['skeleton'] } })
		// Change skeleton theme here
	]
};
export default config;
