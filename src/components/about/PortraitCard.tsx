import { cn } from "#/lib/cn";

type PortraitCardProps = {
	className?: string;
	compact?: boolean;
};

/**
 * A designed portrait stand-in: monogram, terminal chrome and a code strip.
 * Purely decorative, so the whole composition is hidden from assistive tech.
 */
export function PortraitCard({
	className,
	compact = false,
}: PortraitCardProps) {
	return (
		<div
			aria-hidden="true"
			className={cn("relative mx-auto w-full max-w-md", className)}
		>
			<div className="absolute -inset-3 rounded-feature border border-border/70 bg-brand-soft/30" />

			<div className="relative overflow-hidden rounded-feature border border-border bg-canvas-deep/90 shadow-soft">
				<div className="flex items-center justify-between border-b border-border px-4 py-3">
					<div className="flex gap-1.5">
						<span className="size-2 rounded-full bg-brand/80" />
						<span className="size-2 rounded-full bg-surface-raised" />
						<span className="size-2 rounded-full bg-surface-raised" />
					</div>
					<span className="font-mono text-[10px] tracking-[0.18em] text-text-faint">
						OMID.CONFIG
					</span>
					<span className="size-1.5 rounded-full bg-brand" />
				</div>

				<div
					className={cn(
						"relative overflow-hidden bg-grid",
						compact ? "aspect-square" : "aspect-[5/4]",
					)}
				>
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(199,120,221,0.18),transparent_62%)]" />
					<div className="absolute inset-x-6 top-5 flex justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
						<span>Kyiv, UA</span>
						<span className="text-brand">50.45N / 30.52E</span>
					</div>

					<div className="relative flex h-full items-center justify-center">
						<div className="relative flex size-40 items-center justify-center rounded-full border border-border-brand sm:size-48">
							<span className="absolute inset-5 rounded-full border border-border" />
							<span className="text-7xl font-extrabold tracking-[-0.06em] text-brand sm:text-8xl">
								O
							</span>
							<span className="absolute right-2 top-8 size-2 rounded-full bg-brand shadow-[0_0_0_5px_rgba(199,120,221,0.14)]" />
						</div>
					</div>

					<div className="absolute inset-x-6 bottom-4 flex items-center justify-between gap-3 border-t border-border pt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">
						<span>Web designer</span>
						<span className="text-text-faint">/</span>
						<span>Front-end</span>
					</div>
				</div>

				{!compact ? (
					<div className="border-t border-border px-4 py-4 font-mono text-[11px] leading-relaxed">
						<p className="text-text-muted">
							<span className="text-brand">const</span> focus = [
						</p>
						<p className="pl-4 text-text-muted">
							"interfaces", "accessibility", "detail"
						</p>
						<p className="text-text-muted">];</p>
					</div>
				) : null}
			</div>

			<div className="absolute -bottom-4 left-4 flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 shadow-lift sm:left-6">
				<span className="relative flex size-2">
					<span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60 motion-reduce:hidden" />
					<span className="relative inline-flex size-2 rounded-full bg-brand" />
				</span>
				<span className="text-[11px] text-text-muted">
					Currently building <span className="text-text">this portfolio</span>
				</span>
			</div>
		</div>
	);
}
