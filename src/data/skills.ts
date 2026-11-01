export type SkillGroup = {
	readonly category: string;
	readonly items: readonly string[];
};

export const skills = [
	{
		category: "Languages",
		items: ["TypeScript", "Lua", "Python", "JavaScript"],
	},
	{
		category: "Databases",
		items: ["SQLite", "PostgreSQL", "MongoDB"],
	},
	{
		category: "Other",
		items: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"],
	},
	{
		category: "Tools",
		items: [
			"VS Code",
			"Neovim",
			"Linux",
			"Figma",
			"XFCE",
			"Arch",
			"Git",
			"Font Awesome",
		],
	},
	{
		category: "Frameworks",
		items: ["React", "Vue", "Disnake", "Discord.js", "Flask", "Express.js"],
	},
] as const satisfies readonly SkillGroup[];
