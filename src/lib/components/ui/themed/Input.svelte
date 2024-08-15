<script lang="ts">
	import { Input } from '../input';
	import Icon from '@iconify/svelte';

	let className = '';
	export { className as class };
	export let prefixIcon: string | undefined = undefined;
	export let suffixIcon: string | undefined = undefined;
	export let placeholder: string = '';
	export let label: string | undefined = undefined;

	let iconColor = 'text-orange-500';
</script>

<div class="relative {className} inline-flex flex-col">
	<div class="relative inline-flex items-center">
		{#if label}
			<label
				for={label}
				class="absolute -top-2 left-2 z-10 bg-background px-1 text-sm font-semibold text-foreground"
				>{label}</label
			>
		{/if}
		{#if prefixIcon}
			<Icon icon={prefixIcon} class="absolute left-2 size-5 transition-colors {iconColor} " />
		{/if}
		<input
			on:focus={() => (iconColor = 'text-blue-600')}
			on:blur={() => (iconColor = 'text-orange-500')}
			class={` rounded-md border-2 border-primary bg-background p-2 pt-3 caret-orange-500 transition-colors focus:border-blue-600 focus:outline-none ${
				prefixIcon ? 'pl-8' : ''
			} ${suffixIcon ? 'pr-8' : ''}`}
			{placeholder}
		/>
		{#if suffixIcon}
			<Icon
				icon={suffixIcon}
				class="absolute right-2 size-5 text-muted-foreground transition-colors {iconColor}"
			></Icon>
		{/if}
	</div>
</div>
