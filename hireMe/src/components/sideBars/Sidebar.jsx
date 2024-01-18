// Header.js

import { Link } from 'react-router-dom';
import './sidebar.css';
import logoSvg from '../../assets/Logo_Icon.svg';
import hireMESvg from '../../assets/HireMe_Logo_Text.svg';
import userAccount from '../../assets/User_Account.png';
import logout from '../../assets/Logout.svg';
import jobButton from '../../assets/Job_Icon.svg';
import interviewButton from '../../assets/Interview.svg';
import committeeButton from '../../assets/comitte.svg';
import feedbackButton from '../../assets/Feedback.svg';

const Sidebar = () => {
  return (
    <>
    
    <header>
      <Link to="/">
        <img src={logoSvg} alt="Logo" />
      </Link>
      <Link to="/">
        <img src={hireMESvg} alt="hire Me text logo" />
      </Link>
      <Link to="/">
        <img src={userAccount} alt="user pic" />
      </Link>
    </header>

    <div className='sidebar'>
     <div></div>
     <div className='buttons'>
     <button className='button'><img src={jobButton} alt="job" /></button>
     <button className='button'><img src={interviewButton} alt="interview" /></button>
     <button className='button'><img src={committeeButton} alt="committee" /></button>
     <button className='button'><img src={feedbackButton} alt="feedback" /></button>
     </div>
     <div className='logout'>
     <img src={logout} alt="Logout" />
     </div>
    </div>
    </>


  );
};

export default Sidebar;
