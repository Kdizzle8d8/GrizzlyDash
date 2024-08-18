<script lang="ts">
	import Input from '$lib/components/ui/themed/Input.svelte';
	import PasswordInput from '$lib/components/ui/themed/PasswordInput.svelte';
	import GrizzlyLogo from '$lib/components/ui/themed/GrizzlyLogo.svelte';
	import Button from '$lib/components/ui/themed/Button.svelte';
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import { goto } from '$app/navigation';
	import { writable } from 'svelte/store';

	export let form: ActionData;

	const loginErrors = writable<Record<string, string>>({
		email: '',
		password: ''
	});

	function handleSubmit() {
		$loginErrors = {
			email: '',
			password: ''
		};
		return async ({
			result
		}: {
			result: { type: string; data?: { errors: { name: string; error: string }[] } };
		}) => {
			if (result.type === 'success') {
				goto('/');
			} else if (result.type === 'failure' && result.data) {
				const { errors } = result.data;
				errors.forEach(({ name, error }) => {
					$loginErrors[name] = error;
				});
			}
		};
	}
</script>

<div class="h-screen w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
	<div class="mb-[10rem] flex items-center justify-center py-12">
		<div class="mx-auto grid w-[350px] gap-6">
			<div class="grid gap-2 text-center">
				<GrizzlyLogo size={400} class="mx-auto mb-4" />
				<h1 class="text-3xl font-bold">Log In</h1>
				<p class="text-balance text-muted-foreground">
					Enter your credentials below to log in to your account
				</p>
			</div>
			<form class="grid gap-4" method="POST" action="?/login" use:enhance={handleSubmit}>
				<Input
					label="Email"
					name="email"
					prefixIcon="mdi:email-outline"
					placeholder="m@example.com"
					error={$loginErrors.email}
				/>
				<PasswordInput
					label="Password"
					name="password"
					placeholder="Enter your password"
					error={$loginErrors.password}
				/>
				<Button type="submit" class="w-full bg-blue-600">Log In</Button>
			</form>
			<div class="text-center text-sm">
				Don't have an account?
				<a href="/auth/signup" class="underline"> Sign up </a>
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
