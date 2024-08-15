<script>
	import SideBar from '$lib/components/ui/themed/SideBar.svelte';
	import { fade } from 'svelte/transition';
	import '../app.css';
</script>

<div class="flex h-screen w-screen flex-row gap-2">
	<SideBar></SideBar>
	<div transition:fade>
		<slot></slot>
	</div>
</div>
