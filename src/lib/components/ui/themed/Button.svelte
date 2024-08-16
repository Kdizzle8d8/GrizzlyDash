<script lang="ts">
	import { Button } from '../button';

	export let type: 'button' | 'submit' | 'reset' = 'button';

	let className = '';
	export { className as class };
</script>

<button
	{type}
	class="{className} rounded-md p-2 px-4 text-white shadow-md transition-all duration-75 hover:brightness-110 active:scale-95"
	><slot></slot></button
>
