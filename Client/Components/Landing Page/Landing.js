// LandingPage.js

import React from "react";
import "./Landing.css";
import heroImage from "../../Assets/heroImage.png";
import Logo from "../../Assets/ClientLogos/Logo.png";
import Logo_1 from "../../Assets/ClientLogos/Logo_1.png";
import Logo_2 from "../../Assets/ClientLogos/Logo_2.png";
import Logo_3 from "../../Assets/ClientLogos/Logo_3.png";
import Logo_4 from "../../Assets/ClientLogos/Logo_4.png";
import Logo_5 from "../../Assets/ClientLogos/Logo_5.png";
import Image1 from "../../Assets/CommunityImages/Image1.png";
import Image2 from "../../Assets/CommunityImages/Image2.png";
import Image3 from "../../Assets/CommunityImages/Image3.png";
import WhiteArrow from "../../Assets/FooterIcons/whiteArrow.svg";
import GreenArrow from "../../Assets/FooterIcons/GreenArrow.svg";
import MarketingImage1 from "../../Assets/Marketing/1.png";
import MarketingImage2 from "../../Assets/Marketing/2.png";
import MarketingImage3 from "../../Assets/Marketing/3.png";
import MembersImage from "../../Assets/Achievements/Members.png";
import BookingsImage from "../../Assets/Achievements/Bookings.png";
import OrganizationsImage from "../../Assets/Achievements/Organizations.png";
import PaymentsImage from "../../Assets/Achievements/Payments.png";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const navigate = useNavigate();
  const { currentUser, individual } = useSelector((state) => state.user);

  return (
    <>
      <Header />
      {/* HERO SECTION */}
      <div className="heroSection">
        <div className="heroContent">
          {/* left side */}
          <div className="heroLeft">
            <h1 className="heroHeading">
              Empowering Tomorrow's
              <br />
              Sustainability By
              <br />
              <span style={{ color: "#4CAF4F" }}>Carbon Trading</span>
            </h1>
            <p className="paraHero">
              Join the movement towards a Greener Future
            </p>
            {currentUser == null ? (
              <button className="buttonHero" onClick={() => navigate("/SignUp")}>
              Register
            </button>) : (
              <button className="buttonHero" onClick={() => navigate("/Feature")}>
              Features
            </button>
            )
            }
          </div>
          {/* right side */}
          <img src={heroImage} alt="" className="heroImage" />
        </div>
      </div>

      {/* CLIENTS SECTION */}
      <div className="clientSection">
        <h2 className="clientHeading">Our Clients</h2>
        <p className="clientPara">
          We have been working with some Fortune 500+ clients
        </p>
        {/* client logos */}
        <div className="client-image-div">
          <img src={Logo} alt="" />
          <img src={Logo_2} alt="" />
          <img src={Logo_3} alt="" />
          <img src={Logo_4} alt="" />
          <img src={Logo_5} alt="" />
          <img src={Logo_2} alt="" />
          <img src={Logo_1} alt="" />
        </div>
      </div>

      {/* COMMUNITY SECTION */}
      <div className="communitySection">
        <div className="textBox">
          <h2 className="communityHeading">
            Centralize Community Management
            <br />
            Effortlessly with Our Integrated Solution
          </h2>
          <p className="communityPara">Uniting for Sustainable Futures</p>
        </div>

        <div className="cards">
          <div className="communityCards">
            <img src={Image1} alt="" className="cardImage" />
            <h3 className="cardHeading">Customizable Solutions</h3>
            <p className="cardPara">
              Tailor your carbon offsetting strategy to your specific needs and
              goals.
            </p>
          </div>
          <div className="communityCards">
            <img src={Image2} alt="" className="cardImage" />
            <h3 className="cardHeading">Seamless Carbon Trading</h3>
            <p className="cardPara">
              Buy and sell carbon credits with ease through our intuitive
              marketplace.
            </p>
          </div>
          <div className="communityCards">
            <img src={Image3} alt="" className="cardImage" />
            <h3 className="cardHeading">Transparency and Impact</h3>
            <p className="cardPara">
              See exactly where your contributions are going and the tangible
              difference you're making.
            </p>
          </div>
        </div>
      </div>

      {/* ACHIEVEMENTS SECTION */}
      <div className="achievements">
        <div className="achievementContent">
          <div className="leftSide">
            <h2 className="achievementHeading">
              Helping Environment
              <br />
              <span className="greenText">Through Tech</span>
            </h2>
            <p className="achievementPara">
              We have reached here with our hard work and dedication
            </p>
          </div>
          <div className="rightSideAchieve">
            <div className="topRow">
              <div className="achievementCount">
                <div className="left">
                  <img src={MembersImage} alt="" className="achiImage" />
                </div>
                <div className="right">
                  <span className="number">2,245,341</span>
                  <p className="text">Members</p>
                </div>
              </div>
              <div className="achievementCount">
                <div className="left">
                  <img src={BookingsImage} alt="" className="achiImage" />
                </div>
                <div className="right">
                  <span className="number">828,867</span>
                  <p className="text">Bookings</p>
                </div>
              </div>
            </div>
            <div className="bottomRow">
              <div className="achievementCount">
                <div className="left">
                  <img src={OrganizationsImage} alt="" className="achiImage" />
                </div>
                <div className="right">
                  <span className="number">4,638</span>
                  <p className="text">Organizations</p>
                </div>
              </div>
              <div className="achievementCount">
                <div className="left">
                  <img src={PaymentsImage} alt="" className="achiImage" />
                </div>
                <div className="right">
                  <span className="number">1,926,436</span>
                  <p className="text">Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MARKETING SECTION */}
      <div className="marketingSection">
        <div className="marketingText">
          <h2 className="marketingHeading">Caring is the new marketing</h2>
          <p className="marketingPara">
            At CarbonHub, we're committed to making carbon trading accessible,
            transparent, and inclusive for everyone. Our platform empowers you
            to take meaningful action against climate change and build a
            sustainable future for generations to come.
          </p>
        </div>
        <div className="marketingGrid">
          <a href="OffsetYourEmission">
            <img src={MarketingImage1} alt="" className="marketingImage" />
          </a>
          <a href="CalculateFootprint">
            <img src={MarketingImage2} alt="" className="marketingImage" />
          </a>
          <a href="#">
            <img src={MarketingImage3} alt="" className="marketingImage" />
          </a>
        </div>
      </div>

      {/* FOOTER SECTION */}
      <div className="footer">
        <div className="footerContent">
          <h1 className="headingFooter">
            Join us in the fight against <br />
            climate change.
          </h1>{
            currentUser ==null ?(
          <div className="buttonDiv">
          <button
              className="footerButton"
              onClick={() => navigate("/SignUp")}
            >
              Sign Up Now{" "}
              <img src={WhiteArrow} className="footerArrow" alt="" />{" "}
              <img src={GreenArrow} alt="" className="greenArrow" />
            </button>
          </div>) : (
            <div className="buttonDiv">
            {individual ?(<button
                className="footerButton"
                onClick={() => navigate("/NGOandTree")}
              >
                Plant A Tree{" "}
                <img src={WhiteArrow} className="footerArrow" alt="" />{" "}
                <img src={GreenArrow} alt="" className="greenArrow" />
              </button>) : (
                <button
                className="footerButton"
                onClick={() => navigate("/NGOandTree")}
              >
                Plantation ?{" "}
                <img src={WhiteArrow} className="footerArrow" alt="" />{" "}
                <img src={GreenArrow} alt="" className="greenArrow" />
              </button>
              )}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LandingPage;
