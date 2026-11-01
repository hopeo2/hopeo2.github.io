import {
	Link,
	type LinkComponentProps,
	type LinkProps,
} from "@tanstack/react-router";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { type AnchorHref, getLinkKind } from "#/lib/links";

type BaseProps = {
	children: ReactNode;
	className?: string;
	/**
	 * Appends a visually hidden new-tab hint to external links. Turn this off
	 * when the control already includes the hint in its accessible name.
	 */
	externalHint?: boolean;
};

type InternalProps = Omit<
	LinkComponentProps,
	"to" | "href" | "children" | "className"
> & {
	to: LinkProps["to"];
	hash?: string;
} & BaseProps;

type AnchorProps = Omit<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	"href" | "children" | "className"
> & {
	href: AnchorHref;
} & BaseProps;

export type AppLinkProps = InternalProps | AnchorProps;

/**
 * One link primitive with predictable behaviour:
 * - internal routes use TanStack Router
 * - http(s) links open in a new tab with a safe rel value
 * - mailto links stay in the current tab
 * - hash links scroll without a document reload
 */
export function AppLink(props: AppLinkProps) {
	if ("to" in props) {
		const { children, className, hash, ...rest } = props;

		return (
			<Link {...rest} to={props.to} hash={hash} className={className}>
				{children}
			</Link>
		);
	}

	const { children, className, href, externalHint = true, ...rest } = props;
	const kind = getLinkKind(href);

	if (kind === "external") {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={className}
				{...rest}
			>
				{children}
				{externalHint ? (
					<span className="sr-only"> (opens in a new tab)</span>
				) : null}
			</a>
		);
	}

	return (
		<a href={href} className={className} {...rest}>
			{children}
		</a>
	);
}
