import type { ReactNode } from "react";
import { AppLink, type AppLinkProps } from "./AppLink";
import {
	type ButtonSize,
	type ButtonVariant,
	buttonStyles,
} from "./buttonStyles";
import { Icon, type IconName } from "./Icon";

export type ButtonLinkProps = AppLinkProps & {
	readonly variant?: ButtonVariant;
	readonly size?: ButtonSize;
	readonly icon?: IconName;
	readonly iconPosition?: "left" | "right";
	readonly children: ReactNode;
};

export function ButtonLink({
	variant = "primary",
	size = "md",
	icon,
	iconPosition = "right",
	className,
	children,
	...linkProps
}: ButtonLinkProps) {
	const iconNode = icon ? <Icon name={icon} className="size-4" /> : null;

	return (
		<AppLink
			{...linkProps}
			className={buttonStyles({ variant, size, className })}
		>
			{icon && iconPosition === "left" ? iconNode : null}
			<span>{children}</span>
			{icon && iconPosition === "right" ? iconNode : null}
		</AppLink>
	);
}
