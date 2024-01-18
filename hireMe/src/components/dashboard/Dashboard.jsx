
import './dashboard.css';
import imageText from '../../assets/Asset 3 1.svg'

const Dashboard = () => {
  return (
    <div className='main'>
      <div className='description'>
        <div>
          <h1>Ignite Your Career with <i><span className='span2'>H</span>ire</i><span className='span1'> <img src={imageText} alt="ME" /></span> </h1>
          <h2>Your gateway to professional Excellence</h2>
        </div>
      </div>
      <div className='image'></div>
    </div>
  );
};

export default Dashboard;
