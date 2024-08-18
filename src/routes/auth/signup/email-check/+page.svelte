<script>
	import Card from '$lib/components/ui/themed/Card.svelte';
	import GrizzlyLogo from '$lib/components/ui/themed/GrizzlyLogo.svelte';
	import Button from '$lib/components/ui/themed/Button.svelte';
</script>

<div class="flex h-screen flex-col items-center justify-center bg-background">
	<Card
		title="Check your email"
		description="We've sent you a verification link. Please check your inbox and click the link to continue."
		class="w-full max-w-md border-blue-600"
		pab={{ label: 'Resend Email', icon: 'mdi:email-sync' }}
	>
		<GrizzlyLogo size={400} variant="icon" class="mb-8" />
	</Card>
</div>
