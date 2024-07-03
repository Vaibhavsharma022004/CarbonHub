import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { signOutUserStart, deleteUserFailure, deleteUserSuccess } from "../../redux/users/userSlice";
import { useDispatch } from "react-redux";
import "./Header.css";
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser, individual } = useSelector((state) => state.user);

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch("http://localhost:8080/api/auth/signout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure("Error signing out"));
    }
  };


  return (
    <>
      <header>
        <div className="navbar">
          {" "}
          <p className="logo">
            Carbon
            <span className="hub" style={{ color: "#4CAF4F" }}>
              Hub
            </span>
          </p>
          <div className="navbar-options">
            <Link to="/">Home</Link>
            <Link to="/service">Service</Link>
            <Link to="/Feature">Features</Link>
            <Link to="/FAQ">FAQ</Link>
            <Link to="/ContactUs">Contact Us</Link>
          </div>
            { currentUser == null ? (
            <div className="loginAndSignUp">
            <button className="login" onClick={() => navigate("/Login")}>
              Login
            </button>

            <button className="signup" onClick={() => navigate("/SignUp")}>
              Sign Up
            </button>
            </div> ):(
              <div className="loginAndSignUp">
              {individual ? (<button className="login" onClick={() => navigate("/Profile")}>
                Profile
              </button>) : (<button className="login" onClick={() => navigate("/NGOProfile")}>
                Profile
              </button>) }
  
              <button className="signup" onClick={handleSignOut}>
                Sign Out
              </button>
              </div>
            )
            }
        </div>
      </header>
    </>
  );
}

export default Header;
