<script>
	import Button from '$lib/components/ui/themed/Button.svelte';
	import Card from '$lib/components/ui/themed/Card.svelte';
	import Input from '$lib/components/ui/themed/Input.svelte';
</script>

<div class="mt-10">
	<Button>asdf</Button>
	<Input />
	<Input label="With Label" />
	<Input label="With Icon" prefixIcon="mdi:email-outline" />
	<Card class="w-[20rem]" title="Example Card" description="Example Description">
		<img
			src="https://gohs.conroeisd.net/wp-content/uploads/sites/76/2018/11/GOHS-1125x1500.jpg"
			alt="Example Image"
		/>
		Content Goes Here!
	</Card>
</div>
