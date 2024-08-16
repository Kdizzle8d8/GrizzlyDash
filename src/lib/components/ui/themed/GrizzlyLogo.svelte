<script lang="ts">
	export let size: number = 100;
	export let className: string = '';
	export { className as class };
	export let alt: string = 'Grizzly GO Logo';
</script>

<img src="/images/GOLogo.png" {alt} width={size} height={size} class="{className}object-contain" />

<style>
	img {
		max-width: 100%;
		height: auto;
	}
</style>
