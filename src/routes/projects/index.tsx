import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { SectionHeader } from '#/components/SectionHeader'
import { ProjectCard } from '#/components/ProjectCard'
import { projects } from '#/data/portfolio'

export const Route = createFileRoute('/projects/')({ component: ProjectsPage })

function ProjectsPage() {
	return (
		<div className="min-h-screen px-6 md:px-12 pt-20 pb-20">
			<div className="max-w-5xl mx-auto">
				<div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
					<SectionHeader label="projects" />
					<Link to="/" className="text-sm font-bold underline underline-offset-2 hover:no-underline transition-colors">
						&larr; Back to home
					</Link>
				</div>
				<div className="grid md:grid-cols-3 gap-6">
					{projects.map((p) => (
						<ProjectCard key={p.slug} {...p} />
					))}
				</div>
			</div>
		</div>
	)
}
