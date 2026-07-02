'use client';

import { useReveal } from '../hooks/useReveal';
import styles from './About.module.css';

const stats = [
	{ value: '8+', label: 'Years shipping production software' },
	{ value: '40+', label: 'Projects across web, mobile & AI' },
	{ value: '5', label: 'Core languages in daily rotation' }
];

export default function About() {
	const eyebrowRef = useReveal<HTMLDivElement>(0);
	const headingRef = useReveal<HTMLHeadingElement>(0);
	const p1Ref = useReveal<HTMLParagraphElement>(0);
	const p2Ref = useReveal<HTMLParagraphElement>(70);
	const statsRef = useReveal<HTMLDivElement>(140);

	return (
		<section id="about" className={styles.section}>
			<div className={styles.grid}>
				<div>
					<div ref={eyebrowRef} className={`${styles.eyebrow} reveal`}>
						01 — ABOUT
					</div>
					<h2 ref={headingRef} className={`${styles.heading} reveal`}>
						Engineering that holds up over time.
					</h2>
				</div>
				<div>
					<p ref={p1Ref} className={`${styles.paragraph} reveal`}>
						I&apos;m a fullstack developer who cares as much about the shape of a codebase as the
						product it ships. I move comfortably across the stack — building fast, accessible
						interfaces on the front end and resilient services on the back.
					</p>
					<p ref={p2Ref} className={`${styles.paragraph} reveal`}>
						Lately I&apos;m deep into <strong>architecture design</strong>,{' '}
						<strong>clean code</strong> and <strong>design patterns</strong> — and integrating AI
						into real products in ways that actually earn their place.
					</p>
					<div ref={statsRef} className={`${styles.stats} reveal`}>
						{stats.map((s) => (
							<div className={styles.stat} key={s.label}>
								<div className={styles.statValue}>{s.value}</div>
								<div className={styles.statLabel}>{s.label}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
