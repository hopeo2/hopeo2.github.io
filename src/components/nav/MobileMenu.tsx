import { SocialLinks } from "#/components/nav/SocialLinks";
import { AppLink } from "#/components/ui/AppLink";
import { Icon } from "#/components/ui/Icon";
import { navLinks } from "#/data/navigation";
import { emailHref, site } from "#/data/site";
import { cn } from "#/lib/cn";

type MobileMenuProps = {
	id: string;
	open: boolean;
	onClose: () => void;
};

export function MobileMenu({ id, open, onClose }: MobileMenuProps) {
	return (
		<div
			id={id}
			aria-hidden={!open}
			inert={!open}
			className={cn(
				"grid overflow-hidden bg-canvas/95 backdrop-blur-md transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden",
				open
					? "grid-rows-[1fr] border-t border-border opacity-100"
					: "grid-rows-[0fr] opacity-0",
			)}
		>
			<div className="min-h-0 overflow-hidden">
				<div className="px-5 py-5 sm:px-8">
					<nav aria-label="Mobile primary">
						<ul className="space-y-1">
							{navLinks.map((link, index) => (
								<li key={link.to}>
									<AppLink
										to={link.to}
										activeOptions={{ exact: link.exact ?? false }}
										onClick={onClose}
										className="flex min-h-12 items-center gap-3 rounded-control px-3 text-base text-text-muted transition-colors duration-200 hover:bg-surface/60 hover:text-text data-[status=active]:bg-brand-soft data-[status=active]:text-brand-bright"
									>
										<span
											aria-hidden="true"
											className="font-mono text-[10px] tracking-[0.1em] text-text-faint"
										>
											{String(index + 1).padStart(2, "0")}
										</span>
										{link.label}
										<Icon
											name="arrow-right"
											className="ml-auto size-4 text-brand"
										/>
									</AppLink>
								</li>
							))}
						</ul>
					</nav>

					<div className="mt-5 border-t border-border pt-5">
						<p className="eyebrow">Elsewhere</p>
						<SocialLinks className="mt-3" />
					</div>

					<AppLink
						href={emailHref}
						onClick={onClose}
						className="mt-5 flex min-h-12 items-center gap-3 rounded-control border border-border bg-surface/30 px-3 text-sm text-text-muted transition-colors hover:border-border-brand hover:text-text"
					>
						<Icon name="email" className="size-4 text-brand" />
						<span className="truncate">{site.email}</span>
					</AppLink>
				</div>
			</div>
		</div>
	);
}
