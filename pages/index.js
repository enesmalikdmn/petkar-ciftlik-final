import React from 'react';
import Navbar from '../components/Custom/Navbar';
import MainBanner from '../components/Custom/MainBanner';
import FunFactStyleTwo from '../components/Common/FunFactStyleTwo';
import Faqs from '../components/Common/Faqs';
import Facilities from '../components/HomeThree/Facilities';
import WeCareAboutYou from '../components/Custom/WeCareAboutYour';
import HelpingChildren from '../components/Custom/HelpingChildren';
import AboutUs from '../components/Custom/AboutUs';
import HowItWorks from '../components/HomeThree/HowItWorks';
import OurServices from '../components/Custom/OurServices';
import DoctorsStyleTwo from '../components/Common/DoctorsStyleTwo';
import AssessmentCenter from '../components/HomeThree/AssessmentCenter';
import EmergencyDepartment from '../components/HomeThree/EmergencyDepartment';
import Prevention from '../components/HomeThree/Prevention';
import Cto from '../components/HomeThree/cto';
import NewsStyleOne from '../components/Common/NewsStyleOne';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/Custom/Footer';
import NavbarThree from '../components/_App/NavbarThree';
import r, { removeTable, parseTable } from '../utils/removeHTML';

const Index = ({hero, content, about,services,servicesPage,cosmeticServices, abouts,cosmeticServicesPage, lowerDescription}) => {
    return (
        <>
            <Navbar services={services} cosmeticServices={cosmeticServices} abouts={abouts} />
            <MainBanner data={hero} />
            {/* <Facilities /> */}
            <AboutUs data={content}/>
            <WeCareAboutYou data={about}/>
            {/* <HowItWorks /> */}
            {/* <OurServices data={servicesPage} services={services} /> */}
            <HelpingChildren data={lowerDescription}/>
            {/* TODO: Do Good Whenever */}
            {/* <DoctorsStyleTwo />
            <FunFactStyleTwo />
            <AssessmentCenter />
            <EmergencyDepartment />
            <Faqs />
            <Prevention /> */}
            {/* <Cto /> */}
            {/* <NewsStyleOne /> */}
            {/* <Subscribe /> */}
            <Footer services={services} cosmeticServices={cosmeticServices} abouts={abouts} /> 
        </>
    )
}

export default Index;
