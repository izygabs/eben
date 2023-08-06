import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">
          <span className="shoplink"> SHOP</span>
        </Link>
        {/* <Link to="/contact"> Contact </Link> */}
        <Link to="/cart">
          <span className="shoplink">
            C
            <ShoppingCart size={20} />
            RT
          </span>
        </Link>
      </div>
    </div>
  );
};
