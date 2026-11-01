import type { ExternalHref } from "#/lib/links";

export type ProjectCoverVariant = "nodes" | "shield" | "signal";

export type ProjectCaseStudy = {
	readonly overview: string;
	readonly role: string;
	readonly challenge: string;
	readonly outcome: string;
};

export type Project = {
	readonly slug: string;
	readonly title: string;
	readonly summary: string;
	readonly description: string;
	readonly tags: readonly string[];
	readonly year: string;
	readonly cover: ProjectCoverVariant;
	readonly liveUrl?: ExternalHref;
	readonly caseStudy: ProjectCaseStudy;
};

export const projects = [
	{
		slug: "soccer-predictor",
		title: "Soccer Predictor",
		summary: "Football prediction & analytics platform",
		description:
			"A prediction and analytics platform for the Big-5 European leagues, combining ESPN match data with model-driven probabilities across matches, leagues, statistics, signals and backtests.",
		tags: ["React", "TanStack Start", "TypeScript", "Tailwind CSS"],
		year: "2026",
		cover: "signal",
		liveUrl: "https://beamish-genie-f68f6e.netlify.app/",
		caseStudy: {
			overview:
				"A football analytics app that turns ESPN fixture and statistics data into readable match predictions for Europe's top five leagues.",
			role: "Design and front-end engineering for the data-heavy screens, responsive navigation and probability presentation.",
			challenge:
				"Making model output honest and understandable — probabilities are estimates, so the interface has to show confidence without implying certainty.",
			outcome:
				"A multi-page platform that brings match browsing, league pages, statistics, signals, model notes and backtesting into one consistent experience.",
		},
	},
	{
		slug: "owasp-zero",
		title: "OWASP Zero",
		summary: "Persian web security learning platform",
		description:
			"A Persian, right-to-left learning platform for the OWASP Zero web security curriculum, with structured tracks, hands-on labs, a glossary, quizzes and local progress tracking.",
		tags: ["React", "TanStack Start", "TypeScript", "Tailwind CSS"],
		year: "2026",
		cover: "shield",
		liveUrl: "https://fanciful-starship-650fdd.netlify.app/",
		caseStudy: {
			overview:
				"A Persian-language learning experience that guides beginners from networking and Linux basics through Python, JavaScript, SQL and web penetration-testing tools.",
			role: "Front-end design and implementation, including the RTL layout, roadmap, progress indicators and lab browsing.",
			challenge:
				"Presenting a dense technical curriculum in a clear reading order for Persian speakers while keeping progress, labs and terminology easy to move between.",
			outcome:
				"Six structured tracks with lesson content, practical labs, a glossary and local progress tracking in a focused, account-free interface.",
		},
	},
] as const satisfies readonly Project[];

export function getProject(slug: string): Project | undefined {
	return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string): Project {
	const index = projects.findIndex((project) => project.slug === slug);
	return projects[(index + 1) % projects.length] ?? projects[0];
}
