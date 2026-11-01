import { Container } from "#/components/layout/Container";
import { Section } from "#/components/layout/Section";
import { Badge } from "#/components/ui/Badge";
import { SectionHeading } from "#/components/ui/SectionHeading";
import { skills } from "#/data/skills";

export function Skills() {
	return (
		<Section
			id="skills"
			labelledBy="skills-title"
			className="border-t border-border bg-canvas-deep/30"
		>
			<Container>
				<SectionHeading
					id="skills-title"
					eyebrow="02 — Capabilities"
					title="The toolkit"
					description="The languages, tools and frameworks I reach for when building for the web. Comfortable across the stack, focused on the front end."
				/>

				<div className="mt-10 border-y border-border">
					{skills.map((group, index) => (
						<div
							key={group.category}
							className="grid gap-3 border-b border-border py-5 last:border-b-0 sm:grid-cols-[11rem_1fr] sm:gap-6"
						>
							<h3 className="flex items-baseline gap-2 text-sm font-semibold text-text">
								<span
									aria-hidden="true"
									className="font-mono text-[10px] font-normal text-text-faint"
								>
									{String(index + 1).padStart(2, "0")}
								</span>
								{group.category}
							</h3>
							<ul className="flex flex-wrap gap-1.5">
								{group.items.map((item) => (
									<li key={item}>
										<Badge>{item}</Badge>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</Container>
		</Section>
	);
}
