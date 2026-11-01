import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { Layout } from "#/components/layout/Layout";
import { ErrorView } from "#/components/system/ErrorView";
import { NotFoundView } from "#/components/system/NotFoundView";
import { site } from "#/data/site";

import appCss from "../styles.css?url";

const personJsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: site.name,
	jobTitle: site.role,
	url: site.url,
	email: site.email,
	address: {
		"@type": "PostalAddress",
		addressLocality: "Kyiv",
		addressCountry: "UA",
	},
	sameAs: site.socials.map((social) => social.href),
};

export const Route = createRootRoute({
	component: RootComponent,
	notFoundComponent: NotFoundView,
	errorComponent: ErrorView,
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover",
			},
			{ name: "description", content: site.bio },
			{ name: "author", content: site.name },
			{ name: "theme-color", content: "#282c33" },
			{ name: "color-scheme", content: "dark" },
			{ property: "og:site_name", content: site.name },
			{ property: "og:locale", content: "en_US" },
			{ name: "twitter:card", content: "summary" },
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{ rel: "preconnect", href: "https://fonts.googleapis.com" },
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Chivo+Mono:wght@400;500;600;700;800&display=swap",
			},
			{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
		],
		title: {
			default: `Omid — ${site.tagline}`,
		},
	}),
	shellComponent: RootDocument,
});

function RootComponent() {
	return (
		<Layout>
			<Outlet />
		</Layout>
	);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
				{/* Static Person structured data, serialised from local constants only. */}
				<script type="application/ld+json">
					{JSON.stringify(personJsonLd)}
				</script>
			</head>
			<body>
				{children}
				<Scripts />
			</body>
		</html>
	);
}
