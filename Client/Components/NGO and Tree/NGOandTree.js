import React from 'react';
import './NGOandTree.css';
import TreePlanting from "../../Assets/treePlanting.png";
import NGOImage from "../../Assets/feedBackImage.png";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom'; 


const NGOandTree = () => {
  return (
    <div>
        <Header/>
      <div className="eclipse1stTree"></div>

      <div className="treeMainDiv">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="mainRectangle">
            <div className="smallRectangle"></div>
            <img src={TreePlanting} alt="Tree Planting" className="treeImage" />
            <div className="bottomPart">
              <p className="treeQty">Tree ( 100 )</p>
              <p className="treePrice">&#8377; 1499</p>
              <div className="horizontalLinee"></div>
              <p className="saving">Save - &#8377; 450</p>
            </div>
          </div>
        ))}
      </div>

      <div className="cardsDiv">
        {[...Array(2)].map((_, index) => (
          <Link to={'/NGODetails'}  key={index} className="card1">
            <img src={NGOImage} alt="Feedback" className="cardImage1" loading="lazy" />
            <div className="textDiv">
              <h2 className="cardHeading">NGO Name {index + 1}</h2>
              <p className="cardPara1st">
                Our work aims to break the vicious cycle of poverty and social isolation and to restore hope for a better future.
              </p>
              <div className="readMoreDiv">
                <p className="cardPara2">NGO {index + 1}</p>
                <button className="readMoreButton">Read More</button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="eclipse2ndTree"></div>
      <Footer/>
    </div>
  );
};

export default NGOandTree;
