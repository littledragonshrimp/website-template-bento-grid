import React from "react";
import RCFBlock from "./RCFBlock";

const RCF1Blocks = [
  {
    title: "LEE’S SUMMIT",
    sqFt: "",
    address: "1440 NE Douglas, Lee’s Summit, MO 64086",
    link: "/team",
    content1:
      "Ground up development of 751 unit Self-Storage facility in Lee’s Summit, MO",
    content2: "",
    imgSrc: "../src/assets/images/forest2.jpg",
    imgSrc2: "",
    blockNumber: 1,
  },
  {
    title: "HIDDEN GROVE",
    sqFt: "232,389 SF",
    address: "12404 Park Central Drive, Dallas, TX 75251",
    link: "/team",
    content1:
      "Hidden Grove is a modern, Class A office building with a unique park-like setting in Dallas' Park Central district. The property is comprised of a four-story office building constructed above 2.5 levels of garage parking.",
    content2: "",
    imgSrc: "../src/assets/images/forest2.jpg",
    imgSrc2: "",
    blockNumber: 1,
  },
  {
    title: "PRESTON GROVE (Formerly Danari Office Park)",
    sqFt: "111,268 SF",
    address: "15150 Preston Rd, 6009 & 6029 Belt Line Rd, Dallas, TX 75254",
    link: "/team",
    content1:
      "Preston Grove is a 3 building complex that sits on 5.86 acres of heavily landscaped land. The 111,286 SF complex is situated at the NEC of Preston Road and Beltline in the prestigious neighborhood of North Dallas.",
    content2: "",
    imgSrc: "../src/assets/images/forest2.jpg",
    imgSrc2: "",
    blockNumber: 1,
  },
  {
    title: "Sold Test",
    sqFt: "229,907 SF",
    address: "1701 South IH-45, Hutchins, TX 75141",
    link: "/team",
    content1:
      "Class-A Industrial development with frontage on Interstate 45 in South Dallas.",
    content2: "",
    imgSrc: "../src/assets/images/forest2.jpg",
    imgSrc2: "",
    blockNumber: 1,
  },
];

function Sold({ title, content, link, imgSrc, blockNumber }) {
  return (
    <>
      <h2 className="portfolio-subtitle">Sold Properties</h2>
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

export default Sold;
