import styles from './Footer.module.css';

const socials = [
	{ label: 'GitHub', href: '#' },
	{ label: 'LinkedIn', href: '#' },
	{ label: 'Twitter / X', href: '#' }
];

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<span>© {new Date().getFullYear()} Michele Saladino</span>
			<div className={styles.socials}>
				{socials.map((soc) => (
					<a key={soc.label} href={soc.href} className={`${styles.social} nav-link`}>
						{soc.label}
					</a>
				))}
			</div>
		</footer>
	);
}
