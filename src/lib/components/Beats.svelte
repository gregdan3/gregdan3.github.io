<script>
	import { onMount } from 'svelte';

	export let beattime = '';

	function getBeats() {
		var d = new Date();
		var h = d.getHours();
		var m = d.getMinutes();
		var s = d.getSeconds();
		var tzoff = 60 + d.getTimezoneOffset();
		var time = ('000' + (Math.floor((h * 3600 + (m + tzoff) * 60 + s) / 86.4) % 1000)).slice(-3);
		return time;
	}

	onMount(() => {
		const interval = setInterval(() => {
			let date = new Date();
			date.setSeconds(date.getSeconds() + 1);
			beattime = getBeats();
		});

		return () => {
			clearInterval(interval);
		};
	});
</script>

<span>@{beattime}</span>
