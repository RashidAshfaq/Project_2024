
import Footer from '../../components/footer/Footer';
import Dashboard from '../../components/dashboard/Dashboard';
import Header from '../../components/header/Header';
import AvailableJob from '../../components/availableJobs/AvailableJob';
import './Home.css';

const Home = () => {
  return (
    <div className={'homePage'}>
     <Header/>
     <Dashboard/>
     <AvailableJob/>
     <Footer/>
    </div>
  )
}

export default Home