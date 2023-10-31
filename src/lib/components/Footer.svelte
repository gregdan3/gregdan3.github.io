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

<Footer
	footerType="socialmedia"
	class="grid grid-cols-3 border-t-2 bg-ends dark:bg-ends-dark border-trim dark:border-trim-dark"
>
	<FooterBrand
		href="/"
		src="/avatar.jpg"
		alt="gregdan3.dev"
		name="gregdan3.dev"
		imgClass="h-8 w-8 rounded-full border border-trim dark:border-trim-dark mr-2"
		spanClass="self-center whitespace-nowrap text-md md:text-xl font-semibold text-major dark:text-major-dark"
	/>
	<!-- visible lg:hidden -->

	<FooterLinkGroup class="flex justify-center">
		<FooterIcon href="#top">
			<Icon
				icon={chevronUpIcon}
				class="w-8 h-8 text-accent dark:text-accent-dark hover:text-black dark:hover:text-white"
			/>
		</FooterIcon>
	</FooterLinkGroup>

	<FooterLinkGroup class="flex justify-end">
		<div></div>
		<!-- the empty div consumes the left-most space of the ul -->

		<div class="invisible md:visible flex space-x-4">
			{#each footerlinks as link}
				<FooterSocial {...link} />
			{/each}
			<div class="w-4" />
		</div>

		<div class="flex space-x-4">
			{#each socials as social}
				<FooterSocial {...social} />
			{/each}
		</div>
	</FooterLinkGroup>
</Footer>
