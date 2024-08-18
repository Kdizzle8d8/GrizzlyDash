<script lang="ts">
	import * as Card from '../card';
	import Button from './Button.svelte';
	import Icon from '@iconify/svelte';

	export let title: string = '';
	export let footer: string = '';
	export let description: string = '';
	export let className: string = '';
	export { className as class };

	export let pab: { label: string; icon?: string } | null = null;
	export let cornerIcon: string = '';
</script>

<Card.Root class={`border-2 border-border transition-all hover:shadow-lg ${className}`}>
	<form on:submit|preventDefault>
		<Card.Header class="relative flex flex-row items-center justify-between">
			<div>
				<Card.Title>{title}</Card.Title>
				<Card.Description>{description}</Card.Description>
			</div>
			{#if cornerIcon}
				<Icon class="absolute right-2 top-1 size-[2.5rem]" icon={cornerIcon} />
			{/if}
		</Card.Header>
		<Card.Content>
			<slot></slot>
		</Card.Content>
		<Card.Footer class="flex items-center justify-between">
			<p>{footer}</p>
			{#if pab}
				<Button class="bg-blue-600" type="submit">
					{pab.label}
					{#if pab.icon}
						<Icon class="ml-2" icon={pab.icon} />
					{/if}
				</Button>
			{/if}
		</Card.Footer>
	</form>
</Card.Root>
