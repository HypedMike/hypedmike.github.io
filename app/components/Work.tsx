'use client';

import { useReveal } from '../hooks/useReveal';
import { useSpotlightReveal } from '../hooks/useSpotlightReveal';
import styles from './Work.module.css';

const projects = [
	{
		num: '01',
		name: 'Impulsa',
		tag: 'Platform',
		link: '#',
		desc: 'A growth platform helping teams turn data into action — full product build from architecture to deployment, with a React front end and a Go service layer.',
		stack: ['React', 'Go', 'PostgreSQL', 'Clean Architecture']
	},
	{
		num: '02',
		name: 'Rate My Outfit',
		tag: 'AI',
		link: '#',
		desc: 'A mobile app that scores and styles outfits using computer vision and LLM feedback — built in Flutter with an AI-driven backend.',
		stack: ['Flutter', 'Node.js', 'LLMs', 'Vision']
	},
	{
		num: '03',
		name: 'Classicum',
		tag: 'Web App',
		link: '#',
		desc: 'A refined web experience with a component-driven Vue front end and a cleanly layered API, designed to stay easy to extend.',
		stack: ['Vue', 'Node.js', 'Design Patterns']
	}
];

function ProjectCard({ project, delay }: { project: (typeof projects)[number]; delay: number }) {
	const cardRef = useSpotlightReveal<HTMLAnchorElement>(delay);

	return (
		<a ref={cardRef} href={project.link} className={`${styles.card} reveal`}>
			<div className={styles.glow} />
			<div className={styles.num}>{project.num}</div>
			<div className={styles.body}>
				<div className={styles.titleRow}>
					<h3 className={styles.name}>{project.name}</h3>
					<span className={styles.tag}>{project.tag}</span>
				</div>
				<p className={styles.desc}>{project.desc}</p>
				<div className={styles.stack}>
					{project.stack.map((s) => (
						<span className={styles.stackItem} key={s}>
							{s}
						</span>
					))}
				</div>
			</div>
			<div className={styles.arrow}>↗</div>
		</a>
	);
}

export default function Work() {
	const eyebrowRef = useReveal<HTMLDivElement>(0);
	const headingRef = useReveal<HTMLHeadingElement>(0);

	return (
		<section id="work" className={styles.section}>
			<div ref={eyebrowRef} className={`${styles.eyebrow} reveal`}>
				03 — SELECTED WORK
			</div>
			<h2 ref={headingRef} className={`${styles.heading} reveal`}>
				Projects I&apos;ve shipped.
			</h2>
			<div className={styles.list}>
				{projects.map((project, i) => (
					<ProjectCard project={project} delay={i * 60} key={project.name} />
				))}
			</div>
		</section>
	);
}
