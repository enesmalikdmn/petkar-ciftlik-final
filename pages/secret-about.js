import React from 'react';
import Navbar from '../components/Custom/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/_App/Footer';
import Faqs from '../components/Common/Faqs';
import ContactForm from '../components/ContactUs/ContactForm';
import AccordionWithTitle from '../components/Custom/AccordionWithTitle';
import r, {parseAccordion, removeTable} from '../utils/removeHTML'
import { CAccordion } from '../components/Custom/AccordionWithTitle';
import { parse } from 'node-html-parser';

const AboutUs = ({post, services, cosmeticServices, abouts}) => {
    return (
        <>
            <Navbar services={services} abouts={abouts} cosmeticServices={cosmeticServices}/>

            <PageBanner 
                pageTitle={post.title} 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText={post.title} 
                imgClass="bg-2" 
            />

            {
                post.sections.map((s) => (
                    <div className="faq-area bg-2 ptb-100">
            <div className="container">
                <div className="section-title">
                    <div dangerouslySetInnerHTML={{ __html: s[0]}}></div>
                </div>

                <div className="row align-items-center">


                    <div className="col-lg-12">
                        {s[1]?.length && <CAccordion items={[{title: 'Please click here to read more', content: s[1]}]} />}
                    </div>
                </div>
            </div>
        </div>
                ))
            }
            
            <Footer /> 
        </>
    )
}

export default AboutUs;




