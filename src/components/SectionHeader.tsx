import { Icon } from '#/components/Icon'

type SectionHeaderProps = {
	label: string
	accentColor?: string
	className?: string
}

export function SectionHeader({ label, accentColor = '#C778DD', className }: SectionHeaderProps) {
	return (
		<div className="flex items-center gap-2 mb-1" style={{ borderColor: accentColor }}>
			<span style={{ color: accentColor }}>#</span>
			<h3 className="text-lg md:text-xl font-semibold tracking-tight">{label}</h3>
			<div className="flex-1 h-[1px] bg-current opacity-30 mt-0.5" />
		</div>
	)
}
