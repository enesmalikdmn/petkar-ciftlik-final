import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl';
import ContactContent from '../../content/contact-content';
import ContactInfo from '../../content/constants';

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const ContactForm = () => {
    const {locale} = useRouter();
    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm();

    const handleChange = e => {
        console.log('test3')
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
    }

    const onSubmit = async e => {
        // e.preventDefault();
        try {
            const url = `${baseUrl}/api/contact`;
            const { name, email, number, subject, text } = contact;
            const payload = { name, email, number, subject, text };
            await axios.post(url, payload);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error)
        }
    };
  
    return (
        <div className="main-contact-area contact ptb-100">
			<div className="container">
				<div className="section-title">
					<span className="top-title">{ContactContent[locale].contactUs}</span>
					<h2>{ContactContent[locale].dropMessage}</h2>
				</div>

                <div className="contact-wrap contact-pages mb-0">
                    <div className="contact-form">
                        <form id="contactForm" action="https://formsubmit.co/petkarkoyun@gmail.com" method="POST">
                            <input type="hidden" name="_next" value="https://www.petkariledefranceciftligi.com/tr/contact/" />
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>{ContactContent[locale].name}</label>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            className="form-control" 
                                            // placeholder="Your Name" 
                                            value={contact.name}
                                            onChange={handleChange}
                                            ref={register({ required: true })}
                                        />
                                        <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.name && 'Name is required.'}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>{ContactContent[locale].email}</label>
                                        <input 
                                            type="text" 
                                            name="email" 
                                            className="form-control" 
                                            // placeholder="Your Email" 
                                            value={contact.email}
                                            onChange={handleChange}
                                            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                                        />
                                        <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.email && 'Email is required.'}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>{ContactContent[locale].phone}</label>
                                        <input 
                                            type="text" 
                                            name="number" 
                                            className="form-control" 
                                            // placeholder="Your Phone" 
                                            value={contact.number}
                                            onChange={handleChange}
                                            ref={register({ required: true })}
                                        />
                                        <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.number && 'Number is required.'}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>{ContactContent[locale].subject}</label>
                                        <input 
                                            type="text" 
                                            name="subject" 
                                            className="form-control" 
                                            // placeholder="Your Subject" 
                                            value={contact.subject}
                                            onChange={handleChange}
                                            ref={register({ required: true })}
                                        />
                                        <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.subject && 'Subject is required.'}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <label>{ContactContent[locale].message}</label>
                                        <textarea 
                                            name="text" 
                                            className="form-control" 
                                            cols="30" 
                                            rows="5" 
                                            // placeholder="Your Message" 
                                            value={contact.text}
                                            onChange={handleChange}
                                            ref={register({ required: true })}
                                        />
                                        <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.text && 'Text body is required.'}
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="col-lg-6 col-sm-6">
                                    <div className="contact-num">
                                        <span><a href={ContactInfo.phoneHref}>{ContactInfo.phone}</a></span>
                                    </div>
                                </div> */}

                                <div className="col-lg-12 col-sm-12 flex flex-end">
                                    <button type="submit" className="default-btn btn-two">{ContactContent[locale].send}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
		</div>
    );
}

export default ContactForm;