import React from 'react'
import '../styles/Landing.scss'
import LandingBlock from './LandingBlock.jsx'

function Landing() {
    const landingBlocks = [
        {
            title: "Join a Program",
            content: "We educate, empower, and inspire students to take action and achieve long lasting environmental impact in their schools and communities today, while developing the skills to lead future environmental change.",
            link: "google.com",
            imgSrc: "../src/assets/images/forest2.jpg",
            blockNumber: 1
        },
        {
            title: "two",
            content: "two",
            link: "google.com",
            imgSrc: "../src/assets/images/forest2.jpg",
        },
        {
            title: "blank",
            content: "three",
            link: "/about",
            imgSrc: "../src/assets/images/forest2.jpg",
        },
        {
            title: "Whoa",
            content: "three",
            link: "/about",
            imgSrc: "../src/assets/images/forest.jpg",
        },
        {
            title: "4ouasd",
            content: "three",
            link: "/about",
            imgSrc: "",
        },
        {
            title: "4ouasd",
            content: "three",
            link: "/about",
            imgSrc: "../src/assets/images/forest.jpg",
        },
        {
            title: "4ouasd",
            content: "three",
            link: "/about",
            imgSrc: "../src/assets/images/forest.jpg",
        },
        {
            title: "4ouasd",
            content: "three",
            link: "/about",
            imgSrc: "../src/assets/images/forest.jpg",
        },
        {
            title: "4ouasd",
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
    )
}

export default Landing