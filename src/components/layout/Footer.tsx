import { Container } from "#/components/layout/Container";
import { Brand } from "#/components/nav/Brand";
import { SocialLinks } from "#/components/nav/SocialLinks";
import { AppLink } from "#/components/ui/AppLink";
import { Icon } from "#/components/ui/Icon";
import { navLinks } from "#/data/navigation";
import { emailHref, site } from "#/data/site";

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="relative border-t border-border bg-canvas-deep/50">
			<Container className="py-12 lg:py-16">
				<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr]">
					<div>
						<Brand />
						<p className="mt-5 max-w-xs text-sm leading-relaxed text-text-muted">
							{site.tagline} based in {site.location}. Building clear,
							accessible interfaces for the web.
						</p>
						<AppLink
							href={emailHref}
							className="mt-4 inline-flex min-h-11 items-center gap-2 break-all text-sm text-text transition-colors hover:text-brand"
						>
							<Icon name="email" className="size-4 shrink-0 text-brand" />
							{site.email}
						</AppLink>
					</div>

					<nav aria-label="Footer">
						<h2 className="eyebrow">Navigate</h2>
						<ul className="mt-3 space-y-0.5">
							{navLinks.map((link) => (
								<li key={link.to}>
									<AppLink
										to={link.to}
										className="inline-flex min-h-11 items-center text-sm text-text-muted transition-colors hover:text-brand"
									>
										{link.label}
									</AppLink>
								</li>
							))}
						</ul>
					</nav>

					<div>
						<h2 className="eyebrow">Elsewhere</h2>
						<SocialLinks className="mt-3" />
						<p className="mt-4 max-w-xs text-xs leading-relaxed text-text-muted">
							{site.availability}. The fastest way to reach me is email.
						</p>
					</div>
				</div>

				<div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
					<p className="text-xs text-text-muted">
						© {year} {site.name}. All rights reserved.
					</p>
					<div className="flex flex-wrap items-center gap-x-5 gap-y-2">
						<p className="text-xs text-text-muted">Built with TanStack Start</p>
						<a
							href="#main-content"
							className="inline-flex min-h-11 items-center gap-2 text-xs text-text-muted transition-colors hover:text-brand"
						>
							<Icon name="arrow-up" className="size-4" />
							Back to top
						</a>
					</div>
				</div>
			</Container>
		</footer>
	);
}
