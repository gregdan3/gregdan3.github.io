<script lang="ts">
	import type { DiscordShield } from '$lib/types';

	export let server: DiscordShield;
</script>

<a href={server.invite_link}>
	<img
		alt={server.label}
		src={`https://img.shields.io/discord/${server.server_id}?style=${server.style}&logo=${server.logo}&logoColor=${server.logoColor}&labelColor=${server.labelColor}&color=${server.color}&label=${server.label}`}
		class="p-0.5"
	/>
</a>
