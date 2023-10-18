<script lang="ts">
	export let title: string;
</script>

<header class="flex items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
	<a href="/" class="pl-8">
		<img
			class="border-4 rounded-full h-20 w-20 border-gray-700 dark:border-gray-200 transition-colors duration-300 ease-in-out hover:border-blue-500 dark:hover:border-blue-300"
			src="/avatar.jpg"
			alt="gregdan3"
		/>
	</a>
	<h2 class="hidden lg:block pl-2 text-gray-800 dark:text-gray-200 font-semibold">
		<a href="/" class="font-lobster">gregdan3</a>
	</h2>
	<h3 class="m-auto p-0 text-center text-gray-800 dark:text-gray-200">{title}</h3>
</header>
