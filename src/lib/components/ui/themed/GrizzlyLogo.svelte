<script lang="ts">
	export let size: number = 100;
	export let className: string = '';
	export { className as class };
	export let alt: string = 'Grizzly GO Logo';
	export let variant: 'go' | 'abbrv' | 'icon' = 'go';
</script>

{#if variant === 'go'}
	<img
		src="/images/GOLogo.png"
		{alt}
		width={size}
		height={size}
		class="{className}object-contain"
	/>
{:else if variant === 'abbrv'}
	<img src="/images/gohs.png" {alt} width={size} height={size} class="{className}object-contain" />
{:else if variant === 'icon'}
	<img
		src="/images/IconOnly.png"
		{alt}
		width={size}
		height={size}
		class="{className}object-contain"
	/>
{/if}

<style>
	img {
		max-width: 100%;
		height: auto;
	}
</style>
