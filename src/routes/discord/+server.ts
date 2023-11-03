import { json } from '@sveltejs/kit';

const LANYARD_URL = 'https://api.lanyard.rest/v1';
const MY_USER_ID = '497549183847497739';

export const GET = async ({ fetch }) => {
	const data = await fetch(`${LANYARD_URL}/users/${MY_USER_ID}`).then((res) => res.json());
	return json(data);
};
