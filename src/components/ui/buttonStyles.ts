import { cn } from "#/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "md" | "sm";

const VARIANTS: Record<ButtonVariant, string> = {
	primary:
		"bg-brand text-canvas-deep hover:bg-brand-bright focus-visible:outline-text",
	secondary:
		"border border-border bg-surface/40 text-text hover:border-border-brand hover:bg-surface focus-visible:outline-brand",
	ghost:
		"border border-transparent text-text-muted hover:bg-surface/50 hover:text-text focus-visible:outline-brand",
};

const SIZES: Record<ButtonSize, string> = {
	md: "min-h-11 px-5 text-sm",
	sm: "min-h-11 px-3.5 text-xs",
};

type ButtonStyleOptions = {
	readonly variant?: ButtonVariant;
	readonly size?: ButtonSize;
	readonly className?: string;
};

/**
 * Shared control styling so links and real buttons stay visually identical.
 * `disabled:` only applies to `<button>`, which is why the submit control can
 * reuse the same classes as `ButtonLink`.
 */
export function buttonStyles({
	variant = "primary",
	size = "md",
	className,
}: ButtonStyleOptions = {}): string {
	return cn(
		"inline-flex items-center justify-center gap-2.5 rounded-control font-semibold transition-[transform,background-color,border-color,color] duration-200 ease-out motion-safe:hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60",
		VARIANTS[variant],
		SIZES[size],
		className,
	);
}
