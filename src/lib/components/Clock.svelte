<script>
	import { onMount } from 'svelte';

	export let time = '';
	export let tz = 'UTC';

	onMount(() => {
		const interval = setInterval(() => {
			let date = new Date();
			// We only need to increment the current time by one second
			date.setSeconds(date.getSeconds() + 1);
			time = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(
				2,
				'0'
			)}:${String(date.getSeconds()).padStart(2, '0')}`;
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<span>Current time in {tz}: {time}</span>
