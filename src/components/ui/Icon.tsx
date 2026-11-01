import type { ReactNode } from "react";

export type IconName =
	| "github"
	| "instagram"
	| "youtube"
	| "email"
	| "arrow-right"
	| "arrow-left"
	| "arrow-up-right"
	| "arrow-up"
	| "menu"
	| "close"
	| "check"
	| "terminal"
	| "map-pin"
	| "code";

const ICONS: Record<IconName, ReactNode> = {
	github: (
		<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
	),
	instagram: (
		<>
			<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
			<path d="M16 11.37A4 4 0 1 1 8 11.37a4 4 0 0 1 8 0Z" />
			<path d="M17.5 6.5h.01" />
		</>
	),
	youtube: (
		<>
			<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33Z" />
			<path d="m9.75 15.02 5.75-3.27-5.75-3.27v6.54Z" />
		</>
	),
	email: (
		<>
			<rect x="2" y="4" width="20" height="16" rx="2" />
			<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
		</>
	),
	"arrow-right": <path d="M5 12h14M12 5l7 7-7 7" />,
	"arrow-left": <path d="M19 12H5M12 19l-7-7 7-7" />,
	"arrow-up-right": <path d="M7 17 17 7M7 7h10v10" />,
	"arrow-up": <path d="M12 19V5M5 12l7-7 7 7" />,
	menu: <path d="M4 7h16M4 12h16M4 17h16" />,
	close: <path d="m6 6 12 12M18 6 6 18" />,
	check: <path d="m5 12 4 4L19 6" />,
	terminal: (
		<>
			<rect x="3" y="4" width="18" height="16" rx="2" />
			<path d="m7 9 3 3-3 3M13 15h4" />
		</>
	),
	"map-pin": (
		<>
			<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
			<circle cx="12" cy="10" r="3" />
		</>
	),
	code: <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />,
};

type IconProps = {
	name: IconName;
	className?: string;
};

/**
 * Inline, static SVG icons. Icons are decorative by default; controls that use
 * them provide their own accessible name.
 */
export function Icon({ name, className = "size-5" }: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.75"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={className}
			aria-hidden="true"
			focusable="false"
		>
			{ICONS[name]}
		</svg>
	);
}
