import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./CalculateFootprint.css";

function CalculateFootprint() {
  const [formData, setFormData] = useState({
    totalTubelight: "",
      tubelightTime: "",
      totalFan: "",
      fanTime: "",
      totalAC: "",
      acTime: "",
      totalRefrigerator: "",
      refrigeratorTime: "",
      totalGeyser: "",
      geyserTime: "",
      totalWashingMachine: "",
      washingMachineTime: "",
      totalMicrowave: "",
      microwaveTime: "",
      petrol: "",
      diesel: "",
      lpg: "",
      organicWaste: "",
      trees : "",
      maxPower :""
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  useEffect(() => {
    formData.maxPower =
      formData.totalTubelight * formData.tubelightTime * 0.02 +
      formData.totalFan * formData.fanTime * 0.075 +
      formData.totalAC * formData.acTime * 1.65 +
      formData.totalRefrigerator * formData.refrigeratorTime * 0.2 +
      formData.totalGeyser * formData.geyserTime * 1.16 +
      formData.totalWashingMachine * formData.washingMachineTime * 0.7 +
      formData.totalMicrowave * formData.microwaveTime * 1.2;
    document.getElementById("totalPower").value = formData.maxPower;
    // formData.maxPower = totalPower;
    const totalCarbon =
      formData.petrol * 2.31 +
      formData.diesel * 2.68 +
      formData.organicWaste * 0.18 +
      formData.lpg * 2.98 +
      formData.maxPower * 0.82 * 7;
    document.getElementById("totalCarbon").value = totalCarbon;
  });

  const clearFormData = () => {
    setFormData({
      totalTubelight: "",
      tubelightTime: "",
      totalFan: "",
      fanTime: "",
      totalAC: "",
      acTime: "",
      totalRefrigerator: "",
      refrigeratorTime: "",
      totalGeyser: "",
      geyserTime: "",
      totalWashingMachine: "",
      washingMachineTime: "",
      totalMicrowave: "",
      microwaveTime: "",
      petrol: "",
      diesel: "",
      lpg: "",
      organicWaste: "",
      trees : "",
      maxPower : ""
    });
    
    document.getElementById("totalPower").value = 0;
    document.getElementById("totalCarbon").value = 0;
  };
  
  const handleSubmit = async() =>{
    const totalCarbon = document.getElementById("totalCarbon").value;
    const trees = document.getElementById("trees").value;
    console.log(totalCarbon, trees);
    const response = await fetch("http://localhost:8080/api/calculate/cal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({totalCarbon,trees})
    });
    const result = await response.json();
    console.log(result);
  }

  return (
    <div>
      <Header />
      <div className="eclipse1Calculate"></div>

      <div className="Service1">
        <h1 className="heading1">Calculate Your Footprints</h1>
        <div className="title">Total Power :</div>
        <div className="input-group">
          <input
            className="input-box"
            placeholder="Total Tubelight"
            id="totalTubelight"
            value={formData.totalTubelight}
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <input
            className="input-box"
            placeholder="Tubelight Time"
            id="tubelightTime"
            value={formData.tubelightTime}
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <span className="constant">0.02</span>
          <span className="operator">+</span>
          <input
            className="input-box"
            placeholder="Total Fan"
            id="totalFan"
            value={formData.totalFan}
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <input
            className="input-box"
            placeholder="Fan Time"
            id="fanTime"
            value={formData.fanTime}
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <span className="constant">0.075</span>
          <span className="operator">+</span>
        </div>
        <div className="input-group">
          <input
            className="input-box"
            placeholder="Total AC"
            id="totalAC"
            value={formData.totalAC}
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <input
            className="input-box"
            placeholder="AC Time"
            id="acTime"
            value={formData.acTime}
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <span className="constant">1.65</span>
          <span className="operator">+</span>
          <input
            className="input-box"
            placeholder="Total Refrigerator"
            id="totalRefrigerator"
            value={formData.totalRefrigerator}
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <input
            className="input-box"
            placeholder="Refrigerator Time"
            id="refrigeratorTime"
            value={formData.refrigeratorTime}
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <span className="constant">0.20</span>
          <span className="operator">+</span>
        </div>
        <div className="input-group">
          <input
            className="input-box"
            placeholder="Total Geyser"
            id="totalGeyser"
            value={formData.totalGeyser}
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <input
            className="input-box"
            placeholder="Geyser Time"
            id="geyserTime"
            value={formData.geyserTime}
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <span className="constant">1.16</span>
          <span className="operator">+</span>
          <input
            className="input-box"
            placeholder="Total Washing Machine"
            id="totalWashingMachine"
            value={formData.totalWashingMachine}
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <input
            className="input-box"
            placeholder="Washing Machine Time"
            id="washingMachineTime"
            value={formData.washingMachineTime}
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <span className="constant">0.70</span>
          <span className="operator">+</span>
        </div>
        <div className="input-group">
          <input
            className="input-box"
            placeholder="Total Microwave"
            id="totalMicrowave"
            value={formData.totalMicrowave}
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <input
            className="input-box"
            placeholder="Microwave Time"
            id="microwaveTime"
            value={formData.microwaveTime}
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <span className="constant">1.2</span>
          <span className="operator">=</span>
          <input
            className="result-box"
            placeholder="Total Power Consumption from Electric Appliances"
            id="totalPower"
            value="0"
          />
        </div>

        <div className="title2">Total Carbon Emission :</div>
        <div className="input-group">
          <input
            className="input-box"
            placeholder="Petrol"
            id="petrol"
            value={formData.petrol}
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <span className="constant">2.31</span>
          <span className="operator">+</span>
          <input
            className="input-box"
            placeholder="Diesel"
            id="diesel"
            value={formData.diesel}
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <span className="constant">2.68</span>
          <span className="operator">+</span>
        </div>
        <div className="input-group">
          <input
            className="input-box"
            placeholder="LPG"
            id="lpg"
            value={formData.lpg}
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <span className="constant">2.98</span>
          <span className="operator">+</span>
          <input
            className="input-box"
            placeholder="Organic Waste"
            id="organicWaste"
            value={formData.organicWaste}
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <span className="constant">0.18</span>
          <span className="operator">+</span>
        </div>
        <div className="input-group">
          <input className="input-box" placeholder="Total Power" value={formData.maxPower} />
          <span className="operator">×</span>
          <span className="constant">0.82</span>
          <span className="operator">×</span>
          <span className="constant">7</span>
          <span className="operator">=</span>
          <input
            className="result-box2"
            placeholder="Emission of Carbon"
            id="totalCarbon"
            value="0"
          />
        </div>
        <div className="title2">Total Trees Planted :</div>
          <div className="input-group">
              <input
                className="input-box"
                placeholder="Trees"
                id="trees"
                value={formData.trees}
                onChange={handleChange}
              />
            </div>
        <div className="saveButtonDiv">
          <button className="saveButton" onClick={clearFormData}>
            Clear
          </button>
          <button className="saveButton" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>

      <div className="eclipse2Calculate"></div>
      <Footer />
    </div>
  );
}


export default CalculateFootprint;
