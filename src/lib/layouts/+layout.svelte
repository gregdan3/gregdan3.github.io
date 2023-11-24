<script lang="ts">
	export let title;
	export let author;
	export let date;
	export let updated;
	export let image;
	export let published;

	import Meta from '$lib/components/Meta.svelte';

	let metadata = { title, author, date, updated, image, published };
</script>

<svelte:head>
	<Meta {metadata} />
</svelte:head>

<slot />
