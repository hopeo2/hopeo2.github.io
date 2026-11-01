import { createFileRoute, notFound } from "@tanstack/react-router";
import { Container } from "#/components/layout/Container";
import { ProjectCover } from "#/components/projects/ProjectCover";
import { AppLink } from "#/components/ui/AppLink";
import { Badge } from "#/components/ui/Badge";
import { ButtonLink } from "#/components/ui/ButtonLink";
import { Icon } from "#/components/ui/Icon";
import { getNextProject, getProject } from "#/data/projects";
import { routeHead } from "#/lib/seo";

export const Route = createFileRoute("/projects/$slug")({
	loader: ({ params }) => {
		const project = getProject(params.slug);
		if (!project) throw notFound();

		return {
			project,
			next: getNextProject(project.slug),
		};
	},
	head: ({ loaderData }) => {
		if (!loaderData) {
			return routeHead({
				title: "Projects",
				description:
					"A curated archive of front-end projects, documented as short case studies.",
				path: "/projects",
			});
		}

		return routeHead({
			title: `${loaderData.project.title} — Case study`,
			description: loaderData.project.description,
			path: `/projects/${loaderData.project.slug}`,
			type: "article",
		});
	},
	component: ProjectDetailPage,
});

function ProjectDetailPage() {
	const { project, next } = Route.useLoaderData();

	return (
		<article>
			<section className="border-b border-border">
				<Container className="py-10 lg:py-16">
					<AppLink
						to="/projects"
						className="group inline-flex min-h-11 items-center gap-2 text-sm text-text-muted transition-colors hover:text-brand-bright"
					>
						<Icon
							name="arrow-left"
							className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5"
						/>
						All projects
					</AppLink>

					<div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
						<div>
							<p className="eyebrow flex items-center gap-2">
								<span aria-hidden="true" className="text-brand">
									#
								</span>
								Case study / {project.year}
							</p>
							<h1 className="text-display mt-4 max-w-3xl text-text">
								{project.title}
							</h1>
							<p className="prose-copy mt-5 text-base sm:text-lg">
								{project.description}
							</p>
						</div>

						<ul
							aria-label="Technologies used"
							className="flex flex-wrap gap-2 lg:justify-end"
						>
							{project.tags.map((tag) => (
								<li key={tag}>
									<Badge>{tag}</Badge>
								</li>
							))}
						</ul>
					</div>
				</Container>
			</section>

			<Container className="py-12 lg:py-16">
				<ProjectCover
					project={project}
					wide
					className="rounded-feature border"
				/>

				<div className="mt-12 grid gap-12 lg:grid-cols-[1fr_16rem]">
					<div className="space-y-10">
						<section aria-labelledby="overview-title">
							<h2 id="overview-title" className="text-card text-text">
								Overview
							</h2>
							<p className="prose-copy mt-3">{project.caseStudy.overview}</p>
						</section>

						<section aria-labelledby="challenge-title">
							<h2 id="challenge-title" className="text-card text-text">
								Challenge
							</h2>
							<p className="prose-copy mt-3">{project.caseStudy.challenge}</p>
						</section>

						<section aria-labelledby="outcome-title">
							<h2 id="outcome-title" className="text-card text-text">
								Outcome
							</h2>
							<p className="prose-copy mt-3">{project.caseStudy.outcome}</p>
						</section>
					</div>

					<aside
						aria-labelledby="details-title"
						className="h-fit rounded-feature border border-border bg-surface/30 p-6 lg:sticky lg:top-28"
					>
						<h2 id="details-title" className="eyebrow">
							Project details
						</h2>
						{project.liveUrl ? (
							<ButtonLink
								href={project.liveUrl}
								size="sm"
								icon="arrow-up-right"
								className="mt-5 w-full"
							>
								Visit live site
							</ButtonLink>
						) : null}
						<dl className="mt-5 space-y-5">
							<div>
								<dt className="eyebrow">Year</dt>
								<dd className="mt-1.5 text-sm text-text">{project.year}</dd>
							</div>
							<div>
								<dt className="eyebrow">Role</dt>
								<dd className="mt-1.5 text-sm leading-relaxed text-text-muted">
									{project.caseStudy.role}
								</dd>
							</div>
							<div>
								<dt className="eyebrow">Stack</dt>
								<dd className="mt-2">
									<ul className="flex flex-wrap gap-1.5">
										{project.tags.map((tag) => (
											<li key={tag}>
												<Badge>{tag}</Badge>
											</li>
										))}
									</ul>
								</dd>
							</div>
						</dl>
					</aside>
				</div>

				<nav
					aria-labelledby="next-project-title"
					className="mt-16 border-t border-border pt-8"
				>
					<h2 id="next-project-title" className="eyebrow">
						Next project
					</h2>
					<AppLink
						to="/projects/$slug"
						params={{ slug: next.slug }}
						className="group mt-3 flex items-center justify-between gap-6 rounded-card border border-border bg-surface/30 p-5 transition-colors duration-200 hover:border-border-brand hover:bg-surface/60"
					>
						<span className="min-w-0">
							<span className="block text-lg font-semibold text-text">
								{next.title}
							</span>
							<span className="mt-1 block text-sm text-text-muted">
								{next.summary}
							</span>
						</span>
						<Icon
							name="arrow-right"
							className="size-5 shrink-0 text-brand transition-transform duration-200 group-hover:translate-x-0.5"
						/>
					</AppLink>
				</nav>
			</Container>
		</article>
	);
}
