import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "#/components/contact/ContactForm";
import { Container } from "#/components/layout/Container";
import { Section } from "#/components/layout/Section";
import { SocialLinks } from "#/components/nav/SocialLinks";
import { AppLink } from "#/components/ui/AppLink";
import { Badge } from "#/components/ui/Badge";
import { ButtonLink } from "#/components/ui/ButtonLink";
import { Icon } from "#/components/ui/Icon";
import { PageIntro } from "#/components/ui/PageIntro";
import { SectionHeading } from "#/components/ui/SectionHeading";
import { contactForm, contactPage } from "#/data/contact";
import { emailHref, site } from "#/data/site";
import { routeHead } from "#/lib/seo";

type ContactSearch = { sent?: true };

export const Route = createFileRoute("/contact/")({
	validateSearch: (search: Record<string, unknown>): ContactSearch =>
		search.sent === "1" || search.sent === 1 ? { sent: true } : {},
	head: () =>
		routeHead({
			title: "Contact",
			description:
				"Send a message to Omid, a front-end developer in Kyiv, about freelance projects, collaborations and front-end work — or email directly.",
			path: "/contact",
		}),
	component: ContactPage,
});

function ContactPage() {
	const { sent } = Route.useSearch();

	return (
		<>
			<PageIntro
				eyebrow="Contact"
				title="Let's work together."
				description={contactPage.lead}
				meta={
					<div className="flex flex-wrap items-center gap-2">
						<Badge tone="brand">{site.availability}</Badge>
						<Badge>{site.location}</Badge>
					</div>
				}
			/>

			<Section labelledBy="email-title">
				<Container className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
					<div className="relative overflow-hidden rounded-feature border border-border-brand bg-surface/30 p-6 sm:p-10">
						<div
							aria-hidden="true"
							className="pointer-events-none absolute inset-0 bg-grid opacity-25"
						/>
						<div className="relative">
							<p className="eyebrow">01 — Email</p>
							<h2 id="email-title" className="text-section mt-3 text-text">
								Start with a message.
							</h2>
							<p className="prose-copy mt-4">{contactPage.responseNote}</p>

							<AppLink
								href={emailHref}
								className="mt-6 inline-flex max-w-full items-center gap-3 break-all text-lg font-semibold text-brand-bright transition-colors hover:text-text sm:text-2xl"
							>
								<Icon name="email" className="size-5 shrink-0" />
								{site.email}
							</AppLink>

							<div className="mt-7 flex flex-wrap gap-3">
								<ButtonLink href={emailHref} icon="email" iconPosition="left">
									Email me
								</ButtonLink>
								<ButtonLink
									to="/projects"
									variant="secondary"
									icon="arrow-right"
								>
									See my work
								</ButtonLink>
							</div>
						</div>
					</div>

					<aside
						aria-labelledby="details-title"
						className="rounded-feature border border-border bg-surface/30 p-6 sm:p-8"
					>
						<h2 id="details-title" className="eyebrow">
							Details
						</h2>
						<dl className="mt-5 space-y-5">
							<div>
								<dt className="eyebrow">Availability</dt>
								<dd className="mt-1.5 text-sm text-text">
									{site.availability}
								</dd>
							</div>
							<div>
								<dt className="eyebrow">Location</dt>
								<dd className="mt-1.5 text-sm text-text">{site.location}</dd>
							</div>
							<div>
								<dt className="eyebrow">Response</dt>
								<dd className="mt-1.5 text-sm text-text">
									{contactPage.responseNote}
								</dd>
							</div>
						</dl>
					</aside>
				</Container>
			</Section>

			<Section labelledBy="message-title" className="border-t border-border">
				<Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
					<SectionHeading
						id="message-title"
						eyebrow="02 — Message"
						title={contactForm.title}
						description={contactForm.description}
					/>
					<div className="rounded-feature border border-border bg-surface/30 p-6 sm:p-8">
						<ContactForm confirmed={sent === true} />
					</div>
				</Container>
			</Section>

			<Section
				labelledBy="elsewhere-title"
				className="border-t border-border bg-canvas-deep/30"
			>
				<Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
					<SectionHeading
						id="elsewhere-title"
						eyebrow="03 — Elsewhere"
						title="Find me online."
						description="Code, experiments and the occasional video. Every link opens in a new tab except email."
					/>
					<SocialLinks variant="list" />
				</Container>
			</Section>

			<Section labelledBy="services-title" className="border-t border-border">
				<Container>
					<SectionHeading
						id="services-title"
						eyebrow="04 — Services"
						title="What I can help with."
						description="A small, focused set of ways to work together. If your project does not fit neatly, describe it anyway."
					/>

					<div className="mt-10 grid gap-4 md:grid-cols-3">
						{contactPage.services.map((service, index) => (
							<article
								key={service.title}
								className="rounded-card border border-border bg-surface/30 p-5"
							>
								<span
									aria-hidden="true"
									className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-bright"
								>
									0{index + 1}
								</span>
								<h3 className="text-card mt-4 text-text">{service.title}</h3>
								<p className="mt-2 text-sm leading-relaxed text-text-muted">
									{service.body}
								</p>
							</article>
						))}
					</div>
				</Container>
			</Section>
		</>
	);
}
