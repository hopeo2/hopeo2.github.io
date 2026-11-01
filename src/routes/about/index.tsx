import { createFileRoute } from "@tanstack/react-router";
import { PortraitCard } from "#/components/about/PortraitCard";
import { Container } from "#/components/layout/Container";
import { Section } from "#/components/layout/Section";
import { AppLink } from "#/components/ui/AppLink";
import { Badge } from "#/components/ui/Badge";
import { ButtonLink } from "#/components/ui/ButtonLink";
import { Icon } from "#/components/ui/Icon";
import { PageIntro } from "#/components/ui/PageIntro";
import { SectionHeading } from "#/components/ui/SectionHeading";
import { about } from "#/data/about";
import { emailHref, site } from "#/data/site";
import { routeHead } from "#/lib/seo";

export const Route = createFileRoute("/about/")({
	head: () =>
		routeHead({
			title: "About",
			description:
				"Omid is a self-taught front-end developer in Kyiv, building responsive, accessible interfaces with a focus on clarity, typography and detail.",
			path: "/about",
		}),
	component: AboutPage,
});

function AboutPage() {
	return (
		<>
			<PageIntro
				eyebrow="About me"
				title="A developer with an editor's eye."
				description={about.lead}
				meta={
					<div className="flex flex-wrap items-center gap-2">
						<Badge tone="brand">Self-taught</Badge>
						<Badge>{site.location}</Badge>
						<Badge>{site.availability}</Badge>
					</div>
				}
			/>

			<Section labelledBy="story-title">
				<Container className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
					<div>
						<SectionHeading
							id="story-title"
							eyebrow="01 — Story"
							title="Between design and code."
						/>
						<div className="mt-5 space-y-4">
							{about.paragraphs.map((paragraph) => (
								<p key={paragraph} className="prose-copy">
									{paragraph}
								</p>
							))}
						</div>

						<dl className="mt-7 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-5">
							{about.facts.map((fact) => (
								<div key={fact.label}>
									<dt className="eyebrow">{fact.label}</dt>
									<dd className="mt-1.5 text-sm text-text">{fact.value}</dd>
								</div>
							))}
						</dl>

						<AppLink
							to="/"
							hash="skills"
							className="group mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-text transition-colors hover:text-brand-bright"
						>
							See the full toolkit
							<Icon
								name="arrow-right"
								className="size-4 text-brand transition-transform duration-200 group-hover:translate-x-0.5"
							/>
						</AppLink>
					</div>

					<PortraitCard compact className="max-w-sm lg:justify-self-end" />
				</Container>
			</Section>

			<Section
				labelledBy="timeline-title"
				className="border-t border-border bg-canvas-deep/30"
			>
				<Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
					<SectionHeading
						id="timeline-title"
						eyebrow="02 — Path"
						title="How I got here."
						description="No invented job titles and no client logos — just the route that led to the work on this site."
						className="self-start"
					/>

					<ol className="border-l border-border">
						{about.timeline.map((item, index) => (
							<li key={item.title} className="relative pb-9 pl-6 last:pb-0">
								<span
									aria-hidden="true"
									className="absolute -left-[5px] top-1.5 size-2.5 rounded-full border-2 border-canvas bg-brand"
								/>
								<p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
									{String(index + 1).padStart(2, "0")}
								</p>
								<h3 className="mt-2 text-lg font-semibold text-text">
									{item.title}
								</h3>
								<p className="mt-2 text-sm leading-relaxed text-text-muted">
									{item.body}
								</p>
							</li>
						))}
					</ol>
				</Container>
			</Section>

			<Section labelledBy="principles-title" className="border-t border-border">
				<Container>
					<SectionHeading
						id="principles-title"
						eyebrow="03 — Principles"
						title="How I work."
						description="Three rules that shape the decisions behind the interface."
					/>

					<div className="mt-10 grid gap-4 md:grid-cols-3">
						{about.principles.map((principle, index) => (
							<article
								key={principle.title}
								className="rounded-card border border-border bg-surface/30 p-5"
							>
								<span
									aria-hidden="true"
									className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-bright"
								>
									0{index + 1}
								</span>
								<h3 className="text-card mt-4 text-text">{principle.title}</h3>
								<p className="mt-2 text-sm leading-relaxed text-text-muted">
									{principle.body}
								</p>
							</article>
						))}
					</div>
				</Container>
			</Section>

			<Section labelledBy="about-cta-title" className="border-t border-border">
				<Container>
					<div className="rounded-feature border border-border-brand bg-surface/30 px-6 py-10 sm:px-10">
						<h2 id="about-cta-title" className="text-section text-text">
							Let&apos;s work together.
						</h2>
						<p className="prose-copy mt-4">
							{site.availability}. If you have a project, a question or a site
							that needs a careful front-end pass, email is the best place to
							start.
						</p>
						<div className="mt-7 flex flex-wrap gap-3">
							<ButtonLink to="/contact" icon="arrow-right">
								Contact details
							</ButtonLink>
							<ButtonLink
								href={emailHref}
								variant="secondary"
								icon="email"
								iconPosition="left"
							>
								Email me
							</ButtonLink>
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}
