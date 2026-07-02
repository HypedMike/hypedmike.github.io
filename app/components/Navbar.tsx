'use client';

import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const items = [
	{ name: 'Home', href: '#' },
	{ name: 'Tech', href: '#tech' },
	{ name: 'Projects', href: '#projects' }
];

export default function Navbar() {
	const [showNavbar, setShowNavbar] = useState(true);

	useEffect(() => {
		if (window.innerWidth <= 800) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setShowNavbar(false);
		}
	}, []);

	return (
		<>
			<div className={styles.navbarButton}>
				<button onClick={() => setShowNavbar((value) => !value)} className={styles.toggleButton}>
					Menu
				</button>
			</div>

			{showNavbar && (
				<nav className={styles.nav}>
					{items.map((item) => (
						<a key={item.name} href={item.href} className={styles.navLink}>
							{item.name}
						</a>
					))}
				</nav>
			)}
		</>
	);
}
