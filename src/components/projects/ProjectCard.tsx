import { ProjectCover } from "#/components/projects/ProjectCover";
import { AppLink } from "#/components/ui/AppLink";
import { Badge } from "#/components/ui/Badge";
import { Icon } from "#/components/ui/Icon";
import type { Project } from "#/data/projects";

type ProjectCardProps = {
	project: Project;
	index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
	return (
		<article className="card-focus group relative flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface/40 transition-[transform,border-color,background-color] duration-200 hover:border-border-brand hover:bg-surface/60 motion-safe:hover:-translate-y-0.5">
			<ProjectCover project={project} />

			<div className="flex flex-1 flex-col p-5">
				<div className="flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">
					<span>{project.year}</span>
					<span className="text-text-muted">
						{String(index).padStart(2, "0")} / Case study
					</span>
				</div>

				<h3 className="text-card mt-3 text-text">
					<AppLink
						to="/projects/$slug"
						params={{ slug: project.slug }}
						aria-label={`${project.title} — view case study`}
						className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
					>
						{project.title}
					</AppLink>
				</h3>

				<p className="mt-2 text-sm leading-relaxed text-text-muted text-pretty">
					{project.summary}
				</p>

				<ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-1.5">
					{project.tags.map((tag) => (
						<li key={tag}>
							<Badge>{tag}</Badge>
						</li>
					))}
				</ul>

				<div className="mt-auto flex items-center justify-between gap-3 pt-5 text-xs font-semibold">
					<span className="flex items-center gap-2 text-brand-bright">
						<span>View case study</span>
						<Icon
							name="arrow-right"
							className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
						/>
					</span>
					{project.liveUrl ? (
						<AppLink
							href={project.liveUrl}
							className="relative z-10 inline-flex min-h-11 items-center gap-1.5 text-text-muted transition-colors hover:text-brand-bright focus-visible:outline-brand"
						>
							Live site
							<Icon name="arrow-up-right" className="size-3.5" />
						</AppLink>
					) : null}
				</div>
			</div>
		</article>
	);
}
