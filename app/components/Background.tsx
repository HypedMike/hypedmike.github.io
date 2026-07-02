import styles from './Background.module.css';

export default function Background() {
	return (
		<>
			<div className={styles.backdrop}>
				<div className={`${styles.blob} ${styles.blobA}`} />
				<div className={`${styles.blob} ${styles.blobB}`} />
				<div className={`${styles.blob} ${styles.blobC}`} />
			</div>
			<div className={styles.grid} />
		</>
	);
}
