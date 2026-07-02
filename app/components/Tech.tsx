import styles from './Tech.module.css';

const items = [
	{ name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
	{
		name: 'Svelte',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg'
	},
	{
		name: 'Vue',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg'
	},
	{ name: 'Angular', logo: 'https://angular.io/assets/images/logos/angular/angular.svg' },
	{ name: 'Node.js', logo: 'https://nodejs.org/static/images/logo.svg' },
	{
		name: 'Python',
		logo: 'https://www.python.org/community/logos/python-logo-master-v3-TM.png'
	},
	{
		name: 'JavaScript',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
	},
	{
		name: 'TypeScript',
		logo: 'https://www.typescriptlang.org/assets/images/icons/apple-touch-icon.png'
	},
	{
		name: 'HTML',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'
	},
	{
		name: 'CSS',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'
	},
	{
		name: 'Bootstrap',
		logo: 'https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo-shadow.png'
	},
	{
		name: 'Tailwind CSS',
		logo: 'https://tailwindcss.com/_next/static/media/logo.2c3b8f0d.svg'
	}
];

export default function Tech() {
	return (
		<section id="tech">
			<div className={styles.techContainer}>
				{items.map((item) => (
					<div className={styles.techCard} key={item.name}>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={item.logo} alt={`${item.name} Logo`} className={styles.techLogo} />
						<h2 className={styles.techName}>{item.name}</h2>
					</div>
				))}
			</div>
		</section>
	);
}
