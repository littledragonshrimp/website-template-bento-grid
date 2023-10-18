import React from "react";
import { useState } from "react";

function Hamburger() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleClick = (e) => {
    setHamburgerOpen(!hamburgerOpen);
  };

  //   const handleClick = (e) => {
  //     e.preventDefault();
  //     console.log("hamburger menu clicked");
  //   };

  return (
    <button onClick={handleClick} className="hamburger">
      <div className="burger burger1"></div>
      <div className="burger burger2"></div>
      <div className="burger burger3"></div>
    </button>
  );
}

export default Hamburger;
