import Header from './components/Header';
import Tech from './components/Tech';
import Projects from './components/Projects';
import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.body}>
			<Header />
			<Tech />
			<Projects />
		</div>
	);
}
