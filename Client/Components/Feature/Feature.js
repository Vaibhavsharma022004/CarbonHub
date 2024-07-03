import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Feature.css";

function Feature() {
  return (
    <div>
      <Header />
      <div class="eclipse1stFeature"></div>

      <div class="serviceMainDiv">
        <h1 class="heading1">Features</h1>
        <h3 class="heading2">Carbon Footprint Tracking:</h3>
        <p class="para">
          Allow users to track their carbon footprint over time, enabling them
          to monitor their progress and identify areas for improvement.
        </p>
        <h3 class="heading2">Interactive Carbon Reduction Challenges:</h3>
        <p class="para">
          Create gamified challenges or campaigns that encourage users to reduce
          their carbon footprint through friendly competition and rewards.
        </p>

        <h3 class="heading2">Carbon Offset Marketplace: </h3>
        <p class="para">
          Offer a marketplace where users can browse and purchase carbon offsets
          directly, supporting a variety of verified projects and initiatives.
        </p>
        <h3 class="heading2">Carbon Footprint API:</h3>
        <p class="para">
          Develop an API that allows other websites, apps, and organizations to
          integrate CarbonHub's carbon footprint calculation and offsetting
          services into their platforms, expanding reach and impact.
        </p>
        <h3 class="heading2">Partnership Programs:</h3>
        <p class="para">
          Collaborate with businesses, universities, and other institutions to
          develop partnership programs that promote sustainability and carbon
          reduction efforts on a larger scale.
        </p>
      </div>

      <div class="eclipse2ndFeature"></div>

      <Footer />
    </div>
  );
}

export default Feature;
