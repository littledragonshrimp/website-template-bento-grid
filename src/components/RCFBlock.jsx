import React from "react";

function RCFBlock({
  title,
  sqFt,
  address,
  content,
  content1,
  content2,
  link,
  imgSrc,
  imgSrc2,
  blockNumber,
}) {
  return (
    <a
      className={`div${blockNumber} landing-block portfolio-block`}
      href={link}
    >
      <span className="block-text">
        <h2>{title}</h2>
        <p>{address}</p>
        <h4>{sqFt}</h4>
        <p>{content1}</p>
        <p>{content2}</p>
      </span>

      <img src={imgSrc} alt=""></img>
      <img src={imgSrc2} alt=""></img>
    </a>
  );
}

export default RCFBlock;
