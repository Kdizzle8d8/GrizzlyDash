<script lang="ts">
	import { Input } from '../input';
	import Icon from '@iconify/svelte';

	let className = '';
	export { className as class };
	export let placeholder: string = '';
	export let label: string | undefined = undefined;
	export let bg = 'bg-background';
	export let name: string;
	export let error: string | undefined = undefined;
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
			{name}
			type={showPassword ? 'text' : 'password'}
			on:focus={() => (iconColor = 'text-blue-500')}
			on:blur={() => (iconColor = 'text-orange-500')}
			class="{bg} w-full rounded-md border p-2 pl-10 transition-colors focus:outline-none {error
				? 'border-red-500'
				: 'border-primary focus:border-blue-600'}"
			{placeholder}
		/>
	</div>
	{#if error}
		<p class="mt-1 text-xs text-red-500">{error}</p>
	{/if}
</div>
