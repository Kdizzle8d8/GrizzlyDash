import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const { session, user } = locals;

	if (!session) {
		throw redirect(302, '/auth/signup');
	}
};
