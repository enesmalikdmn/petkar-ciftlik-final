import React from 'react';
import { useRouter } from 'next/router';
import ContactInfo from '../../content/constants';
import ContactContent from '../../content/contact-content';

// const ContactLabels = {
//     'en': {
//         callUs: 'Call Us',
//         email: 'Email',
//     },
//     'de': {
//         callUs: 'Call Us',
//         email: 'Email',
//     },
//     'tr': {
//         callUs: 'Bizi Arayın',
//         email: 'E-Posta',
//     },
// }

const TopHeader = () => {
    const {locale} = useRouter();
    return (      
        <div className="top-header-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-9 col-sm-6">
                        <ul className="header-content-left">
                           
                            <li>
                                <a href={ContactInfo.phoneHref}>
                                    <i className="bx bx-phone-call"></i>
                                    {ContactContent[locale].callUs}: {ContactInfo.phone}
                                </a>
                            </li>
                            <li>
                                <a href={ContactInfo.mailHref}>
                                    <i className="bx bxs-paper-plane"></i>
                                    {ContactContent[locale].email}: {ContactInfo.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-3 col-sm-6">
                        <ul className="header-content-right">
                            <li>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <i className="bx bxl-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/" target="_blank">
                                    <i className="bx bxl-twitter"></i>
                                </a>
                            </li>
                            {/* <li>
                                <a href="https://www.youtube.com/" target="_blank">
                                    <i className="bx bxl-youtube"></i>
                                </a>
                            </li> */}
                            <li>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <i className="bx bxl-instagram"></i>
                                </a>
                            </li>
                            
                        </ul>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default TopHeader;