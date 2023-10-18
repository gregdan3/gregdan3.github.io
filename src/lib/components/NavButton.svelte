<script lang="ts">
	export let name: string;
	export let url: string;
</script>

<a
	href={url}
	class="transition duration-300 ease-in-out p-2 lg:p-4 rounded-lg font-semibold no-underline bg-gray-200 text-gray-700 border border-gray-300 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
>
	{name}
</a>

<style>
</style>
