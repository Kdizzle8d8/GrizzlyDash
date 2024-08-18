import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

type stage1 = {
	first_name: string;
	last_name: string;
	email: string;
};
type stage2 = {
	password: string;
	confirm_password: string;
};

export const actions = {
	stage1: async ({ request, cookies }) => {
		const validateEmail = (email: string) => {
			return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
		};
		const data = await request.formData();
		const formData = Object.fromEntries(data.entries()) as stage1;
		let errors: { name: string; error: string }[] = [];
		if (!formData.first_name) {
			console.log('First name is required');
			errors.push({ name: 'first_name', error: 'First name is required' });
		}
		if (!formData.last_name) {
			console.log('Last name is required');
			errors.push({ name: 'last_name', error: 'Last name is required' });
		}
		if (!validateEmail(formData.email)) {
			console.log('Invalid email address');
			errors.push({ name: 'email', error: 'Invalid email address' });
		}

		console.log(errors.length);
		if (errors.length === 0) {
			console.log('Stage 1 Validated');
			cookies.set('signupData', JSON.stringify(formData), {
				path: '/',
				httpOnly: true,
				sameSite: 'strict'
			});
			return { success: true, message: 'Stage 1 Validated', errors };
		} else {
			return fail(400, { errors });
		}
	},
	stage2: async ({ request, cookies, locals }) => {
		const { supabase } = locals;
		const reqData = await request.formData();
		const formData = Object.fromEntries(reqData.entries()) as stage2;
		let errors: { name: string; error: string }[] = [];
		if (!formData.password) {
			console.log('Password is required');
			errors.push({ name: 'password', error: 'Password is required' });
		}
		if (!formData.confirm_password) {
			console.log('Confirm password is required');
			errors.push({ name: 'confirm_password', error: 'Confirm password is required' });
		}
		if (
			formData.password !== formData.confirm_password &&
			formData.password &&
			formData.confirm_password
		) {
			console.log('Passwords do not match');
			errors.push(
				{ name: 'confirm_password', error: 'Passwords do not match' },
				{ name: 'password', error: 'Passwords do not match' }
			);
		}
		if (errors.length === 0) {
			console.log('Stage 2 Validated');

			const stage1Data = JSON.parse(cookies.get('signupData'));
			const signupData = {
				...stage1Data,
				password: formData.password
			};
			const { data, error } = await supabase.auth.signUp({
				email: signupData.email,
				password: signupData.password,
				options: {
					emailRedirectTo: 'http://localhost:5173/auth/login',
					data: {
						first_name: signupData.first_name,
						last_name: signupData.last_name
					}
				}
			});
			if (error) {
				console.log(error);
				if (error.code === 'weak_password') {
					errors.push({ name: 'password', error: 'Password is too weak' });
				}
				return { success: false, message: 'Stage 2 Failed', errors };
			}
			return { success: true, message: 'Stage 2 Validated', errors };
		} else {
			return fail(400, { errors });
		}
	}
} satisfies Actions;
