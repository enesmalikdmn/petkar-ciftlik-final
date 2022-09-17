import React from 'react';
import Navbar from '../components/Custom/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/ContactUs/ContactInfo';
import ContactForm from '../components/ContactUs/ContactForm';
import { getPageWithName, getServices } from '../lib/api';
import { useRouter } from 'next/router';

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
const Contact = ({abouts,services, cosmeticServices}) => {
    const { locale } = useRouter();
    return (
        <>
            <Navbar services={services} cosmeticServices={cosmeticServices} abouts={abouts}/>

            <PageBanner 
                pageTitle={bannerContent[locale].pageTitle} 
                homePageUrl="/" 
                homePageText={bannerContent[locale].homePage}  
                imgUrl="/img/logo.png"
                activePageText={bannerContent[locale].activePage} 
                imgClass="bg-1" 
            />  
            <ContactInfo />

            <ContactForm />

            
            
            <Footer /> 
        </>
    )
}

export default Contact;

export async function getServerSideProps({ locale }) {
    // const benefits = await getPageWithName('benefits', locale);
    // const image = benefits.featuredImage?.node?.sourceUrl
    const {abouts,servicesPage, services, cosmeticServicesPage, cosmeticServices} = await getServices(locale)
    return {
        props: {
            services: services,
            cosmeticServices: cosmeticServices,
            abouts: abouts,
        },
    }
}
