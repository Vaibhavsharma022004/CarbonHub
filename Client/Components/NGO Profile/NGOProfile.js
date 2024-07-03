import { useState, useEffect, useRef } from "react";
import './NGOProfile.css';
import avatarImage from "../../Assets/Avatar Image- ProfileSection.png";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {useSelector} from 'react-redux';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase";
const NGOProfile = () => {
  const {currentUser} = useSelector((state) => state.user);
  const userId = currentUser.userData._id;
  const [file, setFile] = useState(null);
  const [filePerc, setFilePerc] = useState(0);
  const fileRef = useRef(null);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    Email: "",
    webLink: "",
    phone: "",
    desc: "",
    country: "",
    city: "",
    avatar :"",
    orgId : userId
  })
  // console.log(formData);

  useEffect(() => {
    const fetchUserData = async () => {
      const userProfileData = await fetch(
        `http://localhost:8080/api/auth/profile/ngo/${currentUser.userData._id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const res = await userProfileData.json();
      // console.log(res);
      if (res !== null) {
        if (userProfileData.status === 200) {
          // console.log(res.name);
          setFormData({
            name : res.name,
            webLink : res.website,
            desc : res.description,
            avatar: res.avatar,
            email: res.email,
            phone: res.phoneNumber,
            country: res.country,
            city: res.city,
          });
        }
      }
    };
      fetchUserData();
  }, []);



  const handleSubmit = async()=>{
    const res = await fetch("http://localhost:8080/api/auth/profile/ngo",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body : JSON.stringify(formData),
    })
    const data = await res.json();
    console.log(data);
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);


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



  return (
    <div>
        <Header/>
      {/* Eclipse 1 */}
      <div className="eclipse1"></div>

      {/* Profile Section */}
      <div className="profileDiv">
        <h1 className="profileHeading">Organization Profile</h1>
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
            <p className="profilePara">Your account is ready, you can now update it!</p>
          </div>
        </div>

        {/* Input Fields */}
        <div className="inputFields">
          <div className="row1">
            <div className="fNameDiv">
              <p className="firstName">Organization Name</p>
              <input type="text" id="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="emailDiv">
              <p className="email">Email</p>
              <input type="email" id="Email" value={currentUser.userData.email} placeholder="Enter Email" onChange={handleChange}/>
            </div>
          </div>
          <br />

          <div className="row2">
            <div className="genderDiv">
              <p className="gender">Website Link</p>
              <input type="text" id="webLink" value={formData.webLink} placeholder="Enter Website" onChange={handleChange}/>
            </div>
            <div className="phoneDiv">
              <p className="phoneNum">Phone Number</p>
              <input type="tel" id="phone" placeholder="Phone Number" value = {formData.phone} onChange={handleChange}/>
            </div>
          </div>
          <br />

          <div className="row3">
            <div className="dobDiv">
              <p className="dobHead">Description</p>
              <input type="tel" id="desc" placeholder="Description" className="desc" value={formData.desc} onChange={handleChange}/>
            </div>
            <div className="countryDiv">
              <p className="countryName">Choose Your Country</p>
              <input type="text" id="country" placeholder="Country" value={formData.country} onChange={handleChange}/>
            </div>
          </div>
          <br />

          <div className="row4">
            <div className="cityDiv">
              <p className="city">City</p>
              <input type="text" id="city" placeholder="City" value={formData.city} onChange={handleChange}/>
            </div>
          </div>
        </div>
        
        <div className="saveButtonDiv">
          <button className="saveButton" onClick={handleSubmit}>Save</button>
        </div>
      </div>

      {/* Eclipse 2 */}
      <div className="eclipse2"></div>
      <Footer/>
    </div>
  );
};

export default NGOProfile;
