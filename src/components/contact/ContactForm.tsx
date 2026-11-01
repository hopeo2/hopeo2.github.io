import { type FormEvent, useEffect, useRef, useState } from "react";
import { buttonStyles } from "#/components/ui/buttonStyles";
import { Icon } from "#/components/ui/Icon";
import { contactForm } from "#/data/contact";
import { emailHref, site } from "#/data/site";
import { cn } from "#/lib/cn";

/**
 * FormSubmit forwards the submission to `site.email` and needs no backend or
 * API key. The plain `action` keeps the form usable without JavaScript; the
 * AJAX endpoint is used when JavaScript is available so the visitor stays on
 * the page and gets inline feedback.
 */
const FORM_ENDPOINT = `https://formsubmit.co/${site.email}`;
const AJAX_ENDPOINT = `https://formsubmit.co/ajax/${site.email}`;
const NEXT_URL = `${site.url}/contact/?sent=1`;

type FormStatus = "idle" | "sending" | "success" | "error";

type ContactFormProps = {
	/** Set when the page is reached from the no-JavaScript redirect. */
	readonly confirmed?: boolean;
};

const FIELD_CLASS =
	"mt-2 w-full rounded-control border border-border bg-canvas-deep/70 px-3.5 py-2.5 text-sm text-text transition-colors placeholder:text-text-faint hover:border-border-brand focus-visible:border-border-brand focus-visible:outline-offset-1";

export function ContactForm({ confirmed = false }: ContactFormProps) {
	const [status, setStatus] = useState<FormStatus>(
		confirmed ? "success" : "idle",
	);
	const [errorDetail, setErrorDetail] = useState<string | null>(null);
	const statusRef = useRef<HTMLOutputElement>(null);

	useEffect(() => {
		if (status === "success" || status === "error") {
			statusRef.current?.focus();
		}
	}, [status]);

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const form = event.currentTarget;

		if (!form.reportValidity()) return;

		setStatus("sending");

		try {
			const response = await fetch(AJAX_ENDPOINT, {
				method: "POST",
				headers: { Accept: "application/json" },
				body: new FormData(form),
			});
			const result = (await response.json().catch(() => null)) as {
				success?: string | boolean;
				message?: string;
			} | null;

			if (!response.ok || String(result?.success) !== "true") {
				setErrorDetail(result?.message ?? null);
				setStatus("error");
				return;
			}

			form.reset();
			setErrorDetail(null);
			setStatus("success");
		} catch {
			setErrorDetail(null);
			setStatus("error");
		}
	}

	const showStatus = status === "success" || status === "error";

	return (
		<form
			action={FORM_ENDPOINT}
			method="POST"
			onSubmit={handleSubmit}
			aria-busy={status === "sending"}
			className="relative"
		>
			<input type="hidden" name="_subject" value={contactForm.subject} />
			<input type="hidden" name="_template" value="table" />
			<input type="hidden" name="_captcha" value="false" />
			<input type="hidden" name="_next" value={NEXT_URL} />

			{/* Honeypot: hidden from people and assistive tech, tempting for bots. */}
			<div
				aria-hidden="true"
				className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
			>
				<label htmlFor="contact-honey">Leave this field empty</label>
				<input
					id="contact-honey"
					type="text"
					name="_honey"
					tabIndex={-1}
					autoComplete="off"
				/>
			</div>

			<div className="grid gap-5 sm:grid-cols-2">
				<div>
					<label htmlFor="contact-name" className="eyebrow">
						{contactForm.nameLabel}{" "}
						<span aria-hidden="true" className="text-brand">
							*
						</span>
					</label>
					<input
						id="contact-name"
						name="name"
						type="text"
						required
						autoComplete="name"
						placeholder={contactForm.namePlaceholder}
						className={FIELD_CLASS}
					/>
				</div>

				<div>
					<label htmlFor="contact-email" className="eyebrow">
						{contactForm.emailLabel}{" "}
						<span aria-hidden="true" className="text-brand">
							*
						</span>
					</label>
					<input
						id="contact-email"
						name="email"
						type="email"
						required
						autoComplete="email"
						placeholder={contactForm.emailPlaceholder}
						className={FIELD_CLASS}
					/>
				</div>

				<div className="sm:col-span-2">
					<label htmlFor="contact-subject" className="eyebrow">
						{contactForm.subjectLabel}
					</label>
					<input
						id="contact-subject"
						name="subject"
						type="text"
						placeholder={contactForm.subjectPlaceholder}
						className={FIELD_CLASS}
					/>
				</div>

				<div className="sm:col-span-2">
					<label htmlFor="contact-message" className="eyebrow">
						{contactForm.messageLabel}{" "}
						<span aria-hidden="true" className="text-brand">
							*
						</span>
					</label>
					<textarea
						id="contact-message"
						name="message"
						rows={6}
						required
						placeholder={contactForm.messagePlaceholder}
						className={cn(FIELD_CLASS, "resize-y")}
					/>
				</div>
			</div>

			<div className="mt-6 flex flex-wrap items-center gap-4">
				<button
					type="submit"
					disabled={status === "sending"}
					className={buttonStyles()}
				>
					<Icon name="email" className="size-4" />
					<span>
						{status === "sending"
							? contactForm.sendingLabel
							: contactForm.submitLabel}
					</span>
				</button>
				<p className="text-xs leading-relaxed text-text-faint sm:max-w-xs">
					Required fields are marked with{" "}
					<span aria-hidden="true" className="text-brand">
						*
					</span>
					<span className="sr-only">an asterisk</span>.
				</p>
			</div>

			<output
				ref={statusRef}
				tabIndex={-1}
				className={cn(
					"block rounded-card focus-visible:outline-offset-2",
					showStatus && "mt-6",
				)}
			>
				{status === "success" ? (
					<div className="rounded-card border border-border-brand bg-brand-soft p-4">
						<p className="flex items-center gap-2 text-sm font-semibold text-brand-bright">
							<Icon name="check" className="size-4 shrink-0" />
							{contactForm.successTitle}
						</p>
						<p className="mt-1.5 text-sm leading-relaxed text-text-muted">
							{contactForm.successBody}
						</p>
					</div>
				) : null}

				{status === "error" ? (
					<div className="rounded-card border border-danger/40 bg-danger-soft p-4">
						<p className="flex items-center gap-2 text-sm font-semibold text-danger">
							<Icon name="close" className="size-4 shrink-0" />
							{contactForm.errorTitle}
						</p>
						<p className="mt-1.5 text-sm leading-relaxed text-text-muted">
							{errorDetail ?? contactForm.errorBody}{" "}
							<a
								href={emailHref}
								className="break-all text-brand-bright underline underline-offset-2 hover:text-text"
							>
								{site.email}
							</a>
						</p>
					</div>
				) : null}
			</output>

			<p className="mt-5 text-xs leading-relaxed text-text-faint">
				{contactForm.privacyNote}{" "}
				<a
					href={emailHref}
					className="break-all text-brand-bright underline underline-offset-2 hover:text-text"
				>
					{site.email}
				</a>
				.
			</p>
		</form>
	);
}
