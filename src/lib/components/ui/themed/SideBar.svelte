<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { flyAndScale } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import { crossfade, fade, scale } from 'svelte/transition';
	import { navItems, type NavItem } from '$lib/components/ui/themed/navItems';

	const [send, recieve] = crossfade({});
	let color = 'text-blue-600';
	let activeColor = 'text-blue-600';
	let activeRoute;
</script>

<div class=" shadow-r-md flex h-screen flex-col items-center gap-2 bg-card px-2 pt-2">
	{#each navItems as item}
		<button on:click={() => goto(item.route)}>
			{#if item.route === $page.url.pathname}
				<div
					in:scale={{ start: 0.8 }}
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
