import InstagramIcon from "../../Assets/FooterIcons/Instagram.png";
import TwitterIcon from "../../Assets/FooterIcons/Twitter.png";
import WebsiteIcon from "../../Assets/FooterIcons/Website.png";
import YoutubeIcon from "../../Assets/FooterIcons/Youtube.png";
import SendIcon from "../../Assets/FooterIcons/send.png";
import React from "react";
import "./Footer.css";

function Footer(){
    return(
        <div className="footer2">
        <div className="footer2Content">
          <div className="div1">
            <p className="copyright">Copyright © 2024 CarbonHub ltd.</p>
            <p className="allRights">All rights reserved</p>
            <div className="footerIcons">
              <a href="#">
                <img src={InstagramIcon} alt="" className="footerIcon" />
              </a>
              <a href="#">
                <img src={TwitterIcon} alt="" className="footerIcon" />
              </a>
              <a href="#">
                <img src={WebsiteIcon} alt="" className="footerIcon" />
              </a>
              <a href="#">
                <img src={YoutubeIcon} alt="" className="footerIcon" />
              </a>
            </div>
          </div>

          <div className="div2">
            <h3 className="div2Heading">Company</h3>
            <div className="companyList">
              <p className="footerItem">About Us</p>
              <p className="footerItem">Blog</p>
              <p className="footerItem">Contact Us</p>
              <p className="footerItem">Pricing</p>
              <p className="footerItem">Testimonials</p>
            </div>
          </div>

          <div className="div3">
            <h3 className="div3Heading">Support</h3>
            <div className="supportList">
              <p className="footerItem2">Help Center</p>
              <p className="footerItem2">Terms Of Service</p>
              <p className="footerItem2">Legal</p>
              <p className="footerItem2">Privacy Policy</p>
              <p className="footerItem2">Status</p>
            </div>
          </div>

          <div className="div4">
            <h3 className="div4Heading">Stay up to Date</h3>
            <div className="inputDiv">
              <input
                type="email"
                placeholder="Your Email Address"
                className="footerInput"
              />
              <img src={SendIcon} alt="" className="sendIcon" />
            </div>
          </div>
        </div>
      </div>
    )
}

export default Footer;