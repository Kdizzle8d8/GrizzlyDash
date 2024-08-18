<script lang="ts">
	import { Button } from '../button';
	import Icon from '@iconify/svelte';
	import * as Tooltip from '$lib/components/ui/tooltip';

	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let prefixIcon: string | undefined = undefined;
	export let suffixIcon: string | undefined = undefined;
	export let tooltip: string | undefined = undefined;
	export let disabled = false;
	export let disabledTooltip: string | undefined = undefined;
	let className = '';
	let colFix = className.match(/col-span-\d+/) ? className.match(/col-span-\d+/)[0] : '';
	export { className as class };
</script>

{#if tooltip}
	<Tooltip.Root>
		<Tooltip.Trigger class="w-full">
			<button
				{disabled}
				{type}
				class="{className} {disabled
					? 'disabled'
					: ''} inline-flex items-center justify-center rounded-md p-2 px-4 text-white shadow-md transition-all duration-75 hover:brightness-110 active:scale-95"
			>
				{#if prefixIcon}
					<Icon icon={prefixIcon} class="mr-2 size-5" />
				{/if}
				<slot></slot>
				{#if suffixIcon}
					<Icon icon={suffixIcon} class="ml-2 size-5" />
				{/if}
			</button>
		</Tooltip.Trigger>
		<Tooltip.Content>
			<p>{tooltip}</p>
		</Tooltip.Content>
	</Tooltip.Root>
{:else}
	<button
		{type}
		class="{className} inline-flex items-center justify-center rounded-md p-2 px-4 text-white shadow-md transition-all duration-75 hover:brightness-110 active:scale-95"
	>
		{#if prefixIcon}
			<Icon icon={prefixIcon} class="mr-2 size-5" />
		{/if}
		<slot></slot>
		{#if suffixIcon}
			<Icon icon={suffixIcon} class="ml-2 size-5" />
		{/if}
	</button>
{/if}
