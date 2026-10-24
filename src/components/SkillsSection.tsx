import { SectionHeader } from '#/components/SectionHeader'
import { SkillCard } from '#/components/SkillCard'
import { skills } from '#/data/portfolio'

export function SkillsSection() {
	return (
		<section id="skills" className="max-w-5xl mx-auto mb-20">
			<SectionHeader label="skills" />
			<div className="grid md:grid-cols-3 gap-6 mt-6">
				{skills.map((s) => (
					<SkillCard key={s.category} {...s} />
				))}
			</div>
		</section>
	)
}
