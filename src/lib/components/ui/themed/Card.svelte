<script lang="ts">
	import * as Card from '../card';
	import Button from './Button.svelte';

	export let title: string = '';
	export let footer: string = '';
	export let description: string = '';
	export let className: string = '';
	export { className as class };

	export let pabContent: string = '';
</script>

<Card.Root class={`border-2 border-border transition-all hover:shadow-lg ${className}`}>
	<form on:submit|preventDefault>
		<Card.Header>
			<Card.Title>{title}</Card.Title>
			<Card.Description>{description}</Card.Description>
		</Card.Header>
		<Card.Content>
			<slot></slot>
		</Card.Content>
		<Card.Footer class="flex items-center justify-between">
			<p>{footer}</p>
			{#if pabContent}
				<Button class="bg-blue-600" type="submit">{pabContent}</Button>
			{/if}
		</Card.Footer>
	</form>
</Card.Root>
