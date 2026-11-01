import type { ReactNode } from "react";
import { cn } from "#/lib/cn";

type SectionHeadingProps = {
	id: string;
	eyebrow: string;
	title: string;
	description?: string;
	action?: ReactNode;
	className?: string;
};

export function SectionHeading({
	id,
	eyebrow,
	title,
	description,
	action,
	className,
}: SectionHeadingProps) {
	return (
		<div
			className={cn(
				"flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
				className,
			)}
		>
			<div className="max-w-2xl">
				<p className="eyebrow flex items-center gap-2">
					<span aria-hidden="true" className="text-brand">
						#
					</span>
					{eyebrow}
				</p>
				<h2 id={id} className="text-section mt-3 text-text">
					{title}
				</h2>
				{description ? (
					<p className="prose-copy mt-4 sm:text-base">{description}</p>
				) : null}
			</div>
			{action ? <div className="shrink-0">{action}</div> : null}
		</div>
	);
}
