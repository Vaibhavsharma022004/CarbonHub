import React from "react";
import "./Login.css";
import AppleIcon from "../../Assets/signup/AppleIcon.png";
import GoogleIcon from "../../Assets/signup/GoogleIcon.png";
import BgImag1 from "../../Assets/Login/image-20@2x.png";
import { useNavigate, Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../redux/users/userSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    individual: false,
  });
  console.log(formData)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("http://localhost:8080/api/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      localStorage.setItem("token", data.token);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      const { success, token, ...rest } = data;
      console.log(rest);
      dispatch(signInSuccess({ user: rest, token: token, individual: formData.individual}));
      navigate("/");
      console.log("Everything working fine!! in sign-in");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div>
      <Header />
      <div className="loginMainDiv">
        <img src={BgImag1} alt="#" id="loginImage" />
        <div className="loginForm">
          <h2>Welcome back</h2>
          <p className="paraForm">
            Don't have an account?{" "}
            <span className="formSpan">
              <Link to="/SignUp">Sign Up</Link>
            </span>
          </p>
          <form className="formMain" onSubmit={handleSubmit}>
            <label className="labelForm" id="mail">
              Email address <span style={{ color: "red" }}>*</span>
            </label>
            <input
              className="formInput"
              type="email"
              placeholder="Enter Your Email"
              id="email"
              onChange={handleChange}
            />

            <label className="labelForm" id="password">
              Password <span style={{ color: "red" }}>*</span>
            </label>
            <input
              className="formInput"
              type="password"
              id="password"
              placeholder="Enter Your Password"
              onChange={handleChange}
            />

            <div
              className="loginAs"
              style={{ marginBottom: "20px", width: "90%" }}
            >
              <p>
                Login as{" "}
                <span className="loginSpan" style={{ color: "red" }}>
                  *
                </span>
              </p>
              <div className="loginCheck">
                <div
                  className="indivDivLogin"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <label className="buttonSquare">
                    <input
                      className="loginAsInput"
                      type="radio"
                      name="accountTypeLogin"
                      onClick={()=>{
                        setFormData({
                          ...formData,
                          individual: true
                        })
                      }}
                    />
                    <span className="customRadioLogin"></span>
                  </label>
                  <div className="labelTextLogin">Individual</div>
                </div>
                <div
                  className="NGODiv"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <label className="buttonSquare">
                    <input
                      className="loginAsInput"
                      type="radio"
                      name="accountTypeLogin"
                      onClick={()=>{
                        setFormData({
                          ...formData,
                          individual: false
                        })
                      }}
                    />
                    <span className="customRadioLogin"></span>
                  </label>
                  <div className="labelTextLogin">NGO</div>
                </div>
              </div>
                        
            </div> 

            <a href="#" className="passwordForgot">
              Forgot Password?
            </a>

            <button
              className="formSubmit"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
          <div className="hrLine">
            <div className="straightLine"></div>
            <p className="hrLinePara">OR</p>
            <div className="straightLine"></div>
          </div>

          <div className="icons">
            <a href="#">
              <img src={GoogleIcon} alt="Google Icon" />
            </a>
            <a href="#">
              <img src={AppleIcon} alt="Apple Icon" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;