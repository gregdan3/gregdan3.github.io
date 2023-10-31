// import { Config } from 'tailwindcss';
// @ts-check
import { join } from 'path';
const colors = require('tailwindcss/colors');

const config = {
	darkMode: ['class'],
	content: [
		'./src/**/*.{html,js,svelte,ts,md,mdx,svx}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			colors: {
				table: colors.gray[200], //bg of the entire site
				paper: colors.gray[50], // bg of the article
				ends: colors.gray[300], // bg of header/footer
				trim: colors.gray[400], // borders on header/footer
				major: colors.gray[900], // important text-colored asset
				accent: colors.gray[500], // unimportant text-colored asset
				'table-dark': colors.gray[900],
				'paper-dark': colors.gray[800],
				'ends-dark': colors.gray[950],
				'trim-dark': colors.gray[800],
				'major-dark': colors.gray[300],
				'accent-dark': colors.gray[500]
			},
			typography: {
				// default: { css: { 'code::before': { content: '' }, 'code::after': { content: '' } } }
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')]
};
export default config;
