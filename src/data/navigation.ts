export type NavTarget = "/" | "/projects" | "/about" | "/contact";

export type NavLink = {
	readonly label: string;
	readonly to: NavTarget;
	readonly exact?: boolean;
};

export const navLinks = [
	{ label: "Home", to: "/", exact: true },
	{ label: "Works", to: "/projects", exact: false },
	{ label: "About Me", to: "/about", exact: false },
	{ label: "Contacts", to: "/contact", exact: false },
] as const satisfies readonly NavLink[];
