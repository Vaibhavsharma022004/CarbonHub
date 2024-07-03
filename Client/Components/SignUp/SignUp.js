import BgImage from "../../Assets/FooterIcons/image-21@2x.png";
import AppleIcon from "../../Assets/signup/AppleIcon.png";
import GoogleIcon from "../../Assets/signup/GoogleIcon.png";
import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    password: "",
    individual: false,
  })
  console.log(formData);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:8080/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.success===false){
            console.log("SIGN-up problem");
            setError(data.message)
          }else{
            navigate("/Login");
          }
        });
    } catch (error) {
      setError(error.message);
    }
  };


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <div>
      <Header />
      <div className="signUpMainDiv">
        <img src={BgImage} alt="Sign Up" className="signUpImage" />

        <div className="signupForm">
          <h1 className="formHeading">Create Your Account</h1>
          <p className="formPara">
            Already have an account?{" "}
            <span className="formSpan">
              <a href="login.html">Sign In</a>
            </span>
          </p>
          <form className="formMain">
            <label className="formLabel" id="userName">
              Full Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              className="formInput"
              type="text"
              placeholder="Enter Your Full Name"
              id="userName"
              onChange={handleChange}
            />

            <label className="formLabel" id="userEmail">
              Email <span style={{ color: "red" }}>*</span>
            </label>
            <input
              className="formInput"
              type="text"
              placeholder="Enter Your Email Address"
              id="userEmail"
              onChange={handleChange}
            />

            <label className="formLabel" id="password">
              Password <span style={{ color: "red" }}>*</span>
            </label>
            <input
              className="formInput"
              type="password"
              id="password"
              placeholder="Create a Password"
              onChange={handleChange}
            />
          </form>

          <div
            className="signUpAs"
            style={{ marginBottom: "20px", width: "70%" }}
          >
            <p>
              Sign Up as{" "}
              <span className="signUpSpan" style={{ color: "red" }}>
                *
              </span>
            </p>
            <div
              className="signUpCheck"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="indivDiv" style={{ display: "flex" }}>
                <label className="squareButton" style={{ paddingLeft: "17px" }}>
                  <input type="radio" name="accountType" id = "individual" onClick={()=>{
                    setFormData({
                      ...formData,
                      individual: true,
                    });
                  }}/>
                  <span className="customRadio"></span>
                </label>
                <div className="labelText">Individual</div>
              </div>
              <div
                className="NGODiv"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <label className="squareButton" style={{ paddingLeft: "17px" }}>
                  <input type="radio" name="accountType" id = "NGO" onClick={()=>{
                    setFormData({
                      ...formData,
                      individual: false,
                    });
                  }}/>
                  <span className="customRadio"></span>
                </label>
                <div className="labelText">NGO</div>
              </div>
            </div>
          </div>

          <div className="TandC">
            <label className="squareButton" style={{ paddingLeft: "17px" }}>
              <input type="checkbox" />
              <span className="customRadio"></span>
              <p className="tAndcPara" style={{ marginLeft: "10px" }}>
                I agree to the Terms & Conditions
              </p>
            </label>
          </div>

          <button className="submitForm" onClick={handleSubmit}>
            Register
          </button>

          <div className="hrLine">
            <div className="straightLine"></div>
            <p className="hrLinePara">OR</p>
            <div className="straightLine"></div>
          </div>

          <div className="iconsDiv">
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

export default SignUp;
