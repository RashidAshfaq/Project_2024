import styles from "./ActionButton.module.css"
function ActionButton({src, alt, isSelected=false}) {

	return (
		<button className={` ${isSelected ? styles.isSelected : ''} ${styles.actionButton}`}>
			<img className={styles.buttonImage} src={src} alt={alt}/>
		</button>
	);
}

export default ActionButton;