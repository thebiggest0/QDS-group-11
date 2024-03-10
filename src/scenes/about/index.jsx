import React from 'react'
import './about.css';
import Work from './steps';
import Contact from './contact'
import Footer from './footer';

const About = () => {
    return (
        <section id='about'>
            <Work />
            <Contact />
            <Footer />
        </section>
    )
}

export default About
