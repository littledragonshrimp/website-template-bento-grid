import React from "react";
import LandingBlock from "../components/LandingBlock";

import forest2 from "../assets/images/forest2.jpg";

function Team() {
  const teamBlocks = [
    {
      title: "BRANT LANDRY",
      content: "Partner",
      link: "",
      imgSrc: "../src/assets/images/forest2.jpg",
      blockNumber: 1,
    },
    {
      title: "RACHEL MCCREADY ",
      content: "Chief Operating Officer",
      link: "",
      imgSrc: "../src/assets/images/forest2.jpg",
    },
    {
      title: "JAMISON BERRYHILL",
      content: "VICE PRESIDENT OF DEVELOPMENT",
      link: "/team",
      imgSrc: "../src/assets/images/forest2.jpg",
    },
    {
      title: "MATT WALDON",
      content: "VICE PRESIDENT LEASING",
      link: "/team",
      imgSrc: "../src/assets/images/forest2.jpg",
    },
    {
      title: "DAVID GUMBERT",
      content: "SENIOR ANALYST",
      link: "/team",
      imgSrc: "../src/assets/images/forest2.jpg",
    },
    {
      title: "EDDIE",
      content: "SENIOR ANALYST",
      link: "/team",
      imgSrc: "../src/assets/images/forest2.jpg",
    },
    {
      title: "KRISTEN SCHWARTZ",
      content: "DIRECTOR OF PROPERTY MANAGEMENT",
      link: "/team",
      imgSrc: "../src/assets/images/forest2.jpg",
    },
    {
      title: "DEBBIE LANDRY",
      content: "OFFICE MANAGER",
      link: "/team",
      imgSrc: "../src/assets/images/forest2.jpg",
    },
    {
      title: "GREG ASHTON",
      content: "SENIOR PROPERTY MANAGER",
      link: "/team",
      imgSrc: "../src/assets/images/forest2.jpg",
    },
    {
      title: "KRISTEN SCHWARTZ",
      content: "DIRECTOR OF PROPERTY MANAGEMENT",
      link: "/team",
      imgSrc: "../src/assets/images/forest2.jpg",
    },
    {
      title: "LAURA ELIZONDO",
      content: "SENIOR PROPERTY ACCOUNTANT",
      link: "/team",
      imgSrc: "../src/assets/images/forest2.jpg",
    },
    {
      title: "ANNABEL VALADEZ",
      content: "CORPORATE ACCOUNTANT",
      link: "/team",
      imgSrc: "../src/assets/images/forest2.jpg",
    },
    {
      title: "JENNIFER URIEGA",
      content: "ADMINISTRATOR OF PROPERTY MANAGEMENT",
      link: "/team",
      imgSrc: "../src/assets/images/forest2.jpg",
    },
    {
      title: "LARRY GARZA",
      content: "ASSISTANT DIRECTOR OF ENGINEERING",
      link: "/team",
      imgSrc: "../src/assets/images/forest2.jpg",
    },
  ];
  return (
    <>
      <div className="teamHero">
        {/* <img src={forest2} alt="" srcset="" /> */} {/*hero image*/}
        <h1>MEET OUR TEAM </h1>
        <p>
          We provide direct commercial real estate investment access to
          industrial, self-storage and office asset classes. We do this through
          a general partner real estate investment platform.
        </p>
      </div>
      <div className="landing-container">
        {teamBlocks.map((block, i) => {
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

export default Team;
