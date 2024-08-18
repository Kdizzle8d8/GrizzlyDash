<script lang="ts">
	import Input from '$lib/components/ui/themed/Input.svelte';
	import PasswordInput from '$lib/components/ui/themed/PasswordInput.svelte';
	import { Label } from '$lib/components/ui/label/index.js';
	import GrizzlyLogo from '$lib/components/ui/themed/GrizzlyLogo.svelte';
	import Button from '$lib/components/ui/themed/Button.svelte';
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;

	let stage = 1;

	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';

	const stage1Errors = writable<Record<string, string>>({
		first_name: '',
		last_name: '',
		email: ''
	});
	const stage2Errors = writable<Record<string, string>>({
		password: '',
		confirm_password: ''
	});

	function handleSubmit() {
		$stage1Errors = {
			first_name: '',
			last_name: '',
			email: ''
		};
		return async ({
			result
		}: {
			result: { type: string; data?: { errors: { name: string; error: string }[] } };
		}) => {
			console.log(result);
			if (result.type === 'success') {
				if (stage === 1) {
					stage = 2;
				}
			} else if (result.type === 'failure' && result.data) {
				const { errors } = result.data;
				errors.forEach(({ name, error }) => {
					$stage1Errors[name] = error;
				});
				console.log($stage1Errors);
			}
		};
	}

	function handleSubmit2() {
		$stage2Errors = {
			password: '',
			confirm_password: ''
		};
		return async ({
			result
		}: {
			result: { type: string; data?: { errors: { name: string; error: string }[] } };
		}) => {
			if (result.type === 'success') {
				goto('/auth/signup/email-check');
			}
			if (result.type === 'failure' && result.data) {
				const { errors } = result.data;
				errors.forEach(({ name, error }) => {
					$stage2Errors[name] = error;
				});
			}
		};
	}
</script>

<div class=" h-screen w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
	<div class="mb-[10rem] flex items-center justify-center py-12">
		<div class="mx-auto grid w-[350px] gap-6">
			<div class="grid gap-2 text-center">
				<GrizzlyLogo size={400} class="mx-auto mb-4" />
				<h1 class="text-3xl font-bold">Sign Up</h1>
				<p class="text-balance text-muted-foreground">
					Enter your information below to sign up for an account
				</p>
			</div>
			{#if stage === 1}
				<form
					class="grid grid-cols-2 gap-4"
					method="POST"
					action="?/stage1"
					use:enhance={handleSubmit}
				>
					<Input
						label="First Name"
						name="first_name"
						prefixIcon="mdi:account-outline"
						placeholder="John"
						error={$stage1Errors.first_name}
					/>
					<Input
						label="Last Name"
						name="last_name"
						prefixIcon="mdi:account-outline"
						placeholder="Doe"
						error={$stage1Errors.last_name}
					/>
					<Input
						label="Email"
						name="email"
						prefixIcon="mdi:email-outline"
						placeholder="m@example.com"
						error={$stage1Errors.email}
						class="col-span-2"
					/>
					<Button
						tooltip="Continue Sign Up Process"
						suffixIcon="mdi:arrow-right"
						type="submit"
						class="col-span-2 w-full bg-blue-600">Continue</Button
					>
				</form>
			{:else if stage === 2}
				<form class="grid gap-4" method="POST" action="?/stage2" use:enhance={handleSubmit2}>
					<PasswordInput
						label="Password"
						name="password"
						placeholder="Enter your password"
						class="col-span-2 w-full"
						error={$stage2Errors.password}
					/>
					<PasswordInput
						label="Confirm Password"
						name="confirm_password"
						placeholder="Confirm your password"
						class="col-span-2 w-full"
						error={$stage2Errors.confirm_password}
					/>
					<Button type="button" on:click={() => (stage = 1)} class="  w-full bg-blue-600 "
						>Back</Button
					>
					<Button type="submit" class="  w-full bg-orange-500">Sign Up</Button>
				</form>
			{/if}
			<div class=" text-center text-sm">
				Already have an account?
				<a href="/auth/login" class="underline"> Login </a>
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
