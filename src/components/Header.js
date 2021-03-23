import React from "react"
import Typed from "react-typed"

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hello There! Welcome to my Website.</h1>
                <Typed
                    className="typed-text"
                    strings = {["Full Stack Developer", "Java Developer", "Web Developer", "Web Designer"]}
                    typeSpeed = {80}
                    backSpeed = {50}
                    loop 
                />
                <a class="headerbtn btn btn-light" href="#" role="button"> Contact Me </a>
            </div>
        </div>
    )
}

export default Header
