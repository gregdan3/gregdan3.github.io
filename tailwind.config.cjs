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
			textShadow: {
				DEFAULT: '1px 1px 3px rgba(255, 255, 255, 0.3)',
				dark: '1px 1px 3px rgba(255, 255, 255, 0.3)'
			},
			colors: {
				table: colors.slate[200], // bg of the entire site
				paper: colors.slate[50], // bg of the article
				ends: colors.slate[300], // bg of header/footer
				trim: colors.slate[400], // borders on header/footer
				major: colors.slate[900], // important text-colored asset
				accent: colors.slate[500], // unimportant text-colored asset
				ctrim: colors.slate[300], // content trim like hr, blockquote
				'table-dark': colors.slate[900],
				'paper-dark': colors.slate[800],
				'ends-dark': colors.slate[950],
				'trim-dark': colors.slate[800],
				'major-dark': colors.slate[300],
				'accent-dark': colors.slate[500],
				'ctrim-dark': colors.slate[700]
			},
			typography: {
				// default: { css: { 'code::before': { content: '' }, 'code::after': { content: '' } } }
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')]
};
export default config;
