import { quote } from '#/data/portfolio'

export function QuoteSection() {
	return (
		<section className="max-w-5xl mx-auto mb-20 relative">
			<div className="text-center">
				<div className="inline-block px-4 py-2 border border-current/40 rounded-sm mb-4">
					{quote.text}
				</div>
				<div className="inline-block px-2 py-1 border border-current/40 rounded-sm relative -top-4">
					{quote.author}
				</div>
			</div>
			<div className="absolute -left-4 -top-2 w-4 h-4 border-b-2 border-current" />
			<div className="absolute -right-4 -bottom-2 w-4 h-4 border-t-2 border-current" />
		</section>
	)
}
