import React from "react";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 first">
            <div className="d-flex">
              <p>3515 SW 39th BLVD 12D</p>
            </div>
            <div className="d-flex">
              <p>GAINESVILLE, FLORIDA 32608</p>
            </div>
            <div className="d-flex">
              <a href="tel:+1(352)327-1999">+1(352)327-1999</a>
            </div>
            <div className="d-flex">
              <p>tanmayporwal13@gmail.com</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 align-items-center third">
            <div className="d-flex justify-content-center">
              <SocialIcon className="mx-1" url="https://www.linkedin.com/in/tp13/" target="_blank" />
              <SocialIcon className="mx-1" url="https://github.com/tanmayporwal" bgColor = "white" target="_blank"/>
              <SocialIcon className="mx-1" url="https://twitter.com/TanmayPorwal11" target="_blank" />
              <SocialIcon className="mx-1" url="https://www.facebook.com/tanmay.porwal.77" target="_blank"/>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Tanmay Porwal | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
