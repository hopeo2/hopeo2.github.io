/**
 * Join class names without pulling in a dependency. Falsy values are ignored so
 * components can compose conditional classes safely.
 */
export function cn(
	...classes: Array<string | false | null | undefined>
): string {
	return classes.filter(Boolean).join(" ");
}
