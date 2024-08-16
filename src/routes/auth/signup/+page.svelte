<script lang="ts">
	import Input from '$lib/components/ui/themed/Input.svelte';
	import PasswordInput from '$lib/components/ui/themed/PasswordInput.svelte';
	import { Label } from '$lib/components/ui/label/index.js';
	import GrizzlyLogo from '$lib/components/ui/themed/GrizzlyLogo.svelte';
	import Button from '$lib/components/ui/themed/Button.svelte';
</script>

<div class=" h-screen w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
	<div class="mb-[10rem] flex items-center justify-center py-12">
		<div class="mx-auto grid w-[350px] gap-6">
			<div class="grid gap-2 text-center">
				<GrizzlyLogo size={400} class="mx-auto mb-4" />
				<h1 class="text-3xl font-bold">Sign In</h1>
				<p class="text-balance text-muted-foreground">
					Enter your email below to sign in to your account
				</p>
			</div>
			<div class="grid grid-cols-2 gap-4">
				<Input
					label="First Name"
					prefixIcon="mdi:account-outline"
					placeholder="John"
					class="w-full"
				/>
				<Input
					label="Last Name"
					prefixIcon="mdi:account-outline"
					placeholder="Doe"
					class="w-full"
				/>
				<Input
					label="Email"
					prefixIcon="mdi:email-outline"
					placeholder="m@example.com"
					class="col-span-2 w-full"
				/>
				<PasswordInput
					label="Password"
					placeholder="Enter your password"
					class="col-span-2 w-full"
				/>
				<Button type="submit" class="col-span-2 w-full bg-blue-600">Sign Up</Button>
			</div>
			<div class=" text-center text-sm">
				Already have an account?
				<a href="/auth/signin" class="underline"> Sign in </a>
			</div>
		</div>
	</div>
	<div class="hidden bg-muted lg:block">
		<img
			src="/images/School.jpg"
			alt="Grand Oaks High School building"
			class="h-screen w-full object-cover object-center dark:brightness-[1.2] dark:grayscale"
		/>
	</div>
</div>
