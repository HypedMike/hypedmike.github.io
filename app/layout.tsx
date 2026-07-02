import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Sora, JetBrains_Mono } from 'next/font/google';
import Background from './components/Background';
import CursorGlow from './components/CursorGlow';
import Nav from './components/Nav';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-space-grotesk',
	display: 'swap'
});

const sora = Sora({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600'],
	variable: '--font-sora',
	display: 'swap'
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	weight: ['400', '500'],
	variable: '--font-jetbrains-mono',
	display: 'swap'
});

export const metadata: Metadata = {
	title: 'Michele Saladino — Fullstack Developer',
	description:
		'Fullstack developer crafting web, mobile and AI-driven experiences — from pixel to production.',
	keywords: [
		'portfolio',
		'fullstack developer',
		'web development',
		'mobile development',
		'AI integration',
		'software engineering'
	],
	authors: [{ name: 'Michele Saladino' }],
	icons: {
		icon: '/favicon.png'
	}
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${spaceGrotesk.variable} ${sora.variable} ${jetbrainsMono.variable}`}>
			<body>
				<div
					style={{ position: 'relative', minHeight: '100vh', width: '100%', isolation: 'isolate' }}
				>
					<Background />
					<CursorGlow />
					<Nav />
					{children}
				</div>
			</body>
		</html>
	);
}
