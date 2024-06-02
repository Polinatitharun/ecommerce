import React from 'react';
import './Home.css';

const About = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <div className="about-content">
                <div className="about-img">
                    <img src="https://i.pinimg.com/originals/a9/78/2b/a9782b1a29631ce23dbb996f7711b1a7.png" alt="About Us"/>
                </div>
                <div className="about-text">
                    <p>
                        Welcome to AMAZING, where choice meets innovation! Founded in 2024, we have been dedicated to delivering exceptional products that make a difference in the lives of our customers.
                    </p>
                    <p>
                        Our mission is to give best products. We strive to reach all over nation and produce best quality.
                    </p>
                </div>
            </div>
            <div className="additional-container">
                <div className="additional-content">
                    <h2>Our Mission</h2>
                    <p>
                        At AMAZING, our mission is to give quality. We strive to give, such as "provide high-quality products," "deliver outstanding customer service," "innovate in our field," etc..
                    </p>
                </div>
                <div className="additional-content">
                    <h2>Our Values</h2>
                    <p>
                        - Quality: We are committed to offering products/services that meet the highest standards of quality and performance.
                    </p>
                    <p>
                        - Integrity: Honesty and transparency are at the core of everything we do.
                    </p>
                    <p>
                        - Innovation: We embrace creativity and innovation to stay ahead in a constantly evolving market.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
