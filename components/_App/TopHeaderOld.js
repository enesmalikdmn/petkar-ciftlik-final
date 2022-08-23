import React from 'react';
import { useRouter } from 'next/router';

const topHeaderContent = {
    'en': {
        callUs: 'Call Us',
        email: 'Email',
    },
    'de': {
        callUs: 'Call Us',
        email: 'Email',
    },
    'tr': {
        callUs: 'Bizi Arayın',
        email: 'E-Posta',
    },
}

const TopHeader = () => {
    const {locale} = useRouter();
    return (      
        <div className="top-header-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-9 col-sm-6">
                        <ul className="header-content-left">
                           
                            <li>
                                <a href="tel:+822456974">
                                    <i className="bx bx-phone-call"></i>
                                    {topHeaderContent[locale].callUs}: +90 530 131 11 96
                                </a>
                            </li>
                            <li>
                                <a href="mailto:hello@info.com">
                                    <i className="bx bxs-paper-plane"></i>
                                    {topHeaderContent[locale].email}: info@primehealthconcept.com
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