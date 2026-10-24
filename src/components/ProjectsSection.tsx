import { LinkArrow } from '#/components/LinkArrow'
import { SectionHeader } from '#/components/SectionHeader'
import { ProjectCard } from '#/components/ProjectCard'
import { projects } from '#/data/portfolio'

export function ProjectsSection() {
	return (
		<section id="works" className="max-w-5xl mx-auto mb-20">
			<div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
				<SectionHeader label="projects" />
				<LinkArrow href="#works" className="ml-auto">
					View all
				</LinkArrow>
			</div>
			<div className="grid md:grid-cols-3 gap-6">
				{projects.map((p) => (
					<ProjectCard key={p.slug} {...p} />
				))}
			</div>
		</section>
	)
}
