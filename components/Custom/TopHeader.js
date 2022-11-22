import React from 'react';
import { useRouter } from 'next/router';
import ContactInfo from '../../content/constants';
import ContactContent from '../../content/contact-content';
import SocialLinks from '../Common/SocialLinks';



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
                                    <div className='header-phone-number flex flex-row gap-2'>
                                        <div><i className="bx bx-phone-call"></i></div>
                                        <div>{ContactContent[locale].callUs}:</div>
                                        <div>{ContactInfo.phone}</div>
                                        <div>{ContactInfo.secondPhone}</div> 
                                    </div>
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
                        <SocialLinks className='header-content-right' />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default TopHeader;