import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./FAQ.css";

function FAQ() {
  return (
    <div>
      <Header />
      <div class="eclipse1stFAQ"></div>

      <div class="Service3FAQ">
        <h1 class="heading1">FAQs</h1>
        <h3 class="heading2">
          What is a carbon footprint, and why is it important to calculate it?
        </h3>
        <p class="para3">
          A carbon footprint measures the total amount of greenhouse gases,
          particularly carbon dioxide (CO2), emitted directly or indirectly by
          human activities. It's crucial to calculate it because understanding
          our carbon footprint helps us identify areas where we can reduce
          emissions and make more sustainable choices.
        </p>
        <h3 class="heading2">
          {" "}
          How does CarbonHub calculate my carbon footprint?
        </h3>
        <p class="para3">
          CarbonHub utilizes advanced algorithms and data analysis techniques to
          calculate your carbon footprint based on various factors such as
          energy consumption, transportation habits, waste generation, and
          lifestyle choices. Our goal is to provide you with an accurate
          assessment of your environmental impact.
        </p>

        <h3 class="heading2">What are carbon offsets, and how do they work?</h3>
        <p class="para3">
          Carbon offsets are investments in projects that reduce or remove
          greenhouse gas emissions from the atmosphere, such as reforestation
          initiatives, renewable energy projects, and methane capture programs.
          By purchasing carbon offsets, individuals and businesses can balance
          out their own carbon emissions and support sustainability efforts
          globally.
        </p>
        <h3 class="heading2">
          How do I offset my carbon emissions through CarbonHub?
        </h3>
        <p class="para3">
          CarbonHub offers a range of offsetting solutions in collaboration with
          reputable NGOs and environmental organizations. Once you calculate
          your carbon footprint using our platform, you can choose from a
          selection of offsetting projects that align with your values and
          preferences. Simply select the projects you wish to support, and we'll
          facilitate the offsetting process on your behalf.
        </p>
        <h3 class="heading23">
          Can businesses and organizations use CarbonHub's services?
        </h3>
        <p class="para3">
          Absolutely! CarbonHub offers tailored solutions for businesses and
          organizations looking to calculate, reduce, and offset their carbon
          emissions. Whether you're a small startup or a large corporation, we
          can help you implement sustainable practices and support your
          sustainability goals.
        </p>
      </div>

      <div class="eclipse2ndFAQ"></div>

      <Footer />
    </div>
  );
}

export default FAQ;
