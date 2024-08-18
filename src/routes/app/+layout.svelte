<script>
	import SideBar from '$lib/components/ui/themed/SideBar.svelte';
	import { fade } from 'svelte/transition';
	import { browser } from '$app/environment';
	import BottomNav from '$lib/components/ui/themed/BottomNav.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	let size = 0;
	$: if (browser) size = window.innerWidth;
</script>

<div class="flex h-screen w-screen flex-row gap-2">
	{#if size > 768}
		<SideBar></SideBar>
	{:else}
		<BottomNav></BottomNav>
	{/if}
	<div class="h-screen w-screen" transition:fade>
		<slot></slot>
	</div>
</div>
