import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	login: async ({ request, locals }) => {
		const { supabase } = locals;
		const data = await request.formData();
		const email = data.get('email') as string;
		const password = data.get('password') as string;

		let errors: { name: string; error: string }[] = [];

		if (!email) {
			errors.push({ name: 'email', error: 'Email is required' });
		}
		if (!password) {
			errors.push({ name: 'password', error: 'Password is required' });
		}

		if (errors.length > 0) {
			return fail(400, { errors });
		}

		const { data: authData, error } = await supabase.auth.signInWithPassword({
			email,
			password
		});

		if (error) {
			return fail(400, {
				errors: [{ name: 'email', error: 'Invalid email or password' }]
			});
		}

		throw redirect(303, '/');
	}
} satisfies Actions;
