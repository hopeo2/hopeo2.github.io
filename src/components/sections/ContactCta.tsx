import { Container } from "#/components/layout/Container";
import { Section } from "#/components/layout/Section";
import { SocialLinks } from "#/components/nav/SocialLinks";
import { AppLink } from "#/components/ui/AppLink";
import { ButtonLink } from "#/components/ui/ButtonLink";
import { Icon } from "#/components/ui/Icon";
import { contactPage } from "#/data/contact";
import { emailHref, site } from "#/data/site";

export function ContactCta() {
	return (
		<Section
			id="contact"
			labelledBy="contact-cta-title"
			className="border-t border-border"
		>
			<Container>
				<div className="relative overflow-hidden rounded-feature border border-border-brand bg-surface/30 px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
					<div
						aria-hidden="true"
						className="pointer-events-none absolute inset-0 bg-grid opacity-30"
					/>
					<div
						aria-hidden="true"
						className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-brand/10 blur-3xl"
					/>

					<div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-14">
						<div>
							<p className="eyebrow flex items-center gap-2">
								<span aria-hidden="true" className="text-brand">
									#
								</span>
								04 — Contact
							</p>
							<h2
								id="contact-cta-title"
								className="text-section mt-3 text-text"
							>
								Have a project in mind?
							</h2>
							<p className="prose-copy mt-4">{contactPage.lead}</p>
							<div className="mt-7 flex flex-wrap gap-3">
								<ButtonLink href={emailHref} icon="email" iconPosition="left">
									Email me
								</ButtonLink>
								<ButtonLink
									to="/contact"
									variant="secondary"
									icon="arrow-right"
								>
									Send a message
								</ButtonLink>
							</div>
						</div>

						<div className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
							<p className="eyebrow">{contactPage.emailLabel}</p>
							<AppLink
								href={emailHref}
								className="mt-2 inline-flex min-h-11 items-center gap-2 break-all text-sm text-text transition-colors hover:text-brand-bright"
							>
								<Icon name="email" className="size-4 shrink-0 text-brand" />
								{site.email}
							</AppLink>
							<p className="mt-4 text-sm leading-relaxed text-text-muted">
								{site.availability}. Based in {site.location}.
							</p>
							<div className="mt-5">
								<SocialLinks />
							</div>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
}
