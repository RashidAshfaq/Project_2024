import styles from "./JobsContainer.module.css"
import JobCard from "../Components/JobCard.jsx";

function JobsContainer() {
	return (
		<div className={styles.jobsContainer}>
			<div className={styles.searchContainer}>
				<input className={(styles.searchInput)} type="text" placeholder={'Search Jobs'}/>
			</div>
			<div className={styles.resultsContainer}>
				<JobCard/>
			</div>
		</div>
	);
}

export default JobsContainer;