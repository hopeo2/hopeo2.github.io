import { createFileRoute } from "@tanstack/react-router";
import { AboutPreview } from "#/components/sections/AboutPreview";
import { ContactCta } from "#/components/sections/ContactCta";
import { Hero } from "#/components/sections/Hero";
import { Quote } from "#/components/sections/Quote";
import { SelectedWork } from "#/components/sections/SelectedWork";
import { Skills } from "#/components/sections/Skills";
import { site } from "#/data/site";
import { routeHead } from "#/lib/seo";

export const Route = createFileRoute("/")({
	head: () =>
		routeHead({
			title: "Web designer & front-end developer",
			description: site.heroDescription,
			path: "/",
		}),
	component: HomePage,
});

function HomePage() {
	return (
		<>
			<Hero />
			<SelectedWork />
			<Skills />
			<AboutPreview />
			<Quote />
			<ContactCta />
		</>
	);
}
