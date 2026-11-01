import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Container } from "#/components/layout/Container";
import { Brand } from "#/components/nav/Brand";
import { DesktopNav } from "#/components/nav/DesktopNav";
import { MobileMenu } from "#/components/nav/MobileMenu";
import { SocialLinks } from "#/components/nav/SocialLinks";
import { Icon } from "#/components/ui/Icon";

const MOBILE_MENU_ID = "mobile-menu";

export function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const headerRef = useRef<HTMLElement>(null);
	const toggleRef = useRef<HTMLButtonElement>(null);
	const pathname = useRouterState({
		select: (state) => state.location.pathname,
	});
	const previousPathname = useRef(pathname);

	useEffect(() => {
		if (previousPathname.current === pathname) return;
		previousPathname.current = pathname;
		setMobileOpen(false);
	}, [pathname]);

	useEffect(() => {
		if (!mobileOpen) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key !== "Escape") return;
			setMobileOpen(false);
			toggleRef.current?.focus();
		};

		const handlePointerDown = (event: PointerEvent) => {
			if (
				event.target instanceof Node &&
				headerRef.current &&
				!headerRef.current.contains(event.target)
			) {
				setMobileOpen(false);
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("pointerdown", handlePointerDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("pointerdown", handlePointerDown);
		};
	}, [mobileOpen]);

	return (
		<header
			ref={headerRef}
			className="sticky top-0 z-50 border-b border-border bg-canvas/90 backdrop-blur-md"
		>
			<Container className="flex h-16 items-center justify-between gap-4 md:h-20">
				<Brand />

				<div className="flex items-center gap-2 md:gap-3">
					<DesktopNav />

					<span
						aria-hidden="true"
						className="hidden h-6 w-px bg-border lg:block"
					/>

					<div className="hidden lg:block">
						<SocialLinks />
					</div>

					<button
						ref={toggleRef}
						type="button"
						aria-label={mobileOpen ? "Close menu" : "Open menu"}
						aria-expanded={mobileOpen}
						aria-controls={MOBILE_MENU_ID}
						onClick={() => setMobileOpen((open) => !open)}
						className="inline-flex size-11 items-center justify-center rounded-control border border-border bg-surface/40 text-text-muted transition-colors duration-200 hover:border-border-brand hover:bg-brand-soft hover:text-brand md:hidden"
					>
						<Icon name={mobileOpen ? "close" : "menu"} className="size-5" />
					</button>
				</div>
			</Container>

			<MobileMenu
				id={MOBILE_MENU_ID}
				open={mobileOpen}
				onClose={() => setMobileOpen(false)}
			/>
		</header>
	);
}
