import { Container } from "#/components/layout/Container";
import { Section } from "#/components/layout/Section";
import { quote } from "#/data/quote";

export function Quote() {
	return (
		<Section className="border-t border-border">
			<Container>
				<figure className="relative overflow-hidden rounded-feature border border-border bg-surface/30 px-6 py-10 sm:px-10 lg:px-14">
					<span
						aria-hidden="true"
						className="pointer-events-none absolute -top-10 right-6 font-mono text-[10rem] leading-none text-brand/10"
					>
						&quot;
					</span>
					<p className="eyebrow">{quote.context}</p>
					<blockquote className="mt-4 max-w-3xl">
						<p className="text-section text-text">&ldquo;{quote.text}&rdquo;</p>
					</blockquote>
					<figcaption className="mt-5 text-sm text-text-muted">
						— {quote.author}
					</figcaption>
				</figure>
			</Container>
		</Section>
	);
}
