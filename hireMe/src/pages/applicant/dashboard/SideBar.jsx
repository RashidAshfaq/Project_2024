import styles from './SideBar.module.css';
import ActionBar from "../Components/ActionBar.jsx";
import LogoutButton from "../Components/LogoutButton.jsx";

function SideBar() {
	return (
		<div className={styles.sideBar}>
			<ActionBar/>
			<LogoutButton/>
		</div>
	);
}

export default SideBar;