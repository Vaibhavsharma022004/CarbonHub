// src/components/Profile.js
import { useState, useEffect, useRef } from "react";
import "./Profile.css";
import avatarImage from "../../Assets/Avatar Image- ProfileSection.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import { app } from "../../firebase";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser.userData._id;
  const [file, setFile] = useState(null);
  const [filePerc, setFilePerc] = useState(0);
  const fileRef = useRef(null);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({
    firstNameProfile: "",
    lastNameProfile: "",
    avatar: "",
    dob: "",
    education: "",
    genderProfile: "",
    phoneNumberProfile: "",
    country: "",
    city: "",
    email: "",
    userId: userId,
  });
  console.log(formData);
  useEffect(() => {
    const fetchUserData = async () => {
      const userProfileData = await fetch(
        `http://localhost:8080/api/auth/profile/${currentUser.userData._id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const res = await userProfileData.json();
      console.log(res);
      if (res !== null) {
        // console.log(res.dob)
        const dateStr = res.dob;
        const date = new Date(dateStr);

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();

        const customFormattedDate = `${day}-${month}-${year}`;
        if (userProfileData.status === 200) {
          console.log(res);
          setFormData({
            firstNameProfile: res.firstNameProfile,
            lastNameProfile: res.lastNameProfile,
            avatar: res.avatar,
            emailProfile: res.emailProfile,
            dob: customFormattedDate,
            education: res.education,
            genderProfile: res.genderProfile,
            phoneNumberProfile: res.phoneNumberProfile,
            country: res.country,
            city: res.city,
          });
        }
      }
    };
      fetchUserData();
  }, []);

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileUpload = async (file) => {
    const storage = getStorage(app);
    const fileName = `${new Date().getTime()}-${file.name}`;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          default:
            break;
        }
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData((prevFormData) => ({
            ...prevFormData,
            avatar: downloadURL,
          }));
        });
      }
    );
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const parseRes = await response.json();
      console.log(parseRes);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div>
      <Header />
      {/* Eclipse 1 */}
      <div className="eclipse1Profile"></div>

      {/* Profile Section */}
      <div className="profileDiv">
        <h1 className="profileHeading">Profile</h1>
        <div className="avatarAndName">
          <div className="imgDiv">
            <input
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              ref={fileRef}
              hidden
              accept="image/*"
            />
            <img
              onClick={() => fileRef.current.click()}
              src={formData.avatar || avatarImage}
              alt=""
              className="rounded-full h-24 w-24 object-cover
          cursor-pointer self-center mt-2"
            />
          </div>
          <div className="nameDiv">
            <h3 className="profileName">{currentUser.userData.username}</h3>
            <p className="profilePara">
              Your account is ready, you can now update it!
            </p>
          </div>
        </div>

        {/* Input Fields */}
        <div className="inputFields">
          <div className="row1">
            <div className="fNameDiv">
              <p className="firstNameProfile">First Name</p>
              <input
                type="text"
                id="firstNameProfile"
                placeholder="Enter Your Name"
                defaultValue={formData.firstNameProfile}
                onChange={handleChange}
              />
            </div>
            <div className="lNameDiv">
              <p className="lastNameProfile">Last Name</p>
              <input
                type="text"
                id="lastNameProfile"
                placeholder="Enter Your Surname"
                defaultValue={formData.lastNameProfile}
                onChange={handleChange}
              />
            </div>
            <div className="emailDiv">
              <p className="emailProfile">Email</p>
              <input
                type="email"
                id="emailProfile"
                placeholder="Enter Your Email"
                defaultValue={currentUser.userData.emailProfile}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />

          <div className="row2Profile">
            <div className="genderDiv">
              <p className="genderProfile">Gender</p>
              <select
                id="genderProfile"
                onChange={handleChange}
                value={formData.genderProfile}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="phoneDiv">
              <p className="phoneNum">Phone Number</p>
              <input
                type="tel"
                id="phoneNumberProfile"
                placeholder="Your Phone Number"
                defaultValue={formData.phoneNumberProfile}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />

          <div className="row3">
            <div className="dobDiv">
              <p className="dobHead">Date of Birth</p>
              <input
                type="text"
                id="dob"
                placeholder="05-12-2003"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
            <div className="countryDiv">
              <p className="countryName">Choose Your Country</p>
              <input
                type="text"
                id="country"
                placeholder="Your Country"
                defaultValue={formData.country}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />

          <div className="row4">
            <div className="eduDiv">
              <p className="education">Education Level</p>
              <input
                type="text"
                id="education"
                placeholder="Your Highest Qualification"
                defaultValue={formData.education}
                onChange={handleChange}
              />
            </div>
            <div className="cityDiv">
              <p className="city">City</p>
              <input
                type="text"
                id="city"
                placeholder="Your City"
                defaultValue={formData.city}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="saveButtonDiv">
          <button className="saveButton" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>

      {/* Eclipse 2 */}
      <div className="eclipse2Profile"></div>
      <Footer />
    </div>
  );
};

export default Profile;
