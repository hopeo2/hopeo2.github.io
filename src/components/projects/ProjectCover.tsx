import type { Project, ProjectCoverVariant } from "#/data/projects";
import { cn } from "#/lib/cn";

type ProjectCoverProps = {
	project: Project;
	className?: string;
	wide?: boolean;
};

const TREATMENTS: Record<ProjectCoverVariant, string> = {
	nodes:
		"bg-[radial-gradient(circle_at_30%_20%,rgba(199,120,221,0.26),transparent_58%)]",
	shield:
		"bg-[linear-gradient(125deg,rgba(199,120,221,0.2),transparent_55%,rgba(255,255,255,0.06))]",
	signal:
		"bg-[radial-gradient(circle_at_72%_78%,rgba(199,120,221,0.22),transparent_58%)]",
};

const BARS = ["h-5", "h-8", "h-12", "h-7", "h-10"];

function CoverArt({ variant }: { variant: ProjectCoverVariant }) {
	if (variant === "nodes") {
		return (
			<>
				<div className="absolute -right-12 -top-12 size-48 rounded-full border border-border-brand" />
				<div className="absolute -right-4 -top-4 size-32 rounded-full border border-border" />
				<div className="absolute right-10 top-12 size-2 rounded-full bg-brand" />
				<div className="absolute right-20 top-24 size-1.5 rounded-full bg-brand/60" />
			</>
		);
	}

	if (variant === "shield") {
		return (
			<>
				<div className="absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[1.5rem] border border-border-brand" />
				<div className="absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[1rem] border border-border" />
				<div className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand" />
			</>
		);
	}

	return (
		<div className="absolute bottom-4 right-6 flex items-end gap-1.5">
			{BARS.map((bar) => (
				<span key={bar} className={cn("w-2 rounded-t-sm bg-brand/30", bar)} />
			))}
		</div>
	);
}

export function ProjectCover({
	project,
	className,
	wide = false,
}: ProjectCoverProps) {
	const initials = project.title
		.split(" ")
		.map((part) => part.charAt(0))
		.join("")
		.slice(0, 2);

	return (
		<div
			aria-hidden="true"
			className={cn(
				"relative overflow-hidden border-b border-border bg-canvas-deep",
				wide ? "aspect-[21/9]" : "aspect-[16/10]",
				className,
			)}
		>
			<div className={cn("absolute inset-0", TREATMENTS[project.cover])} />
			<div className="absolute inset-0 bg-grid opacity-40" />
			<div className="absolute inset-0 bg-hatch opacity-25" />
			<CoverArt variant={project.cover} />

			<div className="relative flex h-full flex-col justify-between p-4 sm:p-5">
				<div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
					<span>{project.year}</span>
					<span className="text-brand">{project.tags[0]}</span>
				</div>
				<div className="flex items-end justify-between gap-4">
					<span className="text-4xl font-extrabold tracking-[-0.06em] text-text/90 sm:text-5xl">
						{initials}
					</span>
					<span className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-faint">
						Case study
					</span>
				</div>
			</div>
		</div>
	);
}
