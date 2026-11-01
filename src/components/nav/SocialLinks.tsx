import { AppLink } from "#/components/ui/AppLink";
import { Icon } from "#/components/ui/Icon";
import { site, socialLinks } from "#/data/site";
import { cn } from "#/lib/cn";
import { getLinkKind } from "#/lib/links";

type SocialLinksProps = {
	variant?: "icons" | "list";
	className?: string;
};

export function SocialLinks({
	variant = "icons",
	className,
}: SocialLinksProps) {
	if (variant === "list") {
		return (
			<ul className={cn("grid gap-2 sm:grid-cols-2", className)}>
				{socialLinks.map((social) => {
					const isExternal = getLinkKind(social.href) === "external";

					return (
						<li key={social.label}>
							<AppLink
								href={social.href}
								className="group flex min-h-14 items-center justify-between gap-4 rounded-control border border-border bg-surface/30 px-4 py-3 transition-colors duration-200 hover:border-border-brand hover:bg-surface/60"
							>
								<span className="flex min-w-0 items-center gap-3">
									<span className="flex size-8 shrink-0 items-center justify-center rounded-control border border-border bg-canvas-deep/60 text-text-muted transition-colors group-hover:border-border-brand group-hover:text-brand">
										<Icon name={social.icon} className="size-4" />
									</span>
									<span className="truncate text-sm text-text">
										{social.label}
									</span>
								</span>
								<span className="flex min-w-0 items-center gap-2 text-xs text-text-muted">
									<span className="hidden truncate sm:inline">
										{social.handle}
									</span>
									<Icon
										name={isExternal ? "arrow-up-right" : "arrow-right"}
										className="size-4 shrink-0 text-brand"
									/>
								</span>
							</AppLink>
						</li>
					);
				})}
			</ul>
		);
	}

	return (
		<ul className={cn("flex flex-wrap items-center gap-2", className)}>
			{socialLinks.map((social) => {
				const isExternal = getLinkKind(social.href) === "external";
				const label = isExternal
					? `${social.label} (opens in a new tab)`
					: `Email ${site.name}`;

				return (
					<li key={social.label}>
						<AppLink
							href={social.href}
							aria-label={label}
							externalHint={false}
							className="inline-flex size-11 items-center justify-center rounded-control border border-border bg-surface/30 text-text-muted transition-[transform,background-color,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-border-brand hover:bg-brand-soft hover:text-brand motion-reduce:hover:translate-y-0"
						>
							<Icon name={social.icon} className="size-[18px]" />
						</AppLink>
					</li>
				);
			})}
		</ul>
	);
}
