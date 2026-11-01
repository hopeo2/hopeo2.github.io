import { site } from "#/data/site";

export const about = {
	lead: "Hello, I'm Omid. I'm a self-taught front-end developer based in Kyiv.",
	paragraphs: [
		"I build responsive websites where technology meets creativity — turning ideas into modern, user-friendly experiences.",
		"My work sits between design and code: layout, typography, interaction and the small details that make an interface feel considered. I care about pages that are quick to understand and comfortable to use.",
	],
	facts: [
		{ label: "Based in", value: site.location },
		{ label: "Focus", value: "Front-end & interface" },
		{ label: "Status", value: site.availability },
	],
	timeline: [
		{
			title: "The foundation",
			body: "Self-taught in HTML, CSS and JavaScript, with a focus on understanding how the web actually works rather than memorising tools.",
		},
		{
			title: "Building for the web",
			body: "From a football prediction platform to a Persian web security learning experience, my projects have focused on practical interfaces that solve a specific problem.",
		},
		{
			title: "Open to collaboration",
			body: "Available for freelance work and interested in well-scoped ideas that need a thoughtful front end.",
		},
	],
	principles: [
		{
			title: "Clarity before decoration",
			body: "Every section should have a job. Hierarchy, spacing and copy do more work than effects.",
		},
		{
			title: "Accessible by default",
			body: "Semantic markup, keyboard support and readable contrast are part of the build, not a later pass.",
		},
		{
			title: "Motion with restraint",
			body: "Movement should explain a change or add warmth. It never gets in the way of the content.",
		},
	],
} as const;
