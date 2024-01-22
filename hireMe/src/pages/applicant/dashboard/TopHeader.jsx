import {Link} from "react-router-dom";
import logoSvg from "../../../assets/Logo_Icon.svg";
import hireMESvg from "../../../assets/HireMe_Logo_Text-white.svg";
import userAccount from "../../../assets/User_Account.png";
import styles from  "./TopHeader.module.css"

function TopHeader() {
	return (
		<header className={styles.topHeader}>
			<Link className={styles.headerLink} to="/">
				<img className={styles.appLogo} src={logoSvg} alt="Logo" />
			</Link>
			<Link className={styles.headerLink} to="/">
				<img className={styles.appTextLogo} src={hireMESvg} alt="hire Me text logo" />
			</Link>
			<Link className={styles.headerLink} to="/">
				<img className={styles.userAvatar} src={userAccount} alt="user pic" />
			</Link>
		</header>
	);
}

export default TopHeader;