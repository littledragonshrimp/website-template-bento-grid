import React from "react";
import RCFBlock from "./RCFBlock";
const RCF1Blocks = [
  {
    title: "I-45 LOGISTICS CENTER",
    sqFt: "229,907 SF",
    address: "1701 South IH-45, Hutchins, TX 75141",
    link: "/team",
    content1:
      "Class-A Industrial development with frontage on Interstate 45 in South Dallas.",
    content2: "",
    imgSrc: "../src/assets/images/RCF2/i45logistics.jpeg",
    imgSrc2: "../src/assets/images/RCF2/i45logistics2.jpeg",
    blockNumber: 1,
  },
  {
    title: "MARQUIS LOGISTICS CENTER",
    sqFt: "194,019 SF",
    address: " 3301 + 3325 Marquis Drive, Garland, TX 75042",
    link: "/team",
    content1: "Industrial development consisting of two buildings:",
    content2: "Building One is 119,261 SF / Building Two is 74,758 SF",
    imgSrc: "../src/assets/images/RCF2/marquis.jpeg",
    imgSrc2: "../src/assets/images/RCF2/marquis2.jpeg",
  },
  {
    title: "THE RESERVE AT WESTOVER HILLS",
    sqFt: "272,212 SF",
    address: "9903 Nationwide Drive, San Antonio, TX 78251",
    link: "/team",
    content1:
      "The Reserve at Westover Hills is a modern, Class A office campus that sprawls over 30 acres in San Antonio, TX. The property is undergoing renovations to the common areas to update the look and feel of the building. This project is expected to be completed in Q1 2023.",
    content2: "",
    imgSrc: "../src/assets/images/RCF2/reserveWestover.jpeg",
    imgSrc2: "",
  },
  {
    title: "CRESTVIEW TOWER",
    sqFt: "262,962 SF",
    address: "105 Decker Court, Irving, TX 75062",
    link: "/team",
    content1:
      "Crestview Tower is a 12-story Class A office tower in Las Colinas located on 10 acres. Reserve Capital plans to complete $1.8mm of additional capital expenditures to cosmetic and back of house items.",
    content2: "",
    imgSrc: "../src/assets/images/RCF2/crestview.jpeg",
    imgSrc2: "",
  },
  {
    title: "WOODSWETHER",
    sqFt: "749 units",
    address: "700 Woodswether Road, Kansas City, MO",
    link: "/team",
    content1:
      "Construction of a new self-storage facility in Kansas City, MO. Upon completion, the project will be comprised of 749 climate-controlled units.",
    content2: "",
    imgSrc: "../src/assets/images/RCF2/woodswether.jpeg",
    imgSrc2: "",
  },
];

function RCF2({ title, content, link, imgSrc, blockNumber }) {
  return (
    <>
      <h2>RESERVE CAPITAL FUND I PORTFOLIO</h2>
      <div className="landing-container">
        {RCF1Blocks.map((block, i) => {
          return (
            <>
              <RCFBlock
                title={block.title}
                address={block.address}
                sqFt={block.sqFt}
                content1={block.content1}
                link={block.link}
                imgSrc={block.imgSrc}
                blockNumber={i + 1}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default RCF2;
