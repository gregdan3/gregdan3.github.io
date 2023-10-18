export const slugFromPath = (path: string) =>
	path.match(/([\w-]+)\.(svelte\.md|md|mdx|svx)/i)?.[1] ?? null;
