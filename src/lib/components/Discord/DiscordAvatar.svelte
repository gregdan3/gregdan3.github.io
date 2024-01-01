<script lang="ts">
	import type { LanyardData } from '$lib/types';

	import Icon from '@iconify/svelte';
	import desktopIcon from '@iconify/icons-mingcute/computer-fill';
	import mobileIcon from '@iconify/icons-mingcute/cellphone-fill';
	import webIcon from '@iconify/icons-mingcute/bank-card-fill';
	import offlineIcon from '@iconify/icons-mingcute/copper-coin-fill';

	export let data: LanyardData;

	const makeAvatarURL = (user_id: number, avatar_id: string, size: number = 256): string => {
		return `https://cdn.discordapp.com/avatars/${user_id}/${avatar_id}?size=${size}`;
	};

	const statusColors: Record<string, string> = {
		online: 'text-emerald-500',
		idle: 'text-amber-500',
		dnd: 'text-rose-500',
		offline: 'text-gray-500'
	};
	const getStatusColor = (status: 'online' | 'idle' | 'dnd' | 'offline') => {
		const str = statusColors[status];
		if (!str) return 'text-black';
		return str;
	};

	let statusClasses =
		'absolute bottom-0 right-0 w-6 h-6 rounded-full bg-white dark:bg-[#313338] ring-2 ring-major dark:ring-0';

	let icon = offlineIcon;
	if (data.active_on_discord_web) {
		icon = webIcon;
	}
	if (data.active_on_discord_desktop) {
		icon = desktopIcon;
	}
	if (data.active_on_discord_mobile) {
		icon = mobileIcon;
	}
</script>

<div class="w-20 h-20 relative flex-shrink-0">
	<img
		src={makeAvatarURL(data.discord_user.id, data.discord_user.avatar)}
		alt={data.discord_user.username}
		class="rounded-full ring-2 ring-major dark:ring-0"
	/>
	<div class={statusClasses}>
		<!-- TODO: WHY is the `mt` so STUPID -->
		<Icon {icon} class={'mx-auto mt-1 md:mt-0.5 ' + getStatusColor(data.discord_status)} />
	</div>
	<!-- NOTE: flowbite-svelte avatar sucks -->
</div>
