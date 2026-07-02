import styles from './Header.module.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<section className={styles.section}>
				<h1>
					<span className={styles.stylizedTitle}>Full Stack Developer</span>
					<br />
					<span style={{ fontSize: 'larger' }}>MICHELE SALADINO</span>
				</h1>
				<p style={{ maxWidth: 500, textAlign: 'center' }}>
					Web Developer |{' '}
					<span className={`${styles.stylizedTitle} ${styles.reverse}`}>AI</span> Enthusiast |
					Microservices Advocate | Mountain freak
				</p>
			</section>
			<section className={styles.section}>
				<div className={styles.logoImg} />
				<ul className={styles.socialLinks}>
					<li>
						<a href="https://twitter.com">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src="https://img.icons8.com/color/512/linkedin.png"
								alt="LinkedIn Logo"
								style={{ width: 24, height: 24, verticalAlign: 'middle' }}
							/>
							LinkedIn
						</a>
					</li>
					<li>
						<a href="https://facebook.com">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src="https://img.icons8.com/color/512/facebook.png"
								alt="Facebook Logo"
								style={{ width: 24, height: 24, verticalAlign: 'middle' }}
							/>
							Facebook
						</a>
					</li>
					<li>
						<a href="https://instagram.com">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src="https://img.icons8.com/color/512/instagram-new.png"
								alt="Instagram Logo"
								style={{ width: 24, height: 24, verticalAlign: 'middle' }}
							/>
							Instagram
						</a>
					</li>
				</ul>
			</section>
		</header>
	);
}
