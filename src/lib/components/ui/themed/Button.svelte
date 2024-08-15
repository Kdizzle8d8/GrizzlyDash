<script lang="ts">
	import { Button } from '../button';

	export let variant: 'primary' | 'secondary' = 'primary';

	let className = '';

	$: buttonClass =
		variant === 'primary' ? 'bg-primary text-primary-foreground' : 'bg-blue-500 text-white';
</script>

<button
	class={`${className} ${buttonClass} m-2 rounded-md p-2 px-4 shadow-md transition-all hover:brightness-110 active:scale-95`}
	><slot></slot></button
>
