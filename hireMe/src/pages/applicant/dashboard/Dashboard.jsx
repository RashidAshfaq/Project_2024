// import Sidebar from "../../../components/sideBars/Sidebar"
import TopHeader from "./TopHeader.jsx";
import SideBar from "./SideBar.jsx";
import ApplicantMain from "./ApplicantMain.jsx";

import styles from "./Dashboard.module.css"
import Footer from "../Components/Footer.jsx";
import MainTitleContainer from "../Components/MainTitleContainer.jsx";

const Dashboard = ({children}) => {
  return (
    <div className={styles.applicantDashboard}>
        <TopHeader/>
        <ApplicantMain>
            <MainTitleContainer/>
            {children}
        </ApplicantMain>
        <SideBar/>
        <Footer/>
    </div>
  )
}

export default Dashboard;

{/*<Sidebar/>*/}