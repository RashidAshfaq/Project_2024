
import Footer from '../../components/footer/Footer';
import LandingPageDashboard from '../../components/dashboard/LandingPageDashboard.jsx';
import Header from '../../components/header/Header';
import AvailableJob from '../../components/availableJobs/AvailableJob';
import './Home.css';

const Home = () => {
  return (
    <div className={'homePage'}>
     <Header/>
     <LandingPageDashboard/>
     <AvailableJob/>
     <Footer/>
    </div>
  )
}

export default Home