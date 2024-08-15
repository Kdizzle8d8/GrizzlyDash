<script lang="ts">
	import * as Card from '../card';

	export let title: string = '';
	export let footer: string = '';
	export let description: string = '';
	export let className: string = '';
	export { className as class };
</script>

<Card.Root class={` border border-blue-600 transition-all hover:border-orange-500 ${className}`}>
	<Card.Header>
		<Card.Title>{title}</Card.Title>
		<Card.Description>{description}</Card.Description>
	</Card.Header>
	<Card.Content>
		<slot></slot>
	</Card.Content>
	<Card.Footer>
		<p>{footer}</p>
	</Card.Footer>
</Card.Root>
