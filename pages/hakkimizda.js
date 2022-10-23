import React from 'react';
import Navbar from '../components/Custom/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/ContactUs/ContactInfo';
import ContactForm from '../components/ContactUs/ContactForm';
import { useRouter } from 'next/router';
import SlugPageLayout from '../components/Custom/SlugPageLayout';

import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/Custom/Footer';

const bannerContent = {
    'en': {
        pageTitle: 'Contact',
        homePage: 'Home',
        activePage: 'Contact'
    },
    'de': {
        pageTitle: 'Kontaktiere',
        homePage: 'Startseite',
        activePage: 'Kontaktiere'
    },
    'tr': {
        pageTitle: 'İletişim',
        homePage: 'Anasayfa',
        activePage: 'İletişim'
    },
}
const AboutUs = ({abouts,services, cosmeticServices}) => {
    const { locale } = useRouter();
    return (
        <>
            <Navbar services={services} cosmeticServices={cosmeticServices} abouts={abouts}/>

            <PageBanner 
                pageTitle='Hakkımızda'
                homePageUrl="/" 
                homePageText='Anasayfa' 
                imgUrl="/img/logo.png"
                activePageText='Hakkımızda'
                imgClass="bg-1" 
            />  
            <SlugPageLayout />

            <Footer /> 
        </>
    )
}

export default AboutUs;
