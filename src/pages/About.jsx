import React from "react";
import Difference from "../components/Difference";

function About() {
  const landingBlocks = [
    {
      title: "One",
      content: "Block One",
      link: "/Team",
      imgSrc: "../src/assets/images/forest2.jpg",
      blockNumber: 1,
    },
    {
      title: "Two",
      content: "Block Two",
      link: "https://e.givesmart.com/events/qBV/",
      imgSrc: "../src/assets/images/forest2.jpg",
    },
    {
      title: "Three",
      content: "Block Three",
      link: "/About",
      imgSrc: "../src/assets/images/forest2.jpg",
    },
    {
      title: "Four",
      content: "Block Four",
      link: "/impact",
      imgSrc: "../src/assets/images/forest.jpg",
    },
    {
      title: "Five",
      content: "Block Six",
      link: "/about",
      imgSrc: "../src/assets/images/forest.jpg",
    },
    {
      title: "Six",
      content: "Block Six",
      link: "/about",
      imgSrc: "../src/assets/images/forest.jpg",
    },
    {
      title: "Seven",
      content: "Other",
      link: "/about",
      imgSrc: "../src/assets/images/forest.jpg",
    },
    {
      title: "Eight",
      content: "Block Eight",
      link: "/about",
      imgSrc: "../src/assets/images/forest.jpg",
    },
    {
      title: "Nine",
      content: "three",
      link: "/about",
      imgSrc: "../src/assets/images/forest.jpg",
    },
  ];
  return (
    <>
      <div className="landing-container">
        {landingBlocks.map((block, i) => {
          return (
            <>
              <LandingBlock
                title={block.title}
                content={block.content}
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

export default About;
