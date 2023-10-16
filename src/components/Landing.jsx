import React from "react";
import "../styles/Landing.scss";
import LandingBlock from "./LandingBlock.jsx";
import About from "../pages/About";
import Team from "../pages/Team";

function Landing() {
  const landingBlocks = [
    {
      title: "Join a Program",
      content:
        "We educate, empower, and inspire students to take action and achieve long lasting environmental impact in their schools and communities today, while developing the skills to lead future environmental change. With 1-on-1 guidance from our mentors, we can guide your team and help your team succeed",
      link: "/Programs",
      imgSrc: "../src/assets/images/forest2.jpg",
      blockNumber: 1,
    },
    {
      title: "VERTE 2023",
      content:
        "Save the Date! Have fun helping the environment on October 12, 2023 @ Optimist Studios, LA",
      link: "https://e.givesmart.com/events/qBV/",
      imgSrc: "../src/assets/images/forest2.jpg",
    },
    {
      title: "About Us",
      content:
        "Grades of Green provides students with the support and resources they need to take environmental action. Free for all students and teachers",
      link: "/About",
      imgSrc: "../src/assets/images/forest2.jpg",
    },
    {
      title: "Impact",
      content:
        "With over 670,000 students in 27 countries, 21+ million gallons of water conserved, and 12 Bills and Resolutions, see what makes Grades of Green stand out!",
      link: "/impact",
      imgSrc: "../src/assets/images/forest.jpg",
    },
    {
      title: "Meet Isaiah",
      content:
        "Isaiah worked on promoting local wildlife restoration, creating bird sanctuaries, and building water stations in his school.",
      link: "/about",
      imgSrc: "../src/assets/images/forest.jpg",
    },
    {
      title: "Meet St. Roza",
      content:
        "St. Roza won the first Water Campaign by developing mulching techniques to reduce water loss in their garden. They used their winnings to create a 40,000 litre well to help their community with water shortages.",
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
      title: "Our Supporters",
      content:
        "Thanks to our supporters, Grades of Green’s Eco-Leaders are taking control of their future. Our partners’ generous funding has helped hundreds of thousands of students protect the planet and change the world!",
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
              {/*  <a className={`div${i + 1} landing-block`} href={block.link}>
                             <span className="block-text">
                                 <h2>{block.title}</h2>
                                 <p>{block.content}</p>
                             </span>
                             <img src={block.imgSrc} alt=""></img>
                         </a> */}
            </>
          );
        })}
      </div>

      {/* <div className="landing-container">
                <a href=""></a>
                <a className="div1 landing-block" href="#"><span className="block-text"><h2>Join a Program</h2><p>We educate, empower, and inspire students to take action and achieve long lasting environmental impact in their schools and communities today, while developing the skills to lead future environmental change.
                    Free to all students, educators, and schools.</p></span><img src="../src/assets/images/forest2.jpg" alt="" srcset="" /></a>
                <a className="div2 landing-block" href="#"><span className="block-text"><h2>What We Do</h2><p>Get involved free for students and teachers</p></span><img src="../src/assets/images/forest.jpg" alt="" srcset="" /></a>
                {/* <div className="div2 landing-block"><span className='div2-text'>Div 2 section</span><img src="../src/assets/images/forest.jpg" /></div> */}
    </>
  );
}

export default Landing;
