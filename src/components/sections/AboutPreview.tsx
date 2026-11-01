import { PortraitCard } from "#/components/about/PortraitCard";
import { Container } from "#/components/layout/Container";
import { Section } from "#/components/layout/Section";
import { ButtonLink } from "#/components/ui/ButtonLink";
import { SectionHeading } from "#/components/ui/SectionHeading";
import { about } from "#/data/about";

export function AboutPreview() {
	return (
		<Section
			id="about-preview"
			labelledBy="about-preview-title"
			className="border-t border-border"
		>
			<Container className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
				<div>
					<SectionHeading
						id="about-preview-title"
						eyebrow="03 — About"
						title="A developer with an editor's eye."
						description={about.lead}
					/>

					<p className="prose-copy mt-4">{about.paragraphs[1]}</p>

					<dl className="mt-6 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-5">
						{about.facts.map((fact) => (
							<div key={fact.label}>
								<dt className="eyebrow">{fact.label}</dt>
								<dd className="mt-1.5 text-sm text-text">{fact.value}</dd>
							</div>
						))}
					</dl>

					<ButtonLink
						to="/about"
						variant="secondary"
						icon="arrow-right"
						className="mt-7"
					>
						More about me
					</ButtonLink>
				</div>

				<PortraitCard compact className="max-w-sm lg:justify-self-end" />
			</Container>
		</Section>
	);
}
