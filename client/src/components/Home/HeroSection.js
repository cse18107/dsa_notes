import React from 'react'
import code from '../../images/code (1).png'
function HeroSection() {
    return (
<div className="hero-section">
            <div className="left-hero-section">
                <div className="hero-section-icon-logo">
                    <div className="logo-name">
                        <h1><span className="dsa">DSA</span><span className="notes">NOTES</span> </h1>
                    </div>
                    <div className="logo-para">
                        <p>practice data structure and algorithm, create your own set of question, save your own code and solutions and master DSA</p>
                    </div>
                </div>
            </div>
            <div className="right-hero-section">
                <img className="img" src={code} alt="code note"></img>
            </div>
        </div>
    )
}

export default HeroSection;
