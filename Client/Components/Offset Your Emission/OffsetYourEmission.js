// src/components/OffsetYourEmission.js
import React from 'react';
import './OffsetYourEmission.css'; // Make sure to create and update this CSS file
import Offset1 from "../../Assets/OffsetEmmision Images copy/calcFootprint.png";
import Offset2 from "../../Assets/OffsetEmmision Images copy/offset.png";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';


const OffsetYourEmission = () => {
  return (
    <div>
        <Header/>
      <div className="eclipse1stOffset"></div>

    <div className="offsetBigDiv">
      {/* Div for images */}
      <div className="offsetImageDiv">
          <Link to="/CalculateFootprint">
            <img src={Offset1} alt="Calculate Your Footprint" />
          </Link>
  
          <Link to="/NGOandTree">
            <img className='offsetImage2' src={Offset2} alt="Offset Your Emission" />
          </Link>
        
      </div>

      {/* Eclipse 2 */}
      <div className="eclipse2ndOffset"></div>
    </div>
    <Footer/>
    </div>
  );
};

export default OffsetYourEmission;
