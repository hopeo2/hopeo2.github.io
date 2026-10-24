import { LinkArrow } from '#/components/LinkArrow'
import { SectionHeader } from '#/components/SectionHeader'
import { site } from '#/data/portfolio'

export function AboutSection() {
	return (
		<section id="about-me" className="max-w-5xl mx-auto mb-20 flex flex-col md:flex-row gap-12 items-center">
			<div className="flex-1">
				<SectionHeader label="about-me" />
				<p className="text-current/60 text-lg leading-relaxed mt-6 mb-6">
					Hello, I&apos;m {site.name}! <br /><br />
					{site.bio}
				</p>
				<LinkArrow href="#contact">Read more -&gt;</LinkArrow>
			</div>
			<div className="flex-1 max-w-md">
				<div className="aspect-square bg-current/10 rounded-sm border border-current/20 flex items-center justify-center relative overflow-hidden">
					<div className="w-full h-full bg-current/5 border border-current/20 rounded-sm flex items-center justify-center">
						<span className="text-current/40 text-4xl font-bold">{site.name[0]}</span>
					</div>
				</div>
			</div>
		</section>
	)
}
