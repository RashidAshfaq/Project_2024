import "./login.css";
import Waves from "../wave/Waves";
import { Link } from "react-router-dom";
import Header from '../header/Header';
import axios from "axios";
import { useState } from "react";

const LoginPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleOnChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    // check the email format
    if (!validateEmail(data.email)) {
      setError("Invalid email format");
      return;
    }

    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/applicantDashboard";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
    <Header/>
      <div className={`login-form ${error ? 'error-form' : ''}`}>
        <div className="login-heading">
          <h1>Log In</h1>
        </div>
        <form className="input-section" onSubmit={handleOnSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={handleOnChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={data.password}
            onChange={handleOnChange}
          />
          {error && <div className="error_msg">{error}</div>}
          <button type="submit">Login</button>
        </form>
        <div className="signup-prompt">
          <p>_____________Don't have an account?____________</p>
        </div>
        <div className="signup-button">
          <button>
            <Link className="a" to="/signUp">
              Please, Sign Up
            </Link>
          </button>
        </div>
      </div>
      <Waves />
    </>
  );
};

export default LoginPage;
