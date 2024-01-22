import styles from "./JobCard.module.css"

function JobCard() {
	return (
		<div className={styles.jobCardResult}>
			<div className={styles.jobImage}>{/*<img />*/}</div>
			<div className={styles.jobContent}>
				<h3 className={styles.jobContentTitle}>Job Title</h3>
				<p  className={styles.jobContentDate}>Jan 20, 2023 - March 20, 2023</p>
				<p className={styles.jobContentJobDescription}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus illo
					rerum fugit enim vitae! Earum.Lorem ipsum dolor sit, amet consectetur
					adipisicing elit. Natus illo rerum fugit enim vitae! Earum.
				</p>
			</div>
			<button className={styles.jobCardButton}>Apply</button>
		</div>
	);
}

export default JobCard;