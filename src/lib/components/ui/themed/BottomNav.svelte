<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { navItems } from '$lib/components/ui/themed/navItems';
	import Icon from '@iconify/svelte';
	import { scale } from 'svelte/transition';

	let color = 'text-blue-600';
	let activeColor = 'text-blue-600';
	let activeRoute;
</script>

<div
	class="shadow-t-md fixed bottom-0 left-0 right-0 grid grid-cols-2 justify-around border-t border-none border-blue-600 bg-card"
>
	{#each navItems as item}
		<button on:click={() => goto(item.route)} class="flex flex-col items-center">
			{#if item.route === $page.url.pathname}
				<div class="my-auto flex w-16 flex-col items-center py-1">
					<div
						in:scale={{ start: 0.8 }}
						class="rounded-full bg-orange-500 bg-opacity-20 px-4 transition-all"
					>
						<Icon class="size-8 text-orange-500" icon={item.activeIcon} />
					</div>
					<span class="mt-1 text-xs text-orange-500">{item.name}</span>
				</div>
			{:else}
				<div class="flex w-16 flex-col items-center p-2 transition-all hover:bg-opacity-20">
					<Icon class="size-8 text-blue-600" icon={item.icon} />
					<span class="text-xs text-blue-600">{item.name}</span>
				</div>
			{/if}
		</button>
	{/each}
</div>
