import type { ErrorComponentProps } from "@tanstack/react-router";
import { Container } from "#/components/layout/Container";
import { ButtonLink } from "#/components/ui/ButtonLink";

export function ErrorView({ error, reset }: ErrorComponentProps) {
	const message =
		error instanceof Error ? error.message : "An unexpected error occurred.";

	return (
		<Container className="flex min-h-[70vh] flex-col justify-center py-20">
			<p className="eyebrow flex items-center gap-2">
				<span aria-hidden="true" className="text-brand">
					#
				</span>
				Error
			</p>
			<h1 className="text-display mt-5 max-w-3xl text-text">
				Something broke on this page.
			</h1>
			<p className="prose-copy mt-5 text-base">
				The page could not be rendered. Try again, or head back to a known
				route.
			</p>
			{import.meta.env.DEV ? (
				<pre className="mt-6 max-w-2xl overflow-x-auto rounded-control border border-border bg-surface/40 p-4 text-xs text-text-muted">
					{message}
				</pre>
			) : null}
			<div className="mt-8 flex flex-wrap gap-3">
				<button
					type="button"
					onClick={reset}
					className="inline-flex min-h-11 items-center justify-center rounded-control bg-brand px-5 text-sm font-semibold text-canvas-deep transition-colors hover:bg-brand-bright focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-text"
				>
					Try again
				</button>
				<ButtonLink to="/" variant="secondary">
					Back home
				</ButtonLink>
				<ButtonLink to="/contact" variant="ghost">
					Contact
				</ButtonLink>
			</div>
		</Container>
	);
}
