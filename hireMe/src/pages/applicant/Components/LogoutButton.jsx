import logoutIcon from '../../../assets/Logout.svg';
import styles from "./LogoutButton.module.css"



function LogoutButton() {
	return (
		<button className={styles.logoutButton}>
			<img className={styles.imgStyle} src={logoutIcon} alt="Logout Image"/>
		</button>
	);
}

export default LogoutButton;