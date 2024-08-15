<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { flyAndScale } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import { crossfade, fade, scale } from 'svelte/transition';

	type navItem = {
		name: string;
		route: string;
		icon: string;
		activeIcon: string;
	};
	const items: navItem[] = [
		{
			name: 'Home',
			route: '/',
			icon: 'mdi:home-variant-outline',
			activeIcon: 'mdi:home-variant'
		},
		{
			name: 'Settings',
			route: '/settings',
			icon: 'mdi:settings-outline',
			activeIcon: 'mdi:settings'
		}
	];
	const [send, recieve] = crossfade({});
	let color = 'text-blue-600';
	let activeColor = 'text-blue-600';
	let activeRoute;
</script>

<div class="mt-2 flex h-screen flex-col items-center gap-2 border-r border-blue-600 px-2 shadow-lg">
	{#each items as item}
		<button on:click={() => goto(item.route)}>
			{#if item.route === $page.url.pathname}
				<div
					in:scale={star}
					class="grid place-items-center rounded-sm bg-orange-500 bg-opacity-20 p-1 transition-all"
				>
					<Icon class="size-8 text-orange-500 " icon={item.activeIcon} />
				</div>
			{:else}
				<div
					class="grid place-items-center rounded-sm bg-blue-600 bg-opacity-0 p-1 transition-all hover:bg-opacity-20"
				>
					<Icon class="size-8 text-blue-600 " icon={item.icon} />
				</div>
			{/if}
		</button>
	{/each}
</div>
