import { SectionHeader } from '#/components/SectionHeader'
import { Icon } from '#/components/Icon'
import { site, contact } from '#/data/portfolio'

export function ContactSection() {
	return (
		<section id="contact" className="max-w-5xl mx-auto mb-20">
			<SectionHeader label="contact" />
			<div className="border border-current/30 rounded-sm p-6 md:p-10 mt-6">
				<div className="flex flex-col md:flex-row gap-6">
					<div className="flex-1">
						<p className="text-current/60 text-lg leading-relaxed mb-6">
							{contact.intro}
						</p>
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<Icon name="email" className="w-5 h-5" />
								<div>
									<p className="font-bold">Message me here</p>
									<a href={`mailto:${site.email}`} className="text-current/80 underline underline-offset-2 hover:no-underline">
										{site.email}
									</a>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<Icon name="github" className="w-5 h-5" />
								<div>
									<p className="font-bold">GitHub</p>
									<a href={site.social[0].href} target="_blank" rel="noopener noreferrer" className="text-current/80 underline underline-offset-2 hover:no-underline">
										github.com/Iamomid
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="flex-1 border-l border-current/30 pl-8 md:pl-0 md:pt-8 md:border-l-0 md:border-t md:pt-0">
						<div className="flex flex-wrap gap-4">
							{site.social.map((s) => (
								<a
									key={s.label}
									href={s.href}
									target="_blank"
									rel="noopener noreferrer"
									className="w-10 h-10 rounded-sm border border-current/30 flex items-center justify-center text-current/60 hover:text-current hover:border-current/50 transition-all"
									aria-label={s.label}
								>
									<Icon name={s.icon as any} className="w-5 h-5" />
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
