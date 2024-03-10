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
            <h1 >Have Question In Mind?</h1>
            <h1 >Let Us Help You</h1>
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
                    <textarea className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                <input className="secondary-button" type="submit" value="Send" />
            </form>
        </div >
    );
};
export default Contact