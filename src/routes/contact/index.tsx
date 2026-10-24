import { createFileRoute } from '@tanstack/react-router'
import { SectionHeader } from '#/components/SectionHeader'
import { Icon } from '#/components/Icon'
import { site, contact } from '#/data/portfolio'

export const Route = createFileRoute('/contact/')({ component: ContactPage })

function ContactPage() {
	return (
		<div className="min-h-screen px-6 md:px-12 pt-20 pb-20">
			<div className="max-w-5xl mx-auto">
				<SectionHeader label="contact" />
				<div className="border border-current/30 rounded-sm p-6 md:p-10 mt-6">
					<p className="text-current/60 text-lg leading-relaxed mb-8">
						{contact.intro}
					</p>
					<div className="grid md:grid-cols-2 gap-8">
						<div>
							<h3 className="text-lg font-bold mb-6">Message me here</h3>
							<div className="space-y-6">
								<div className="flex items-center gap-4">
									<Icon name="email" className="w-6 h-6" />
									<div>
										<p className="font-bold">Email</p>
										<a href={`mailto:${site.email}`} className="text-current/80 underline underline-offset-2 hover:no-underline block">
											{site.email}
										</a>
									</div>
								</div>
								<div className="flex items-center gap-4">
									<Icon name="github" className="w-6 h-6" />
									<div>
										<p className="font-bold">GitHub</p>
										<a href={site.social[0].href} target="_blank" rel="noopener noreferrer" className="text-current/80 underline underline-offset-2 hover:no-underline block">
											github.com/Iamomid
										</a>
									</div>
								</div>
							</div>
						</div>
						<div>
							<h3 className="text-lg font-bold mb-6">Follow</h3>
							<div className="flex gap-4">
								{site.social.map((s) => (
									<a
										key={s.label}
										href={s.href}
										target="_blank"
										rel="noopener noreferrer"
										className="w-12 h-12 rounded-sm border border-current/30 flex items-center justify-center text-current/60 hover:text-current hover:border-current/50 transition-all"
										aria-label={s.label}
									>
										<Icon name={s.icon as any} className="w-6 h-6" />
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
