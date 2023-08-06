import React from "react";
import "./Login.css";
import image from "../Images/Cartclothe6-removebg-preview.png";

function Login() {
  return (
    <div className="body2">
      <div className="imagelogin">
        <img src={image} alt="" />
      </div>
      <div className="heading2">
        <h1>Login to Elegance</h1>
        <p>Enter your details below</p>
        <form className="form2">
          <input type="email" placeholder="Email or Phone Number"></input>
        </form>
        <form className="form2">
          <input type="password" placeholder="Password"></input>
        </form>
        <div className="btnlogin">
          <button>Login</button>
          <a href="Forgot Password">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
