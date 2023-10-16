import React from 'react'
import '/src/styles/Landing.scss'

function LandingBlock({ title, content, link, imgSrc, blockNumber }) {
    return (
        <a className={`div${blockNumber} landing-block`} href={link}>
            <span className="block-text">
                <h2>{title}</h2>
                <p>{content}</p>
            </span>

            <img src={imgSrc} alt=""></img>
        </a>
    )
}

export default LandingBlock;