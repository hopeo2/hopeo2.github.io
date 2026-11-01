import type { ReactNode } from "react";
import { Footer } from "#/components/layout/Footer";
import { Header } from "#/components/layout/Header";

type LayoutProps = {
	children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
	return (
		<div className="relative flex min-h-dvh flex-col overflow-x-clip">
			<a href="#main-content" className="skip-link">
				Skip to content
			</a>

			<div
				aria-hidden="true"
				className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
			>
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(199,120,221,0.12),transparent_65%)]" />
				<div className="absolute inset-0 bg-grid opacity-[0.14] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
				<div className="absolute -top-40 left-1/2 hidden h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-brand/[0.07] blur-3xl md:block motion-safe:animate-drift" />
				<div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-brand/[0.05] blur-3xl" />
			</div>

			<Header />

			<main
				id="main-content"
				tabIndex={-1}
				className="relative flex-1 focus:outline-none"
			>
				{children}
			</main>

			<Footer />
		</div>
	);
}
