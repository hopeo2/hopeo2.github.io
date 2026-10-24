import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '#/components/Hero'
import { QuoteSection } from '#/components/QuoteSection'
import { ProjectsSection } from '#/components/ProjectsSection'
import { SkillsSection } from '#/components/SkillsSection'
import { AboutSection } from '#/components/AboutSection'
import { ContactSection } from '#/components/ContactSection'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
	return (
		<div className="min-h-screen relative overflow-hidden">
			<Hero />
			<main className="px-6 md:px-12 pb-20">
				<QuoteSection />
				<ProjectsSection />
				<SkillsSection />
				<AboutSection />
				<ContactSection />
			</main>
			<footer className="border-t border-current/20 pt-12 pb-8 px-6 md:px-12">
				<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
					<div className="flex items-center gap-2">
						<div className="w-6 h-6 rounded-sm border border-current/40 flex items-center justify-center text-xs font-bold">
							O
						</div>
						<span className="font-bold">Omid</span>
					</div>
					<p className="text-current/50 text-sm">Web designer & front-end developer</p>
					<div className="flex gap-4" />
				</div>
				<p className="text-center text-current/40 text-xs mt-8">
					© Copyright 2026. Made by Omid
				</p>
			</footer>
		</div>
	)
}

