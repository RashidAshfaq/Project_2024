import styles from "./ApplicantMain.module.css"

function ApplicantMain({children}) {
	return (
		<div className={styles.applicationMainContainer}>
			{children}
		</div>
	);
}

export default ApplicantMain;