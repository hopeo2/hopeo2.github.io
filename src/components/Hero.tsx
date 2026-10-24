import { LinkArrow } from '#/components/LinkArrow'
import { Icon } from '#/components/Icon'
import { site } from '#/data/portfolio'

export function Hero() {
	return (
		<header className="relative pt-20 md:pt-32 pb-12 px-6 md:px-12">
			<div className="max-w-5xl mx-auto">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="md:pr-8">
						<h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
							{site.name} is a <span className="text-current/80">web designer</span> and <br />
							<span className="text-current/80">front-end developer</span>
						</h1>
						<p className="text-current/60 text-lg md:text-xl mb-6 leading-relaxed">
							He crafts responsive websites where technologies meet creativity
						</p>
						<LinkArrow to="/contact">Contact</LinkArrow>
					</div>
					<div className="relative">
						<div className="aspect-square bg-current/10 rounded-sm border border-current/20 flex items-center justify-center overflow-hidden relative">
							<div className="relative w-3/4 h-3/4 bg-current/5 border border-current/20 rounded-sm flex items-center justify-center">
								<div className="w-24 h-24 rounded-full border-4 border-current/20 flex items-center justify-center">
									<span className="text-current/40 text-2xl font-bold">{site.name[0]}</span>
								</div>
							</div>
							<div className="absolute -bottom-3 -left-3 bg-current border border-current/20 rounded-sm p-3 flex items-center gap-2 animate-pulse">
								<div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C778DD' }} />
								<p className="text-xs font-bold">Currently working on <span className="underline">Portfolio</span></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
