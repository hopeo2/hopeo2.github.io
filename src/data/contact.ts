export const contactPage = {
	lead: "Have a project in mind, a question, or a site that needs a careful front-end pass? Send a message below, or email me directly.",
	responseNote: "I read every message and reply as soon as I can.",
	emailLabel: "Message me here",
	services: [
		{
			title: "Websites & landing pages",
			body: "Responsive, content-led sites with a clear structure and a considered finish.",
		},
		{
			title: "Front-end implementation",
			body: "Turning a design into accessible, maintainable React and CSS.",
		},
		{
			title: "Responsive & accessibility passes",
			body: "Auditing and fixing layout, keyboard and contrast issues in an existing site.",
		},
	],
} as const;

/**
 * Copy for the contact form. The form itself is delivered by FormSubmit, a
 * static-friendly service: no backend is required, the address is confirmed
 * once by the recipient and every message arrives as a normal email.
 */
export const contactForm = {
	title: "Tell me about the project.",
	description:
		"Share what you are working on and what you need. Messages go straight to my inbox and I reply by email.",
	subject: "New message from the portfolio",
	nameLabel: "Name",
	namePlaceholder: "Your name",
	emailLabel: "Email",
	emailPlaceholder: "you@example.com",
	subjectLabel: "Subject",
	subjectPlaceholder: "Project, question or collaboration",
	messageLabel: "Message",
	messagePlaceholder: "What are you building, and what do you need?",
	submitLabel: "Send message",
	sendingLabel: "Sending…",
	successTitle: "Message sent.",
	successBody:
		"Thanks — your message is on its way. I will reply to the address you left.",
	errorTitle: "Message not sent.",
	errorBody:
		"Something went wrong while sending. Please try again, or email me directly.",
	privacyNote:
		"The form is delivered by FormSubmit. If you would rather write from your own mail app, use",
} as const;
