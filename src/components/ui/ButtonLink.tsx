import type { ReactNode } from "react";
import { cn } from "#/lib/cn";
import { AppLink, type AppLinkProps } from "./AppLink";
import { Icon, type IconName } from "./Icon";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "sm";

export type ButtonLinkProps = AppLinkProps & {
	readonly variant?: ButtonVariant;
	readonly size?: ButtonSize;
	readonly icon?: IconName;
	readonly iconPosition?: "left" | "right";
	readonly children: ReactNode;
};

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

export function ButtonLink({
	variant = "primary",
	size = "md",
	icon,
	iconPosition = "right",
	className,
	children,
	...linkProps
}: ButtonLinkProps) {
	const iconNode = icon ? <Icon name={icon} className="size-4" /> : null;

	return (
		<AppLink
			{...linkProps}
			className={cn(
				"inline-flex items-center justify-center gap-2.5 rounded-control font-semibold transition-[transform,background-color,border-color,color] duration-200 ease-out motion-safe:hover:-translate-y-0.5",
				VARIANTS[variant],
				SIZES[size],
				className,
			)}
		>
			{icon && iconPosition === "left" ? iconNode : null}
			<span>{children}</span>
			{icon && iconPosition === "right" ? iconNode : null}
		</AppLink>
	);
}
