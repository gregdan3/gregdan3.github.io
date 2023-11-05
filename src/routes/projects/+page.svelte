<script lang="ts">
	import { links } from '$src/data/projects';
</script>

{#each links as link}
	<div>{link.name}</div>
{/each}
