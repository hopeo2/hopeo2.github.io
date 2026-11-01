import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { projects } from "./src/data/projects.ts";

const staticPages = [
	{ path: "/" },
	{ path: "/projects" },
	{ path: "/about" },
	{ path: "/contact" },
	...projects.map((project) => ({ path: `/projects/${project.slug}` })),
];

const config = defineConfig({
	resolve: { tsconfigPaths: true },
	plugins: [
		devtools(),
		tailwindcss(),
		tanstackStart({
			// The site is deployed as a static bundle on GitHub Pages. Every page
			// is listed explicitly so the sitemap only contains canonical routes.
			pages: staticPages,
			prerender: {
				enabled: true,
				crawlLinks: false,
				autoSubfolderIndex: true,
				autoStaticPathsDiscovery: false,
				failOnError: true,
			},
			sitemap: {
				enabled: true,
				host: "https://hopeo2.github.io",
			},
			spa: {
				enabled: false,
			},
		}),
		viteReact(),
	],
});

export default config;
