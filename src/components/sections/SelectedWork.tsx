import { Container } from "#/components/layout/Container";
import { Section } from "#/components/layout/Section";
import { ProjectCard } from "#/components/projects/ProjectCard";
import { AppLink } from "#/components/ui/AppLink";
import { Icon } from "#/components/ui/Icon";
import { SectionHeading } from "#/components/ui/SectionHeading";
import { projects } from "#/data/projects";

export function SelectedWork() {
	return (
		<Section
			id="work"
			labelledBy="work-title"
			className="border-t border-border"
		>
			<Container>
				<SectionHeading
					id="work-title"
					eyebrow="01 — Selected work"
					title="Selected work"
					description="Recent projects where the interface had a specific job to do. Each one is documented as a short case study."
					action={
						<AppLink
							to="/projects"
							className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-text transition-colors hover:text-brand-bright"
						>
							All projects
							<Icon
								name="arrow-right"
								className="size-4 text-brand transition-transform duration-200 group-hover:translate-x-0.5"
							/>
						</AppLink>
					}
				/>

				<div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project, index) => (
						<ProjectCard
							key={project.slug}
							project={project}
							index={index + 1}
						/>
					))}
				</div>
			</Container>
		</Section>
	);
}
