<script lang="ts">
	import { Input } from '../input';
	import Icon from '@iconify/svelte';

	let className = '';
	export { className as class };
	export let prefixIcon: string | undefined = undefined;
	export let suffixIcon: string | undefined = undefined;
	export let placeholder: string = '';
	export let name: string;
	export let label: string | undefined = undefined;
	export let bg = 'bg-background';
	export let error: string | undefined = undefined;
	let iconColor = 'text-orange-500';
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
		{#if prefixIcon}
			<Icon
				icon={prefixIcon}
				class="absolute left-2 top-1/2 size-5 -translate-y-1/2 transition-colors {error
					? 'text-red-500'
					: iconColor} "
			/>
		{/if}
		<input
			on:focus={() => (iconColor = 'text-blue-500')}
			on:blur={() => (iconColor = 'text-orange-500')}
			class={` ${bg} w-full rounded-md border p-2 pt-3 transition-colors focus:outline-none ${
				prefixIcon ? 'pl-8' : ''
			} ${suffixIcon ? 'pr-8' : ''} ${error ? 'border-red-500' : 'border-primary focus:border-blue-600'}`}
			{placeholder}
			{name}
		/>
		{#if suffixIcon}
			<Icon
				icon={suffixIcon}
				class="absolute right-2 size-5 text-muted-foreground transition-colors {error
					? 'text-red-500'
					: iconColor}"
			></Icon>
		{/if}
	</div>
	{#if error}
		<p class="mt-1 text-xs text-red-500">{error}</p>
	{/if}
</div>
