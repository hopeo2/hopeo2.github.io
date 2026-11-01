import type { IconName } from "#/components/ui/Icon";
import type { ExternalHref } from "#/lib/links";

export type SocialLink = {
	readonly label: string;
	readonly href: ExternalHref | `mailto:${string}`;
	readonly icon: IconName;
	readonly handle: string;
};

export type Site = {
	readonly name: string;
	readonly role: string;
	readonly tagline: string;
	readonly email: string;
	readonly location: string;
	readonly availability: string;
	readonly bio: string;
	readonly heroDescription: string;
	readonly url: ExternalHref;
	readonly socials: readonly SocialLink[];
};

export const site = {
	name: "Omid",
	role: "Front-end Developer",
	tagline: "Web designer & front-end developer",
	email: "hello@hopeo2.github.io",
	location: "Kyiv, Ukraine",
	availability: "Available for freelance work",
	bio: "Self-taught front-end developer. I build responsive websites where technologies meet creativity, turning ideas into modern, user-friendly web experiences.",
	heroDescription:
		"I design and build responsive, accessible interfaces where technology meets creativity — clear structure, considered details and no unnecessary noise.",
	url: "https://hopeo2.github.io",
	socials: [
		{
			label: "GitHub",
			href: "https://github.com/hopeo2",
			icon: "github",
			handle: "github.com/hopeo2",
		},
		{
			label: "Instagram",
			href: "https://instagram.com/hopeo2",
			icon: "instagram",
			handle: "@hopeo2",
		},
		{
			label: "YouTube",
			href: "https://youtube.com/@hopeo2",
			icon: "youtube",
			handle: "@hopeo2",
		},
	],
} as const satisfies Site;

export const emailHref = `mailto:${site.email}` as const;

/** Social destinations plus the canonical email, in one ordered list. */
export const socialLinks: readonly SocialLink[] = [
	...site.socials,
	{
		label: "Email",
		href: emailHref,
		icon: "email",
		handle: site.email,
	},
];
