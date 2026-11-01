import type { ReactNode } from "react";
import { Container } from "#/components/layout/Container";

type PageIntroProps = {
	eyebrow: string;
	title: ReactNode;
	description: string;
	meta?: ReactNode;
};

export function PageIntro({
	eyebrow,
	title,
	description,
	meta,
}: PageIntroProps) {
	return (
		<section className="border-b border-border">
			<Container className="animate-reveal pb-12 pt-14 sm:pt-20 lg:pb-16 lg:pt-24">
				<p className="eyebrow flex items-center gap-2">
					<span aria-hidden="true" className="text-brand">
						#
					</span>
					{eyebrow}
				</p>
				<h1 className="text-display mt-5 max-w-4xl text-text">{title}</h1>
				<p className="prose-copy mt-6 text-base sm:text-lg">{description}</p>
				{meta ? <div className="mt-8">{meta}</div> : null}
			</Container>
		</section>
	);
}
