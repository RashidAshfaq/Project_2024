// App.js

import './App.css';
import Home from './pages/dashboard/Home';
import Login from './pages/login/Login';

import SignUp from './pages/signUp/SignUpPage';
import ApplicantDashboard from './pages/applicant/dashboard/Dashboard';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardContentContainer from "./pages/applicant/dashboard/DashboardContentContainer.jsx";

function App() {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/" element={<Home />} />

          {/* Applicant routes */}
          <Route path="/applicantDashboard"
                 element={
            <ApplicantDashboard>
              <DashboardContentContainer/>
          </ApplicantDashboard>
          }/>
        </Routes>
      </div>
    </Router>
  );
}




export default App;
