import { json } from '@sveltejs/kit';

const LANYARD_URL = 'https://api.lanyard.rest/v1';

export const GET = async ({ request }: { request: Request }) => {
	return json({
		error: 'GET method not allowed',
		expected: { method: 'POST', parameters: { user_id: 'number' } }
	});
};

export const POST = async ({ request }: { request: Request }) => {
	const postData = await request.json();
	const user_id = postData.user_id;
	const data = await fetch(`${LANYARD_URL}/users/${user_id}`).then((res) => res.json());
	if (!data.error) {
		return json(data.data);
	}
	return json(data); // pass through lanyard error
};
