import React from "react";
import "./Cart.css";

function Cart() {
  return (
    <div className="body4">
      <div>
        <div className="heading4">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
        <div className="image4">
          <p>Plain T-Shirt</p>
          <p>$49</p>
          <p>01</p>
          <p>$49</p>
        </div>
      </div>
      <div className="return">
        <button>Return to Shop</button>
      </div>
      <div className="card">
        <h4>Cart Total</h4>
        <div className="cardflex">
          <p>Subtotal:</p>
          <p>$49</p>
        </div>
        <div className="cardflex">
          <p>Shipping:</p>
          <p>Free</p>
        </div>
        <div className="cardflex">
          <p>Total:</p>
          <p>$49</p>
        </div>
        <button className="btnpro">Proceed to checkout</button>
      </div>
    </div>
  );
}

export default Cart;
