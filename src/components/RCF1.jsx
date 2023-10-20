import React from "react";
import RCFBlock from "./RCFBlock";

const RCF1Blocks = [
  {
    title: "TWO COLINAS CROSSING",
    sqFt: "181,072 SF",
    address: "11511 Luna Rd, Farmers Branch, TX 75234",
    link: "/team",
    content1:
      "Two Colinas Crossing located at 11511 Luna Road in Farmers Branch, Texas. Two Colinas is home to major corporate tenants such as IBM, S&P Global, BBVA and Home Point Financial.",
    content2: "",
    imgSrc: "../src/assets/images/RCF1/twoColinas.jpeg",
    imgSrc2: "",
  },
  {
    title: "GE TRANSPORTATION BUILDING",
    sqFt: "191,500 SF",
    address: "1990 West Nasa Blvd, Melbourne, FL 32904",
    link: "/team",
    content1:
      "This three story 191,500 SF building is located on the Melbourne International Airport and it is 100% occupied by GE Transportation.",
    content2: "",
    imgSrc: "../src/assets/images/RCF1/GE.jpeg",
    imgSrc2: "",
  },
  {
    title: "LAWRENCE SELF-STORAGE",
    sqFt: "626 Units",
    address: "1717 W 31st Street, Lawrence, KS 66046",
    link: "/team",
    content1:
      "Expansion of an existing self-storage facility in Lawrence, KS. Upon completion, the project will comprise 626 units, 59% of which will be climate-controlled.",
    content2: "",
    imgSrc: "../src/assets/images/RCF1/lawrence.jpeg",
    imgSrc2: "",
  },
  {
    title: "MANSFIELD INDUSTRIAL",
    sqFt: "130,000 SF",
    address: "1717 W 31st Street, Lawrence, KS 66046",
    link: "/team",
    content1: "4-building industrial development in Mansfield, Texas.",
    content2: "",
    imgSrc: "../src/assets/images/RCF1/mansfield.jpeg",
    imgSrc2: "",
  },
];

function RCF1({ title, content, link, imgSrc, blockNumber }) {
  return (
    <>
      <h2>RESERVE CAPITAL FUND II PORTFOLIO</h2>
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

export default RCF1;
