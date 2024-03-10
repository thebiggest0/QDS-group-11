import React from 'react'
import Logo from '../../assets/Logo.png';
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-section-one">
                <div className="footer-logo-container">
                    <img src={Logo} alt="" />
                </div>
                <div className="footer-icons">
                    <BsTwitter />
                    <SiLinkedin />
                    <BsYoutube />
                    <FaFacebookF />
                </div>
            </div>
            <div className="footer-section-two">
                <div className="footer-section-columns">
                    <span>Atsuko Uemura</span>
                    <span>Inez Yoon</span>
                    <span>Michael Doswell</span>
                    <span>Steven Lai</span>
                    <span>Steven Yan</span>
                    <span>Yifei Zeng</span>
                </div>
                <div className="footer-section-columns">
                    <span>666-8888-9999</span>
                    <span>record@froget.com</span>
                    <span>your@froget.com</span>
                    <span>day@froget.com</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
