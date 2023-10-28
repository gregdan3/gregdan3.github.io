<script lang="ts">
	import {
		Footer,
		FooterBrand,
		FooterIcon,
		FooterLinkGroup,
		FooterLink,
		FooterCopyright
	} from 'flowbite-svelte';

	import type { Link } from '$lib/types';
	import FooterSocial from '$lib/components/FooterSocial.svelte';

	import Icon from '@iconify/svelte';
	import chevronUpIcon from '@iconify/icons-mdi/chevron-up';

	export let footerlinks: Link[];
	export let socials: Link[];
</script>

<Footer class="relative w-screen bottom-0" footerType="socialmedia">
	<!-- TODO: what I want is for it to stick to the bottom of the document, or if the screen is lower than that, to the bottom of the screen  -->

	<div class="flex items-center justify-between">
		<FooterBrand href="/" src="/avatar.jpg" alt="gregdan3.dev" name="gregdan3.dev" />

		<FooterLinkGroup class="ml-14">
			<FooterIcon href="#top">
				<Icon
					icon={chevronUpIcon}
					class="w-8 h-8 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
				/>
			</FooterIcon>
		</FooterLinkGroup>

		<FooterLinkGroup class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
			{#each footerlinks as link}
				<FooterSocial {...link} />
			{/each}

			<div class="h-6 w-0.5" />

			{#each socials as social}
				<FooterSocial {...social} />
			{/each}
		</FooterLinkGroup>
	</div>
</Footer>
