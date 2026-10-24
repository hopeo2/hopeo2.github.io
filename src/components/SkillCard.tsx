type SkillCardProps = {
	category: string
	items: string[]
}

export function SkillCard({ category, items }: SkillCardProps) {
	return (
		<article className="border border-current/30 rounded-sm p-4 transition-all hover:border-current/50">
			<h6 className="text-sm font-bold mb-2 tracking-tight">{category}</h6>
			<div className="h-[1px] bg-current/30 mb-2" />
			<p className="text-current/60 text-sm leading-relaxed">{items.join(' ')}</p>
		</article>
	)
}
