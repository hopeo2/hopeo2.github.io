import { createFileRoute } from '@tanstack/react-router'
import { SectionHeader } from '#/components/SectionHeader'
import { LinkArrow } from '#/components/LinkArrow'
import { site, contact } from '#/data/portfolio'

export const Route = createFileRoute('/about/')({ component: AboutPage })

function AboutPage() {
	return (
		<div className="min-h-screen px-6 md:px-12 pt-20 pb-20">
			<div className="max-w-5xl mx-auto">
				<div className="mb-12">
					<SectionHeader label="about-me" />
					<p className="text-current/60 text-lg leading-relaxed mt-6">
						Hello, I&apos;m {site.name}! <br /><br />
						{site.bio}
					</p>
				</div>
				<div className="border border-current/30 rounded-sm p-6 md:p-10">
					<div className="flex flex-col md:flex-row gap-12 items-center">
						<div className="flex-1">
							<h3 className="text-xl font-bold mb-4">Experience & Skills</h3>
							<p className="text-current/60 leading-relaxed mb-6">
								Self-taught front-end developer passionate about building responsive websites
								where technologies meet creativity. I enjoy turning ideas into modern,
								user-friendly web experiences and helping clients establish their presence online.
							</p>
							<LinkArrow href="/#contact">Get in touch -&gt;</LinkArrow>
						</div>
						<div className="flex-1 max-w-md">
							<div className="aspect-square bg-current/10 rounded-sm border border-current/20 flex items-center justify-center relative overflow-hidden">
								<div className="w-full h-full bg-current/5 border border-current/20 rounded-sm flex items-center justify-center">
									<span className="text-current/40 text-4xl font-bold">{site.name[0]}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
