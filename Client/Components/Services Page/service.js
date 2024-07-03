import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./service.css";

function Service() {
  return (
    <div>
      <Header />
      <div class="eclipse1st"></div>

      <div class="Service2">
        <h1 class="heading1">Our Services</h1>
        <h3 class="heading2">Carbon Emission Calculation:</h3>
        <p class="para2">
          At CarbonHub, we provide a sophisticated carbon emission calculator
          designed to accurately assess your carbon footprint. Our calculator
          takes into account various factors such as transportation, energy
          usage, and lifestyle choices to provide you with a comprehensive
          understanding of your environmental impact.
        </p>
        <h3 class="heading2">Offsetting Solutions:</h3>
        <p class="para2">
          CarbonHub offers a range of offsetting solutions to help you mitigate
          your carbon emissions. We collaborate with reputable NGOs specializing
          in environmental conservation to offer initiatives such as
          reforestation projects, renewable energy investments, and community
          empowerment programs. These initiatives are carefully selected to
          ensure maximum impact and alignment with your values.
        </p>

        <h3 class="heading2">NGO Partnerships:</h3>
        <p class="para2">
          We are proud to partner with leading NGOs dedicated to addressing
          climate change and promoting sustainability. Through these
          partnerships, CarbonHub is able to offer meaningful offsetting
          opportunities that support global efforts to reduce greenhouse gas
          emissions and protect the planet's ecosystems.
        </p>
        <h3 class="heading2">Customized Recommendations:</h3>
        <p class="para2">
          Our platform provides personalized recommendations based on your
          carbon footprint analysis. Whether it's suggesting energy-efficient
          upgrades for your home, promoting eco-friendly transportation options,
          or advocating for sustainable lifestyle changes, CarbonHub offers
          practical ideas tailored to your specific circumstances.
        </p>
        <h3 class="heading2">Education and Awareness: </h3>
        <p class="para2">
          CarbonHub is committed to raising awareness about the importance of
          carbon emissions reduction and environmental stewardship. Through
          educational resources, informative articles, and interactive tools, we
          empower individuals and organizations to make informed decisions and
          take proactive steps towards a more sustainable future.
        </p>
      </div>

      <div class="eclipse23"></div>

      <Footer />
    </div>
  );
}

export default Service;
