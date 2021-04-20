import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                
                
                <div className="col-full">
                    <h1 className="myname mb-2">Hello! I am Tanmay Porwal</h1>

                </div>

                <div className="col-full">
                    <Typed
                    className="work"
                    strings = {["Computer Science Student", "Full Stack Developer", "Java Developer", "Web Developer", "Web Designer"]}
                    typeSpeed = {80}
                    backSpeed = {50}
                    loop 
                />
                </div>
                
                
            </div>
        </div>
    )
}

export default Header
