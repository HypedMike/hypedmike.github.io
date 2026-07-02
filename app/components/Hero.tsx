'use client';

import { useReveal } from '../hooks/useReveal';
import { useMagnetic } from '../hooks/useMagnetic';
import styles from './Hero.module.css';

const stackTicker = ['React', 'Vue', 'Go', 'Node.js', 'Flutter', 'AI / LLMs', 'TypeScript'];

export default function Hero() {
	const titleRef = useReveal<HTMLHeadingElement>(0);
	const ledeRef = useReveal<HTMLParagraphElement>(70);
	const ctasRef = useReveal<HTMLDivElement>(140);
	const stackRef = useReveal<HTMLDivElement>(210);
	const primaryCtaRef = useMagnetic<HTMLAnchorElement>();
	const secondaryCtaRef = useMagnetic<HTMLAnchorElement>();

	return (
		<header id="top" className={styles.hero}>
			<h1 ref={titleRef} className={`${styles.title} reveal`}>
				I build <span className={styles.titleAccent}>fullstack</span>{' '}
				products, end&#8209;to&#8209;end.
			</h1>
			<p ref={ledeRef} className={`${styles.lede} reveal`}>
				Fullstack developer crafting web, mobile and AI&#8209;driven experiences — from pixel to
				production. Focused on <strong>clean architecture</strong>,{' '}
				<strong>maintainable code</strong> and the right <strong>design patterns</strong>.
			</p>
			<div ref={ctasRef} className={`${styles.ctaRow} reveal`}>
				<a ref={primaryCtaRef} href="#work" className={styles.ctaPrimary}>
					View selected work
				</a>
				<a ref={secondaryCtaRef} href="#about" className={styles.ctaSecondary}>
					More about me
				</a>
			</div>

			<div ref={stackRef} className={`${styles.stack} reveal`}>
				<span className={styles.stackLabel}>{'// stack'}</span>
				{stackTicker.map((t) => (
					<span key={t} className={`${styles.stackItem} nav-link`}>
						{t}
					</span>
				))}
			</div>

			<a href="#about" className={styles.scrollHint}>
				SCROLL
				<span className={styles.scrollLine} />
			</a>
		</header>
	);
}
