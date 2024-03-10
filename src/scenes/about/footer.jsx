import React from 'react'
import Logo from '../../assets/Logo.png';
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-wrapper bg-primary-100 px-5 pb-20 pt-5">
            <div className="footer-section-one md:pl-20 flex flex-col items-center justify-center">
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
                <div className="footer-section-columns text-sm text-center">
                    <span>Atsuko Uemura</span>
                    <span>Inez Yoon</span>
                    <span>Michael Doswell</span>
                    <span>Steven Lai</span>
                    <span>Steven Yan</span>
                    <span>Yifei Zeng</span>
                </div>
                <div className="footer-section-columns text-sm text-center">
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
