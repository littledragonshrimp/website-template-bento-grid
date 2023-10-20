import React from "react";
import RCF1 from "../components/RCF1";
import RCF2 from "../components/RCF2";
import Sold from "../components/sold";

function Portfolio() {
  return (
    <>
      <div className="portfolioContainer">
        <h1>Portfolio</h1>
        <RCF1 />
        <RCF2 />
        <Sold />
      </div>
    </>
  );
}

export default Portfolio;
