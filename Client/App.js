import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landing Page/Landing";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Service from "./components/ServicesPage/service";
import Feature from "./components/Feature/Feature";
import FAQ from "./components/FAQ/FAQ";
import Profile from "./components/Profile/Profile";
import OffsetYourEmission from "./components/OffsetYourEmission/OffsetYourEmission";
import CalculateFootprint from "./components/CalculateFootprint/CalculateFootprint";
import NGOandTree from "./components/NGOandTree/NGOandTree";
import NGODetails from "./components/NGODetails/NGODetails";
import ContactUs from "./components/ContactUs/ContactUs";
import PrivateRoute from "./components/PrivateRoute";
import NGOProfile from "./components/NGO Profile/NGOProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/service" element={<Service />} />
          <Route path="/Feature" element={<Feature />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path ="/NgoProfile" element={<NGOProfile/>}/>
          <Route element={<PrivateRoute />}>
            <Route path="/Profile" element={<Profile />} />
            <Route path="/OffsetYourEmission" element={<OffsetYourEmission />} />
            <Route path="/CalculateFootprint" element={<CalculateFootprint />} />
            <Route path="/NGOandTree" element={<NGOandTree />} />
            <Route path="/NGODetails" element={<NGODetails />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
