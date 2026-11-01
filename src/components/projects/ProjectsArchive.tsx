import { useState } from "react";
import { Container } from "#/components/layout/Container";
import { Section } from "#/components/layout/Section";
import { ProjectCard } from "#/components/projects/ProjectCard";
import { projects } from "#/data/projects";
import { cn } from "#/lib/cn";

const ALL_TAGS: string[] = Array.from(
	new Set(projects.flatMap((project): string[] => [...project.tags])),
);
ALL_TAGS.sort((a, b) => a.localeCompare(b));

export function ProjectsArchive() {
	const [activeTag, setActiveTag] = useState<string | null>(null);
	const filtered = activeTag
		? projects.filter((project) =>
				project.tags.some((tag) => tag === activeTag),
			)
		: projects;

	return (
		<Section>
			<Container>
				<div className="flex flex-col gap-5 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
					<p className="text-sm text-text-muted">
						Showing{" "}
						<span className="font-semibold text-text">{filtered.length}</span>{" "}
						of {projects.length} projects
					</p>

					<fieldset className="min-w-0">
						<legend className="sr-only">Filter projects by technology</legend>
						<div className="flex flex-wrap gap-2">
							<FilterButton
								active={activeTag === null}
								onClick={() => setActiveTag(null)}
							>
								All
							</FilterButton>
							{ALL_TAGS.map((tag) => (
								<FilterButton
									key={tag}
									active={activeTag === tag}
									onClick={() => setActiveTag(tag)}
								>
									{tag}
								</FilterButton>
							))}
						</div>
					</fieldset>
				</div>

				<p aria-live="polite" className="sr-only">
					Showing {filtered.length} of {projects.length} projects
					{activeTag ? `, filtered by ${activeTag}` : ""}.
				</p>

				{filtered.length > 0 ? (
					<>
						<h2 className="sr-only">Project archive</h2>
						<div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
							{filtered.map((project) => (
								<ProjectCard
									key={project.slug}
									project={project}
									index={
										projects.findIndex((item) => item.slug === project.slug) + 1
									}
								/>
							))}
						</div>
					</>
				) : (
					<div className="mt-8 rounded-feature border border-border bg-surface/30 p-8 text-center">
						<h2 className="text-card text-text">No projects match that tag.</h2>
						<p className="mt-2 text-sm text-text-muted">
							Clear the filter to see the full archive.
						</p>
					</div>
				)}
			</Container>
		</Section>
	);
}

type FilterButtonProps = {
	active: boolean;
	onClick: () => void;
	children: string;
};

function FilterButton({ active, onClick, children }: FilterButtonProps) {
	return (
		<button
			type="button"
			aria-pressed={active}
			onClick={onClick}
			className={cn(
				"inline-flex min-h-11 items-center rounded-full border px-3.5 text-xs font-medium transition-colors duration-200",
				active
					? "border-brand bg-brand text-canvas-deep focus-visible:outline-text"
					: "border-border bg-surface/30 text-text-muted hover:border-border-brand hover:text-text focus-visible:outline-brand",
			)}
		>
			{children}
		</button>
	);
}
