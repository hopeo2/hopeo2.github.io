import { Link } from '@tanstack/react-router'
import { Icon } from '#/components/Icon'

const NAV_LINKS = [
	{ label: 'Home', to: '/' },
	{ label: 'Works', to: '/projects' },
	{ label: 'About Me', to: '/about' },
	{ label: 'Contacts', to: '/contact' },
]

export function Nav() {
	return (
		<nav className="flex items-center justify-between px-6 py-6 md:px-12 md:py-8 border-b border-current/20 sticky top-0 z-20 bg-current/80 backdrop-blur">
			<Link to="/" className="flex items-center gap-2">
				<div className="w-8 h-8 rounded-sm border border-current/40 flex items-center justify-center text-xs font-bold">
					O
				</div>
				<span className="font-bold tracking-tight text-lg">Omid</span>
			</Link>

			<div className="hidden md:flex items-center gap-6">
				{NAV_LINKS.map((link) => (
					<Link
						key={link.label}
						to={link.to}
						className="text-sm font-medium transition-colors hover:text-current/80"
						activeClassName="text-current"
					>
						<Icon name="bracket" className="w-3 h-3 inline mr-1 text-current/40" />
						#{link.label.toLowerCase()}
					</Link>
				))}
			</div>

			<div className="flex items-center gap-3">
				{NAV_LINKS.map((link) => (
					<a
						key={link.label}
						href={link.to}
						className="text-current/60 hover:text-current transition-colors"
						aria-label={link.label}
					>
						<Icon name="bracket" className="w-4 h-4" />
					</a>
				))}
			</div>
		</nav>
	)
}
