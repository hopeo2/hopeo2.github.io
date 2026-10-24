import { Link } from '@tanstack/react-router'
import { Icon } from '#/components/Icon'

type LinkArrowProps = {
	children: React.ReactNode
	to?: string
href?: string
	reverse?: boolean
	className?: string
	target?: string
}

export function LinkArrow({ children, to, href, reverse = false, className, target }: LinkArrowProps) {
	const arrowLeft = <>
		<Icon name="arrow-left" className="mr-1" />
		<span>~&lt;</span>
	</>
	const arrowRight = <>
		<span>&gt;&gt;~</span>
		<Icon name="arrow-right" className="ml-1" />
	</>
	const arrow = reverse ? arrowLeft : arrowRight

	return to ? (
<Link to={to} className={`inline-flex items-center gap-1 ${className}`}>
			{children} {arrow}
		</Link>
	) : (
<a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={`inline-flex items-center gap-1 ${className}`}>
			{children} {arrow}
		</a>
	)
}
