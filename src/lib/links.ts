export type ExternalHref = `https://${string}` | `http://${string}`;
export type MailtoHref = `mailto:${string}`;
export type HashHref = `#${string}`;
export type AnchorHref = ExternalHref | MailtoHref | HashHref;

export type LinkKind = "external" | "email" | "hash";

export function getLinkKind(href: string): LinkKind {
	if (href.startsWith("mailto:")) return "email";
	if (href.startsWith("#")) return "hash";
	return "external";
}
