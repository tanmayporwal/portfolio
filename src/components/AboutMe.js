import React from "react";
import Author from "../me.jpg";

const AboutMe = () => {
    return (
        <div id="about_me" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5 ">
                    <img className="profile-img" src={Author} alt="My image" />
                    </div>
                    
                </div>

                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About me</h1>
                    <p  className="about-para">
                    I am a graduate student working towards my master’s in computer science, learning its concepts to the core. Skilled in Java, SQL, Node.js, and F#. Possess a strong foundation in data structures, distributed systems, and object-oriented programming. I enjoy finding new ways to provide a feasible solution to a broader relevant problem. Problems that require a lot of critical thinking and analytical skills always excites me. My colleagues would describe me as a driven, resourceful person who maintains a positive attitude even in the time of hardships. Currently, I am seeking job opportunities that relate to the field of software development, distributed systems, and full-stack development.
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe
