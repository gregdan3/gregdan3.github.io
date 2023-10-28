// GET /rss
export const get = async () => {
	const res = await fetch(import.meta.env.VITE_BASE_ENDPOINT + '/posts/posts.json');
	const data = await res.json();
	const body = render(data.posts);
	const headers = {
		'Cache-Control': `max-age=0, s-max-age=${600}`,
		'Content-Type': 'application/xml'
	};
	return {
		body,
		headers
	};
};
