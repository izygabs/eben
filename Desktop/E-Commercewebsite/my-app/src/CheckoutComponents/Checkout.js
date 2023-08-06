import React from "react";
import "./Checkout.css";
import mage from "../Images/Frame834.png";

function Checkout() {
  return (
    <div className="body5">
      <div className="heading5">
        <div>
          <h2>Billing Details</h2>
          <div className="fullname">
            <p>Full Name</p>
            <input type="text" placeholder="John Doe"></input>
          </div>
          <div className="fullname">
            <p>Street address</p>
            <input
              type="text"
              placeholder="House number and street name"
            ></input>
          </div>
          <div className="fullname">
            <p>Town/City</p>
            <input type="text" placeholder="Lagos city"></input>
          </div>
          <div className="fullname">
            <p>Phone number</p>
            <input type="text" placeholder="+234....."></input>
          </div>
          <div className="fullname">
            <p>Email address</p>
            <input type="email" placeholder="johndoe@gmail.com"></input>
          </div>
        </div>
        <div className="heading6">
          <div className="image5">
            {/* <img></img> */}
            <p>Plain T-Shirt</p>
            <p>$49</p>
          </div>
          <div className="image5">
            {/* <img></img> */}
            <p>Jeans</p>
            <p>$60</p>
          </div>
          <div className="image5">
            <p>Subtotal:</p>
            <p>$109</p>
          </div>
          <div className="image5">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className="image5">
            <p>Total:</p>
            <p>$109</p>
          </div>
          <div className="bank">
            <div>
              <input type="radio" name="membership" value="simple" checked />
              <span>Bank</span>
            </div>
            <img src={mage}></img>
          </div>
          <div className="cash">
            <input type="radio" name="membership" value="simple" checked />
            Cash on delivery
          </div>
          <button>PLace order</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
