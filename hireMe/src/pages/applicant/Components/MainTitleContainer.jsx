import styles from "./MainTitleContainer.module.css"
import DashboardTitle from "./DashboardTitle.jsx";
import SubTitleMain from "./SubTitleMain.jsx";
function MainTitleContainer() {
	return (
		<div className={styles.MainTitleContainer}>
			<DashboardTitle/>
		</div>
	);
}

export default MainTitleContainer;