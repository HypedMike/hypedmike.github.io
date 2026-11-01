// Content for the site. Edit here, the page updates.
// "Where I work" is maintained by hand: LinkedIn's API cannot be used from a static site
// (see README).

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
		title: 'Impulsa',
		tags: ['co-founder', 'tech lead'],
		text: 'A cross-border job platform connecting Italy and Spain. I co-founded it and lead the technical side, from architecture to delivery.',
		links: [{ label: 'impulsajob.com', href: 'https://impulsajob.com' }]
	},
	{
		title: 'Chiese nella Città',
		tags: ['web app', 'client work'],
		text: 'News and information for the churches of Lucca, commissioned by the Diocese of Lucca. The grown-up version of Le Vele, my parish community app.',
		links: [{ label: 'Live site', href: 'https://chiese-della-citta-lucca.fly.dev/' }]
	}
];

export const more: { title: string; text?: string; stack?: string; href: string }[] = [
	{ title: 'WhatsappGoMiner', text: 'Nerdy stats from a WhatsApp chat export — messages per person, hour and month.', stack: 'go', href: 'https://github.com/HypedMike/WhatsappGoMiner' },
	{ title: 'youtube-spotify-sync', text: 'Keeps a Spotify playlist mirrored from a YouTube Music one.', stack: 'go', href: 'https://github.com/HypedMike/youtube-spotify-sync' },
	{ title: 'MontAuth', text: 'A minimal JWT auth library: sessions, validation and refresh.', stack: 'typescript', href: 'https://github.com/HypedMike/auth-system' },
	{ title: 'telegram-node-sdk', text: 'A fully typed Telegram bot client you can use from IntelliSense alone.', stack: 'typescript', href: 'https://github.com/HypedMike/telegram-node-sdk' },
	{ title: 'Classicum', text: 'Admin for the Classicum association: guests, parties and lists.', stack: 'web app', href: 'https://www.classicumeventi.com/' },
	{ title: 'Secret Santa', href: 'https://github.com/HypedMike/secret_santa' }
];

export const experience: { period: string; title: string; text: string }[] = [
	{ period: '2025 — now', title: 'Move Solutions', text: 'Vue 3 and TypeScript platform for structural health monitoring.' },
	{ period: 'Now', title: 'Co-founder & Tech Lead · Impulsa', text: 'Cross-border Italy/Spain job platform.' },
	{ period: 'Now', title: 'Founding Partner & IT Manager · Classicum ETS', text: 'Website and internal tools for a cultural youth association in Lucca.' },
	{ period: '2025', title: 'BSc Computer Science · University of Pisa', text: 'Now continuing with the MSc in Computer Science.' }
];
