import React from "react";
import "./Product.css";
import cart from "../Images/Cartclothe3.jpg";

function Product() {
  return (
    <div className="product">
      <div className="image3">
        <img src={cart}></img>
      </div>
      <div className="heading3">
        <div className="plain">
          <h2>Plain T-Shirt</h2>
          <p id="numb">$49.00</p>
          <p>
            A classic t-shirt never goes out of style. This is our most premium
            collection of shirt. This plain white shirt is made up of pure
            cotton and has a premium finish.
          </p>
        </div>
        <div className="formwrap">
          <form className="form1">
            <label for="Sizes">Select </label>
            <select name="Sizes">
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </form>
          <form className="form1">
            <input type="Number" placeholder="Select number"></input>
          </form>
          <button className="btnadd">Add To Cart</button>
          <p>Category: Men, Polo, Casual</p>
          <p>Tags: Modern, Design, Cotton</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
