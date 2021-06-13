import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-area">
      <button type="button" className="btn">
        Login
      </button>
      <button type="button" className="btn">
        Sign up
      </button>
    </div>
  );
}

export default NavBar;
