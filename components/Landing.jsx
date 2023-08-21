import React from 'react'
import '../src/Landing.scss'
import Div3LandingBlock from './Div3-landing-block.jsx'

function Landing() {
    return (
        <>
            <div className="landing-container">
                <a href=""></a>
                <a className="div1 landing-block" href="#"><span className="block-text"><h2>Join a Program</h2><p>We educate, empower, and inspire students to take action and achieve long lasting environmental impact in their schools and communities today, while developing the skills to lead future environmental change.
                    Free to all students, educators, and schools.</p></span><img src="../src/assets/images/forest2.jpg" alt="" srcset="" /></a>
                <a className="div2 landing-block" href="#"><span className="block-text"><h2>What We Do</h2><p>Get involved free for students and teachers</p></span><img src="../src/assets/images/forest.jpg" alt="" srcset="" /></a>
                {/* <div className="div2 landing-block"><span className='div2-text'>Div 2 section</span><img src="../src/assets/images/forest.jpg" /></div> */}
                <Div3LandingBlock />
                {/* <div className="div3 landing-block">who</div> */}
                <div className="div4 landing-block">af</div>
                <div className="div5 landing-block"></div>
                <div className="div6 landing-block"></div>
                <div className="div7 landing-block"></div>
                <div className="div8 landing-block"></div>
                <div className="div9 landing-block"></div>
            </div>
        </>
    )
}

export default Landing