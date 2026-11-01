import { Container } from "#/components/layout/Container";
import { ButtonLink } from "#/components/ui/ButtonLink";

export function NotFoundView() {
	return (
		<Container className="flex min-h-[70vh] flex-col justify-center py-20">
			<p className="eyebrow flex items-center gap-2">
				<span aria-hidden="true" className="text-brand">
					#
				</span>
				404 / Not found
			</p>
			<h1 className="text-display mt-5 max-w-3xl text-text">
				This page took a wrong turn.
			</h1>
			<p className="prose-copy mt-5 text-base">
				The page you are looking for does not exist, or it has moved. Try one of
				the routes below instead.
			</p>
			<div className="mt-8 flex flex-wrap gap-3">
				<ButtonLink to="/" icon="arrow-left" iconPosition="left">
					Back home
				</ButtonLink>
				<ButtonLink to="/projects" variant="secondary">
					View projects
				</ButtonLink>
				<ButtonLink to="/contact" variant="ghost">
					Contact
				</ButtonLink>
			</div>
		</Container>
	);
}
