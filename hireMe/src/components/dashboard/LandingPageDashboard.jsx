
import './dashboard.css';
// import imageText from '../../assets/Asset 3 1.svg'

const LandingPageDashboard = () => {
  return (
    <div className='main'>
      <div className='description'>
        <div className={'description-heading-container'}>
          <h1 className={'catchLine'}><span className={"first-letter-headings"}>I</span>gnite Your <span className={"first-letter-headings"}>C</span>areer <br />with <span className='logo-text'><img src="HireMe_Logo_Text.svg"
                                                                                                        /></span> </h1>
          <h2>Your gateway to professional <br /> Excellence</h2>
        </div>
      </div>
      <div className='image-container'>
          <span><img src="Candidate_Image.png" alt="Main Image"/></span>
      </div>
    </div>
  );
};

export default LandingPageDashboard;
