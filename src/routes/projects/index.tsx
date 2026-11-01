import { createFileRoute } from "@tanstack/react-router";
import { ProjectsArchive } from "#/components/projects/ProjectsArchive";
import { Badge } from "#/components/ui/Badge";
import { PageIntro } from "#/components/ui/PageIntro";
import { projects } from "#/data/projects";
import { routeHead } from "#/lib/seo";

export const Route = createFileRoute("/projects/")({
	head: () =>
		routeHead({
			title: "Projects",
			description:
				"A curated archive of front-end projects, from a football analytics platform to a Persian web security learning experience. Each project is documented as a case study.",
			path: "/projects",
		}),
	component: ProjectsPage,
});

function ProjectsPage() {
	return (
		<>
			<PageIntro
				eyebrow="Index / Projects"
				title="Selected work"
				description="A curated archive of front-end projects. Each one is documented with the problem it solved, the role I played and the stack behind it."
				meta={
					<div className="flex flex-wrap items-center gap-2">
						<Badge tone="brand">{projects.length} projects</Badge>
						<Badge>Case studies</Badge>
						<Badge>2026</Badge>
					</div>
				}
			/>
			<ProjectsArchive />
		</>
	);
}
