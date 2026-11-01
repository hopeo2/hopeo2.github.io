import { PortraitCard } from "#/components/about/PortraitCard";
import { Container } from "#/components/layout/Container";
import { ButtonLink } from "#/components/ui/ButtonLink";
import { site } from "#/data/site";

const HERO_FACTS = [
	{ label: "Based in", value: site.location },
	{ label: "Focus", value: "Front-end & interface" },
	{ label: "Status", value: "Open to freelance" },
] as const;

export function Hero() {
	return (
		<section aria-labelledby="hero-title" className="relative overflow-hidden">
			<Container className="grid gap-14 py-14 sm:py-18 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:py-24">
				<div className="animate-reveal">
					<p className="inline-flex items-center gap-2.5 rounded-full border border-border-brand bg-brand-soft px-3 py-1.5 text-xs text-brand-bright">
						<span className="relative flex size-2">
							<span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60 motion-reduce:hidden" />
							<span className="relative inline-flex size-2 rounded-full bg-brand" />
						</span>
						{site.availability}
					</p>

					<h1 id="hero-title" className="text-display mt-6 max-w-3xl text-text">
						<span className="block">Omid is a</span>
						<span className="block text-brand">web designer</span>
						<span className="block">and front-end</span>
						<span className="block">developer.</span>
					</h1>

					<p className="prose-copy mt-6 max-w-[56ch] text-base sm:text-lg">
						{site.heroDescription}
					</p>

					<div className="mt-8 flex flex-wrap gap-3">
						<ButtonLink to="/projects" icon="arrow-right">
							View selected work
						</ButtonLink>
						<ButtonLink to="/contact" variant="secondary">
							Get in touch
						</ButtonLink>
					</div>

					<dl className="mt-10 grid max-w-xl grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-5 sm:grid-cols-3">
						{HERO_FACTS.map((fact) => (
							<div key={fact.label}>
								<dt className="eyebrow">{fact.label}</dt>
								<dd className="mt-1.5 text-sm text-text">{fact.value}</dd>
							</div>
						))}
					</dl>
				</div>

				<div className="animate-reveal [animation-delay:120ms] lg:pl-4">
					<PortraitCard />
				</div>
			</Container>
		</section>
	);
}
