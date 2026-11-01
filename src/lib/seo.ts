import { site } from "#/data/site";

export type RouteMetaInput = {
	/** Page title without the site suffix. */
	title: string;
	description: string;
	/** Canonical path, starting with a slash. */
	path: string;
	type?: "website" | "article";
};

const siteUrl = site.url.replace(/\/$/, "");

function canonicalUrl(path: string): string {
	if (path === "/") return `${siteUrl}/`;
	return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Route-level metadata. The root title template adds the site suffix, while
 * Open Graph and Twitter titles are written out in full for share previews.
 */
export function routeHead({
	title,
	description,
	path,
	type = "website",
}: RouteMetaInput) {
	const url = canonicalUrl(path);
	const pageTitle = `${title} | ${site.name}`;
	const socialTitle = `${title} — ${site.name}`;

	return {
		meta: [
			{ title: pageTitle },
			{ name: "description", content: description },
			{ property: "og:title", content: socialTitle },
			{ property: "og:description", content: description },
			{ property: "og:type", content: type },
			{ property: "og:url", content: url },
			{ name: "twitter:card", content: "summary" },
			{ name: "twitter:title", content: socialTitle },
			{ name: "twitter:description", content: description },
		],
		links: [{ rel: "canonical", href: url }],
	};
}
