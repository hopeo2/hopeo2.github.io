import type { ReactNode } from "react";
import { cn } from "#/lib/cn";

type BadgeProps = {
	children: ReactNode;
	tone?: "neutral" | "brand" | "solid";
	className?: string;
};

const TONES = {
	neutral: "border border-border bg-surface/40 text-text-muted",
	brand: "border border-border-brand bg-brand-soft text-brand-bright",
	solid: "border border-brand bg-brand text-canvas-deep",
} as const;

export function Badge({ children, tone = "neutral", className }: BadgeProps) {
	return (
		<span
			className={cn(
				"inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium leading-none",
				TONES[tone],
				className,
			)}
		>
			{children}
		</span>
	);
}
