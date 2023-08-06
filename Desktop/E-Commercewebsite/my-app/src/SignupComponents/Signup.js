import React from "react";
import "./Signup.css";
import image from "../Images/Cartclothe5-removebg-preview.png";
import icon from "../Images/Icon-Google.png";

function CreateAccount() {
  return (
    <div className="body">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="heading">
        <h1>Create an account</h1>
        <p>Enter your details below</p>
        <form className="form">
          <input type="text" placeholder="Name"></input>
        </form>
        <form className="form">
          <input type="email" placeholder="Email or Phone Number"></input>
        </form>
        <form className="form">
          <input type="password" placeholder="Password"></input>
        </form>
        <div className="btncreate">
          <button>Create Account</button>
        </div>
        <div className="btnsign">
          <button>
            <img src={icon}></img> Sign up with Google
          </button>
        </div>
        <div className="already">
          <p>
            Already have an account? <a href="Login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default CreateAccount;
