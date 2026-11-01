import type { ReactNode } from "react";
import { cn } from "#/lib/cn";

type SectionProps = {
	children: ReactNode;
	className?: string;
	id?: string;
	labelledBy?: string;
};

export function Section({ children, className, id, labelledBy }: SectionProps) {
	return (
		<section
			id={id}
			aria-labelledby={labelledBy}
			className={cn("py-14 sm:py-18 lg:py-24", className)}
		>
			{children}
		</section>
	);
}
