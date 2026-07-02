import styles from './Nav.module.css';

const navItems = [
	{ label: 'About', href: '#about' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Work', href: '#work' }
];

export default function Nav() {
	return (
		<nav className={styles.nav}>
			<a href="#top" className={styles.logo}>
				<span className={styles.badge}>ms</span>
				Michele Saladino
			</a>
			<div className={styles.links}>
				{navItems.map((item) => (
					<a key={item.label} href={item.href} className={`${styles.link} nav-link`}>
						{item.label}
					</a>
				))}
			</div>
		</nav>
	);
}
