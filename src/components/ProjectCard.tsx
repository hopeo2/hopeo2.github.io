import { Link } from '@tanstack/react-router'
import { Icon } from '#/components/Icon'

type ProjectCardProps = {
	title: string
	tags: string[]
	summary: string
	description: string
	year: string
	accent: string
	art: number
	href?: string
	repo?: string
}

export function ProjectCard({ title, tags, summary, description, year, accent, art, href, repo }: ProjectCardProps) {
	return (
		<article className="border border-current/30 rounded-sm p-4 md:p-6 transition-all hover:border-current/50">
			<div className="flex items-center justify-between mb-2">
				<span className="text-xs font-bold tracking-wider uppercase">{year}</span>
				<div className="w-2 h-2 rounded-full" style={{ backgroundColor: accent }} />
			</div>
			<div className="aspect-video bg-current/10 rounded-sm mb-3 flex items-center justify-center text-current/40">
				<Icon name="bracket" className="w-8 h-8" />
			</div>
			<h4 className="text-lg font-bold mb-1">{title}</h4>
			<p className="text-current/60 text-sm mb-3 leading-relaxed">{summary}</p>
			<div className="flex flex-wrap gap-1 mb-3">
				{tags.map((tag) => (
					<span key={tag} className="px-2 py-1 text-[10px] font-bold border border-current/30 rounded tracking-tighter uppercase">
						{tag}
					</span>
				))}
			</div>
			<p className="text-current/50 text-xs mb-4 leading-relaxed">{description}</p>
			<div className="flex items-center gap-2">
				{href ? (
					<Link
						to={href}
						className="text-xs font-bold underline underline-offset-2 hover:no-underline transition-colors"
					>
						Live <Icon name="arrow-right" className="w-3 h-3 inline" />
					</Link>
				) : null}
				{repo ? (
					<Link
						to={repo}
						className="text-xs font-bold underline underline-offset-2 hover:no-underline transition-colors ml-auto"
					>
						Repo <Icon name="arrow-right" className="w-3 h-3 inline" />
					</Link>
				) : null}
			</div>
		</article>
	)
}
