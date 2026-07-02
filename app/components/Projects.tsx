import styles from './Projects.module.css';

const items = [
	{
		name: 'Le Vele',
		github: 'https://levele.rf.gd/',
		description: "News and activity scharing for the community of the San Donato's Church",
		image:
			'https://images.pexels.com/photos/29213973/pexels-photo-29213973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
	},
	{
		name: 'Chiese nella Città',
		github: 'https://chiese-della-citta-lucca.fly.dev/',
		description:
			'An evolution of the previous project, with a more modern design and additional features. Commissioned by the Diocesi of Lucca.',
		image: 'https://chiese-della-citta-lucca.fly.dev/logo1.jpg'
	},
	{
		name: 'Secret Santa',
		github: '#',
		description:
			'A web application for managing sailing trips, featuring a user-friendly interface and real-time weather updates.',
		image:
			'https://images.pexels.com/photos/247891/pexels-photo-247891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
	},
	{
		name: 'Classicum',
		github: 'https://www.classicumeventi.com/',
		description:
			"Web app to manage the Classicum Organization's administration (guests, parties, lists...)",
		image:
			'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
	}
];

export default function Projects() {
	return (
		<section style={{ height: '100vh' }} id="projects">
			<h1 className={styles.heading}>Projects</h1>

			<div className={styles.projectsContainer}>
				{items.map((item) => (
					<div className={styles.projectCard} key={item.name}>
						<h2 className={styles.title}>{item.name}</h2>
						<div
							className={styles.imgContainer}
							style={{ backgroundImage: `url('${item.image}')` }}
						/>
						<p style={{ height: 100 }}>{item.description}</p>
						<div>
							<a href={item.github} className={styles.githubLink}>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									src="https://www.freeiconspng.com/uploads/link-icon-png-14.png"
									alt="GitHub Logo"
									width={24}
									height={24}
								/>
							</a>
							<a href={item.github} className={styles.githubLink}>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
									alt="GitHub Logo"
									width={24}
									height={24}
								/>
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
