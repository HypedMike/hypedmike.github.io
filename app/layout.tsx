import type { Metadata, Viewport } from 'next';
import Navbar from './components/Navbar';
import './globals.css';

export const metadata: Metadata = {
	title: 'MS',
	description: 'A personal portfolio showcasing my projects and skills.',
	keywords: ['portfolio', 'projects', 'skills', 'web development', 'software engineering'],
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
		<html lang="en">
			<body>
				<main>
					<Navbar />
					{children}
				</main>
			</body>
		</html>
	);
}
