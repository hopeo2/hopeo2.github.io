import { AppLink } from "#/components/ui/AppLink";
import { cn } from "#/lib/cn";

type BrandProps = {
	className?: string;
};

export function Brand({ className }: BrandProps) {
	return (
		<AppLink
			to="/"
			aria-label="Omid — home"
			className={cn(
				"group inline-flex min-h-11 items-center gap-3 rounded-control",
				className,
			)}
		>
			<span className="relative flex size-9 items-center justify-center rounded-control border border-border-brand bg-brand-soft text-sm font-bold text-brand-bright transition-colors duration-200 group-hover:border-brand group-hover:bg-brand group-hover:text-canvas-deep">
				O
				<span className="absolute -right-0.5 -top-0.5 size-1.5 rounded-full bg-brand ring-2 ring-canvas" />
			</span>
			<span className="flex flex-col leading-none">
				<span className="text-base font-bold tracking-[-0.03em] text-text">
					Omid
				</span>
				<span className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-text-muted">
					Front-end dev
				</span>
			</span>
		</AppLink>
	);
}
