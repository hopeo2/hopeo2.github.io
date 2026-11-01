import { AppLink } from "#/components/ui/AppLink";
import { navLinks } from "#/data/navigation";

export function DesktopNav() {
	return (
		<nav aria-label="Primary" className="hidden md:block">
			<ul className="flex items-center gap-0.5">
				{navLinks.map((link, index) => (
					<li key={link.to}>
						<AppLink
							to={link.to}
							activeOptions={{ exact: link.exact ?? false }}
							className="group relative inline-flex min-h-11 items-center gap-1.5 rounded-control px-2.5 text-sm text-text-muted transition-colors duration-200 hover:bg-surface/60 hover:text-text data-[status=active]:bg-brand-soft data-[status=active]:text-brand-bright lg:px-3"
						>
							<span
								aria-hidden="true"
								className="font-mono text-[9px] tracking-[0.08em] text-text-faint transition-colors group-data-[status=active]:text-brand-bright"
							>
								{String(index + 1).padStart(2, "0")}
							</span>
							{link.label}
							<span
								aria-hidden="true"
								className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-brand transition-transform duration-200 group-hover:scale-x-100 group-data-[status=active]:scale-x-100"
							/>
						</AppLink>
					</li>
				))}
			</ul>
		</nav>
	);
}
