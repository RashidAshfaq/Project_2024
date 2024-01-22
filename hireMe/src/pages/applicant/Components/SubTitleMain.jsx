import styles from "./SubTitleMain.module.css"

function SubTitleMain({text}) {
	return (
		<div className={styles.subTitleMain}>
			<h1 className={styles.subTitleText}>{text}</h1>
			<svg className={styles.subtitleSvg} xmlns="http://www.w3.org/2000/svg" width="319" height="40" viewBox="0 0 319 40" fill="none">
				<mask id="path-1-inside-1_50_1221" fill="white">
					<path fill-rule="evenodd" clip-rule="evenodd"
						  d="M290 0H0V40H289.979H290V39.985L318.173 19.7951L290 0.0369732V0Z"/>
				</mask>
				<path fill-rule="evenodd" clip-rule="evenodd"
					  d="M290 0H0V40H289.979H290V39.985L318.173 19.7951L290 0.0369732V0Z" fill="#D9D9D9"
					  fill-opacity="0.67"/>
				<path
					d="M0 0V-1H-1V0H0ZM290 0H291V-1H290V0ZM0 40H-1V41H0V40ZM290 40V41H291V40H290ZM290 39.985L289.417 39.1722L289 39.4714V39.985H290ZM318.173 19.7951L318.755 20.6079L319.902 19.7863L318.747 18.9764L318.173 19.7951ZM290 0.0369732H289V0.557068L289.426 0.855699L290 0.0369732ZM0 1H290V-1H0V1ZM1 40V0H-1V40H1ZM289.979 39H0V41H289.979V39ZM290 39H289.979V41H290V39ZM289 39.985V40H291V39.985H289ZM317.59 18.9823L289.417 39.1722L290.583 40.7978L318.755 20.6079L317.59 18.9823ZM289.426 0.855699L317.599 20.6138L318.747 18.9764L290.574 -0.781752L289.426 0.855699ZM289 0V0.0369732H291V0H289Z"
					fill="#386264" fill-opacity="0.34" mask="url(#path-1-inside-1_50_1221)"/>
			</svg>
		</div>
	);
}

export default SubTitleMain;