// Content for the site. Edit here, the page updates.

export const profile = {
	name: ['Michele', 'Saladino'],
	location: 'Lucca, Italy',
	tagline: 'Clean code. Clean design. Shipped end to end.',
	intro:
		'I build frontends in Vue and React, backends in Go, the fast bits in Rust — and I like putting AI to work inside real products.',
	github: 'https://github.com/HypedMike',
	linkedin: 'https://www.linkedin.com/in/michele-saladino/',
	email: '' // set to show the email button in the contact section
};

export const focus = [
	{ title: 'clean code', text: 'Readable beats clever. Small functions, clear boundaries, honest names.' },
	{ title: 'clean design', text: 'Whitespace, hierarchy and restraint. Interfaces that get out of the way.' },
	{ title: 'go', text: 'My default for APIs, services and command-line tools.' },
	{ title: 'rust', text: 'For the performance-critical parts — natively or compiled to WebAssembly.' },
	{ title: 'vue', text: 'Vue 3 and TypeScript, every day, on large production frontends.' },
	{ title: 'react', text: 'Component-driven UIs, from side projects to in-browser games.' },
	{ title: 'ai', text: 'Integrating models into products where they genuinely help users.' }
];

export type Link = { label: string; href: string };

export const featured: { title: string; tags: string[]; text: string; links: Link[] }[] = [
		{
		title: 'Impulsa',
		tags: ['co-founder', 'tech lead'],
		text: 'An AI interview-practice platform for students and junior professionals. Simulated interviews by voice or text, tailored to a company or job description, with feedback and a readiness score. I co-founded it and lead the technical side.',
		links: [{ label: 'impulsajob.com', href: 'https://impulsajob.com' }]
	},
	{
		title: 'Security Camera',
		tags: ['go', 'rust', 'telegram'],
		text: 'Turns any Linux machine with a webcam into a motion-detecting camera you control from Telegram. When something moves, it sends you a short GIF.',
		links: [
			{ label: 'Project page', href: 'https://hypedmike.github.io/security-camera/' },
			{ label: 'Code', href: 'https://github.com/HypedMike/security-camera' }
		]
	},
	{
		title: 'Chat Impostor',
		tags: ['rust → wasm', 'react'],
		text: 'A Spyfall-style party game that picks its secret word from your own WhatsApp chat. The analysis runs in Rust compiled to WebAssembly, so the chat never leaves your device.',
		links: [
			{ label: 'Play', href: 'https://hypedmike.github.io/chat-impostor/' },
			{ label: 'Code', href: 'https://github.com/HypedMike/chat-impostor' }
		]
	},
	{
		title: 'Chiese nella Città',
		tags: ['web app', 'client work'],
		text: 'News and information for the churches of Lucca, commissioned by the Diocese of Lucca. The grown-up version of Le Vele, my parish community app.',
		links: [{ label: 'Live site', href: 'https://chiese-della-citta.vercel.app' }]
	}
];

export const more: { title: string; text?: string; stack?: string; href: string }[] = [
	{ title: 'youtube-spotify-sync', text: 'Keeps a Spotify playlist mirrored from a YouTube Music one.', stack: 'go', href: 'https://github.com/HypedMike/youtube-spotify-sync' },
	{ title: 'MontAuth', text: 'A minimal JWT auth library: sessions, validation and refresh.', stack: 'typescript', href: 'https://github.com/HypedMike/auth-system' },
	{ title: 'telegram-node-sdk', text: 'A fully typed Telegram bot client you can use from IntelliSense alone.', stack: 'typescript', href: 'https://github.com/HypedMike/telegram-node-sdk' },
	{ title: 'Next-CRM', text: 'A CRM web app built with Next.js and TypeScript.', stack: 'typescript', href: 'https://github.com/HypedMike/next-crm' },
	{ title: 'Classicum', text: 'Admin for the Classicum association: guests, parties and lists.', stack: 'web app', href: 'https://www.classicumeventi.com/' },
	{ title: 'Secret Santa', href: 'https://github.com/HypedMike/secret_santa' }
];

export const twosteps = {
	name: 'TwoSteps',
	tagline: 'Stay close to the few people who matter.',
	text: [
		'TwoSteps is a small Android app for keeping in touch with a handful of people you trust. Pair with someone by scanning their QR code, then poke them to say “I’m here”, send an emoji, share your live location for a while, or ask a quick poll. No feed, no followers, no accounts.',
		'It is built to be quiet: a poke is one tap, and everything else stays out of the way.'
	],
	tech: [
		{
			title: 'no proprietary server',
			text: 'There is no backend of mine to run, trust or shut down. Messages travel over public Nostr relays.'
		},
		{
			title: 'end-to-end encrypted',
			text: 'NIP-44 encryption with NIP-59 gift wraps, so relays only see sealed envelopes. Pairing needs a proof of possession, so strangers cannot add you.'
		},
		{
			title: 'no account, keys on device',
			text: 'Your identity is a keypair in the phone’s secure storage. Contacts, history and positions live in a local database.'
		},
		{
			title: 'reliable by design',
			text: 'Every message is queued, signed and retried until the other phone confirms delivery, even across flaky connections.'
		}
	],
	stack: ['flutter', 'nostr', 'riverpod', 'drift', 'android'],
	testers: {
		title: 'Looking for testers',
		text: 'The app is Android-only and still in testing. If you have an Android phone and a friend or two to pair with, I’d love your feedback: what feels good, what’s confusing, what breaks.'
	}
};
