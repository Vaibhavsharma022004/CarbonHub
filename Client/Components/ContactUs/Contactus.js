import React from 'react';
import './ContactUs.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const ContactUs = () => {
  return (
    <div>
        <Header />
        <div className='eclipse1Contact'></div>
      <div className="mainFormDiv">
        <div className="formDivChild">
              <div className="hrLineAndContact">
                <div className="horizontalLine"></div>
                <p className="contactNGO">CONTACT US</p>
              </div>
          <div className="leftRight">
            <div className="leftSideContact">
              <h1>We'd love to hear </h1>
                <h1 >from you</h1>
              <p className="contactPara">Have any question in mind or want to enquire? Please feel free to <br />contact us through the form or the following details.</p>
            </div>
            <div className="rightSide">
              <h2 className="rightHead">Let's Talk</h2>
              <div className="rightDiv1">
                <p className="phone">+91 9430849382</p>
                <a className="web" href="mailto: hello@kashiutthan.com">hello@kashiutthan.com</a>
              </div>

              <div className="horizontalLine2"></div>

              <h2 className="headOffice">Head Office</h2>
              <p className="address">114 Krishna lane, Arya Nagar, <br />Varanasi-231133</p>
            </div>
          </div>

          <form action="">
            <div className="formDiv">
              <div className="c1">
                <div className="formRow1">
                  <label htmlFor="firstName" className='firstNameLabel'>First Name</label>
                  <label htmlFor="lastName" className='lastNameLabel'>Last Name</label>
                </div>
                <div className="row2Contact">
                  <input type="text" id="firstName" />
                  <input type="text" id="lastName" />
                </div>
              </div>
              <div className="c2">
                <div className="row3">
                  <label htmlFor="email" className="emailLabel">Email</label>
                  <label htmlFor="subject" className="subjectLabel">Subject</label>
                </div>
                <div className="row4">
                  <input type="email" id="email" />
                  <input type="text" id="subject" />
                </div>
              </div>
            </div>

            <div className="textAreaDiv">
              <p className="textAreaPara">Message</p>
              <textarea name="message" id="formBox" placeholder="Type Your Message"></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <div className="eclipse2Contact"></div>
      <Footer />
    </div>
  );
};

export default ContactUs;
