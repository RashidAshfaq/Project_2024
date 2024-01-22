import styles from "./DashboardTitle.module.css"
function DashboardTitle() {
	return (
		<div className={styles.dashboardTitleContainer}>
			<h2 className={styles.dashboardTitleText}>Dashboard</h2>
		</div>
	);
}

export default DashboardTitle;