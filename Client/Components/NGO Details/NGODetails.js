import React from 'react';
import './NGODetails.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// Importing images
import DetailImage1 from '../../Assets/NGO Details/detail Image1.png';
import DetailImage2 from '../../Assets/NGO Details/detail Image2.png';
import DetailImage3 from '../../Assets/NGO Details/detail Image3.png';
import DetailImage4 from '../../Assets/NGO Details/detail Image4.png';

const NGODetails = () => {
  return (
    <div>
        <Header/>

      <div className="eclipse1stDetail"></div>

      <div className="detailMainDiv">
        <div className="detailDiv odd">
          <img src={DetailImage1} alt="Green Yatra" className="detailImage" />
          <div className="detailText">
            <h2 className="detailHeading">Green Yatra</h2>
            <p className="detailPara">
              Green Yatra organizes nationwide tree plantation drives, contributing significantly to carbon sequestration and biodiversity conservation in India. Through their efforts, they aim to combat climate change and promote sustainable environmental practices.
            </p>
          </div>
        </div>
        <div className="horizontalLineDetail">
          <div className="dot1"></div>
          <div className="hrLineDetail"></div>
          <div className="dot2"></div>
        </div>
        <div className="detailDiv even">
          <div className="detailText">
            <h2 className="detailHeading">TERI (The Energy and Resources Institute)</h2>
            <p className="detailPara">
              TERI conducts afforestation projects across India, bolstering carbon sequestration efforts and promoting sustainable land use practices to mitigate climate change. Their initiatives aim to restore ecosystems, enhance biodiversity, and foster resilience against environmental challenges.
            </p>
          </div>
          <img src={DetailImage2} alt="TERI" className="detailImage" />
        </div>
        <div className="horizontalLineDetail">
          <div className="dot1"></div>
          <div className="hrLineDetail"></div>
          <div className="dot2"></div>
        </div>
        <div className="detailDiv odd cleanClear">
          <img src={DetailImage3} alt="Clean Air Asia India" className="detailImage" />
          <div className="detailText">
            <h2 className="detailHeading">Clean Air Asia India</h2>
            <p className="detailPara">
              Clean Air Asia India is actively engaged in urban forestry initiatives, facilitating tree plantation drives in cities to improve air quality and mitigate carbon emissions. Through their efforts, they aim to create green spaces, enhance biodiversity, and promote healthier environments in urban areas.
            </p>
          </div>
        </div>
        <div className="horizontalLineDetail">
          <div className="dot1"></div>
          <div className="hrLineDetail"></div>
          <div className="dot2"></div>
        </div>
        <div className="detailDiv even">
          <div className="detailText">
            <h2 className="detailHeading">Indian Green Service (IGS)</h2>
            <p className="detailPara">
              Indian Green Service (IGS) conducts extensive tree plantation campaigns across India, focusing on carbon sequestration and environmental conservation. Through community engagement and corporate partnerships, they work to offset carbon emissions and promote sustainable practices for a greener future.
            </p>
          </div>
          <img src={DetailImage4} alt="Indian Green Service" className="detailImage" />
        </div>
      </div>

      <div className="eclipse2ndDetail"></div>
      <Footer/>

    </div>
  );
};

export default NGODetails;
