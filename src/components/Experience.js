import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center py-3">
        <h1 className="experience-heading">experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>April 2018-August 2018</h3>
            <p>Build and managed REST APIs using Node JS to handle functionalities providing enhanced location
            settings and cart modifications. Implemented an end-to-end feature to enable users to mark Favorites among various food options.
            Worked on an internal tool to simplify admin experience of adding food information into the database.
            </p> 
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>January 2019-August 2019</h3>
            <p>Co-founded and operated a study center, handled marketing, and managed a team of five people.
            Developed company website using MERN stack for payments, seat booking and advertisement which
            aided in increasing the number of enquiries by four times</p>   
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>January 2021-Present</h3>
            <p> Developing user-interface for tools required by Florida Institute of Cyber Security Lab in python PyQt. Working on integrating and fixing various backend scripts to provide analysis on Printed Circuit Boards.

            </p>   
          </div>
        </div>
        {/* - */}
      </div>
    </div>
  )
}

export default Experience;
