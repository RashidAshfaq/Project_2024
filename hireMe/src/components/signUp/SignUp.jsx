import "./signUp.css";
import Waves from "../wave/Waves";
import { Link, useNavigate } from "react-router-dom";
import Header from '../header/Header';
import axios from "axios";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState(""); // Separate state for confirm password
  const [error, setError] = useState("");

  const handleOnChange = ({ currentTarget: input }) => {
    if (input.name === "confirmPassword") {
      setConfirmPassword(input.value);
    } else {
      setData({ ...data, [input.name]: input.value });
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^\d+$/;
    return phoneNumberRegex.test(phoneNumber);
  };

  const validateEmail = (email) => {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    // Check the phone number length
  if (data.phoneNumber.length > 11) {
    setError("Phone number must be 11 digits or less");
    return;
  }
  // check the phone number format
    if (!validatePhoneNumber(data.phoneNumber)) {
      setError("Phone number must contain only digits");
      return;
    }

// check the email format
    if (!validateEmail(data.email)) {
      setError("Invalid email format");
      return;
    }

    // Check if password and confirm password match
    if (data.password !== confirmPassword) {
      setError("Password and Confirm Password do not match");
      return;
    }
  
    try {
      const url = "http://localhost:8080/api/applicant";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      // console.log(res.message);
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
      <div className="sign-form">
        <div className="signIn-heading">
          <h1>Sign Up</h1>
        </div>
        <form className="input-section" onSubmit={handleOnSubmit}>
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            value={data.firstName}
            required
            minLength={32}
            onChange={handleOnChange}
          />
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            value={data.lastName}
            required
            minLength={32}
            onChange={handleOnChange}
          />
          <input
            type="text"
            placeholder="Phone number"
            name="phoneNumber"
            value={data.phoneNumber}
            onChange={handleOnChange}
          />
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
          <input
            type="password"
            placeholder="Confirm your password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleOnChange}
          />
          {error && <div className="error_msg">{error}</div>}
          <button type="submit">Sign Up</button>
        </form>
        <div className="login-prompt">
          <p>_____________Already a member?____________</p>
        </div>
        <div className="login-button">
          <button>
            <Link className="a" to="/login">
              Please, Log In
            </Link>
          </button>
        </div>
      </div>
      <Waves />
    </>
  );
};

export default SignUp;
