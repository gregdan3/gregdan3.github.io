<script lang="ts">
	import { page } from '$app/stores';

	import { Footer, FooterBrand, FooterIcon, FooterLinkGroup } from 'flowbite-svelte';

	import type { Link } from '$lib/types';
	import FooterSocial from '$lib/components/FooterSocial.svelte';

	import avatar from '$lib/assets/avatar.png';

	import Icon from '@iconify/svelte';
	import chevronUpIcon from '@iconify/icons-mingcute/arrows-up-line';

	export let footerlinks: Link[];
	export let socials: Link[];
</script>

<Footer
	footerType="socialmedia"
	class="px-4 py-2 grid grid-cols-3 border-t-2 bg-ends dark:bg-ends-dark border-trim dark:border-trim-dark"
>
	<FooterBrand
		href="/"
		src={avatar}
		alt={$page.url.hostname}
		name={$page.url.hostname}
		imgClass="h-12 w-12 rounded-2xl ring-2 bg-trim dark:bg-trim-dark ring-trim dark:ring-trim-dark mr-2"
		spanClass="whitespace-nowrap text-md md:text-xl font-semibold text-major dark:text-major-dark"
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
