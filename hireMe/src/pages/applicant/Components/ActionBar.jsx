import styles from "./ActionBar.module.css"
import ActionButton from "./ActionButton.jsx";
import jobIcon from '../../../assets/Job_Icon.svg';
import interviewIcon from '../../../assets/Interview.svg';
import committeeIcon from '../../../assets/comitte.svg';
import feedbackIcon from '../../../assets/Feedback.svg';
function ActionBar() {
	return (
		<div>
			<ActionButton src={jobIcon} alt={"Job Icon"} isSelected={true}/>
			<ActionButton src={interviewIcon} alt={"Interview Icon"}/>
			<ActionButton src={committeeIcon} alt={"Job Icon"} />
			<ActionButton src={feedbackIcon} alt={"Job Icon"} />
		</div>
	);
}

export default ActionBar;