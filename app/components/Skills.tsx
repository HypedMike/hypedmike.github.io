'use client';

import { useReveal } from '../hooks/useReveal';
import { useTiltReveal } from '../hooks/useTiltReveal';
import styles from './Skills.module.css';

const skillGroups = [
	{
		icon: '{ }',
		title: 'Frontend',
		desc: 'Interfaces that feel fast and stay maintainable.',
		tags: ['React', 'Vue', 'TypeScript', 'Tailwind'],
		glow: 'rgba(107,91,255,0.5)'
	},
	{
		icon: '<>',
		title: 'Backend',
		desc: 'Resilient services and clean, well-shaped APIs.',
		tags: ['Go', 'Node.js', 'PostgreSQL', 'REST / gRPC'],
		glow: 'rgba(56,189,248,0.45)'
	},
	{
		icon: '[ ]',
		title: 'Mobile',
		desc: 'Cross-platform apps with a native feel.',
		tags: ['Flutter', 'Dart', 'iOS', 'Android'],
		glow: 'rgba(217,70,239,0.4)'
	},
	{
		icon: '~/',
		title: 'AI Integration',
		desc: 'LLMs and ML woven into real product flows.',
		tags: ['LLMs', 'RAG', 'Embeddings', 'Agents'],
		glow: 'rgba(124,255,178,0.35)'
	},
	{
		icon: '#',
		title: 'Architecture',
		desc: 'Systems designed to scale and evolve gracefully.',
		tags: ['Clean Arch', 'DDD', 'Microservices', 'Event-driven'],
		glow: 'rgba(255,183,94,0.4)'
	},
	{
		icon: '*',
		title: 'Craft',
		desc: 'The habits that keep a codebase healthy.',
		tags: ['Clean Code', 'Design Patterns', 'Testing', 'CI/CD'],
		glow: 'rgba(107,91,255,0.45)'
	}
];

function SkillCard({ group, delay }: { group: (typeof skillGroups)[number]; delay: number }) {
	const cardRef = useTiltReveal<HTMLDivElement>(delay);

	return (
		<div ref={cardRef} className={`${styles.card} reveal`}>
			<div
				className={styles.cardGlow}
				style={{ background: `radial-gradient(circle, ${group.glow}, transparent 70%)` }}
			/>
			<div className={styles.cardBody}>
				<div className={styles.icon}>{group.icon}</div>
				<h3 className={styles.title}>{group.title}</h3>
				<p className={styles.desc}>{group.desc}</p>
				<div className={styles.tags}>
					{group.tags.map((tag) => (
						<span className={styles.tag} key={tag}>
							{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}

export default function Skills() {
	const eyebrowRef = useReveal<HTMLDivElement>(0);
	const headingRef = useReveal<HTMLHeadingElement>(0);

	return (
		<section id="skills" className={styles.section}>
			<div ref={eyebrowRef} className={`${styles.eyebrow} reveal`}>
				02 — SKILLS
			</div>
			<h2 ref={headingRef} className={`${styles.heading} reveal`}>
				A toolbox spanning web, mobile, backend &amp; AI.
			</h2>
			<div className={styles.grid}>
				{skillGroups.map((group, i) => (
					<SkillCard group={group} delay={i * 40} key={group.title} />
				))}
			</div>
		</section>
	);
}
