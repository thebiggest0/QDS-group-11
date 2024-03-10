import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_i2ap9nr', 'template_oavwxdo', form.current, {
                publicKey: 'P3cPY1slcvN2hhTZU',
            })
            .then(
                () => {
                    alert('Your message has been sent successfully!');
                    form.current.reset();
                    console.log('SUCCESS!');
                },
                (error) => {
                    alert('Failed to send message. Please try again later.');
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <div className="contact-page-wrapper">
            <h1 className="primary-heading">Have Question In Mind?</h1>
            <h1 className="primary-heading">Let Us Help You</h1>
            <form className="form-container" ref={form} onSubmit={sendEmail}>
                <div>
                    <label>Name</label>
                    <input type="text" placeholder="John Doe" name="from_name" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" placeholder="yourmail@gmail.com" name="from_email" />
                </div>
                <div>
                    <label>Message</label>
                    <textarea name="message" />
                </div>
                <input className="secondary-button" type="submit" value="Send" />
            </form>
        </div >
    );
};
export default Contact