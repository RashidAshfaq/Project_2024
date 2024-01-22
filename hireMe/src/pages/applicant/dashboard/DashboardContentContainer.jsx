import styles from "./DashboardContentContainer.module.css"
import SubTitleMain from "../Components/SubTitleMain.jsx";
import JobsContainer from "./JobsContainer.jsx";
function DashboardContentContainer() {
	return (
		<div className={styles.dashboardContentContainer}>
			<div className={styles.subTitleMainContainer}>
				<SubTitleMain text={'Available Jobs'}/>
			</div>
			<JobsContainer/>
		</div>
	);
}

export default DashboardContentContainer;