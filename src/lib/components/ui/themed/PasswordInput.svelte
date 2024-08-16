<script lang="ts">
	import { Input } from '../input';
	import Icon from '@iconify/svelte';

	let className = '';
	export { className as class };
	export let placeholder: string = '';
	export let label: string | undefined = undefined;
	export let bg = 'bg-background';

	let iconColor = 'text-orange-500';
	let showPassword = false;

	function togglePassword() {
		showPassword = !showPassword;
	}
</script>

<div class="relative {className} inline-flex flex-col">
	<div class="relative inline-flex items-center">
		{#if label}
			<label
				for={label}
				class="absolute -top-2 left-2 z-10 {bg} px-1 text-sm font-semibold text-foreground"
				>{label}</label
			>
		{/if}
		<button type="button" on:click={togglePassword} class="absolute left-2 focus:outline-none">
			<Icon
				icon={showPassword ? 'mdi:eye-off' : 'mdi:eye'}
				class="size-6  transition-colors {iconColor}"
			/>
		</button>
		<input
			type={showPassword ? 'text' : 'password'}
			on:focus={() => (iconColor = 'text-blue-500')}
			on:blur={() => (iconColor = 'text-orange-500')}
			class="{bg} w-full rounded-md border border-primary p-2 pl-10 transition-colors focus:border-blue-600 focus:outline-none"
			{placeholder}
		/>
	</div>
</div>
