import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ContactInfo from '../../content/constants';
import ContactContent from '../../content/contact-content';

const footerContent = {
    'en': {
        home: 'Home',
        about: 'About Us',
        benefits: 'Benefits of Choosing Us',
        services: 'Medical Procedures & Services',
        cosmetic: 'Cosmetic Surgery',
        certificates: 'Certificates',
        helpingChildren: 'Helping Disadvantaged Children',
        blog: 'Blog',
        contact: 'Contact Us',
        getQuote: 'Get A Quote',
        hospitals: 'Hospitals',
        testimonials: 'Testimonials',
        successStory: 'Success Stories',
        faq: 'FAQ',
        medicalTeam: 'Medical Team',
        getInTouch: 'Get In Touch',
        travelAgency: 'TRAVEL AGENCY CERTIFICATE',
        tourismCertificate: 'INTERNATIONAL HEALTH TOURISM AUTHORIZATION CERTIFICATE'
    },
    'de': {
        home: 'Startseite',
        about: 'Über uns',
        benefits: 'Vorteile der Wahl von uns',
        services: 'Medizinische Verfahren & Dienstleistungen',
        cosmetic: 'Kosmetische Chirurgie',
        certificates: 'Certificates',
        blog: 'Blog',
        contact: 'Kontaktiere uns',
        getQuote: 'Get A Quote',
        hospitals: 'Hospitals',
        testimonials: 'Kundenmeinungen',
        successStory: 'Erfolgsgeschichten',
        faq: 'FAQ',
        medicalTeam: 'Medical Team',
        getInTouch: 'In Kontakt kommen',
        travelAgency: 'REISEBÜRO-ZERTIFIKAT',
        tourismCertificate: 'GENEHMIGUNGSZERTIFIKAT FÜR INTERNATIONALEN GESUNDHEITS-TOURISMUS'
    },
    'tr': {
        home: 'Ana Sayfa',
        about: 'Hakkımızda',
        benefits: 'Neden Biz?',
        services: 'Medikal Prosedürler & Hizmetler',
        helpingChildren: 'Dezavantajı Çocuklara Yardımcı Olmak',
        cosmetic: 'Kozmetik Cerrahi',
        certificates: 'Sertifikalar',
        blog: 'Blog',
        contact: 'Bize Ulaşın',
        getQuote: 'Bize Ulaşın',
        hospitals: 'Hastaneler',
        testimonials: 'Yorumlar',
        successStory: 'Başarı Hikayeleri',
        faq: 'SSS',
        medicalTeam: 'Sağlık Ekibimiz',
        getInTouch: 'Bize Ulaşın',
        travelAgency: 'SEYAHAT ACENTESİ BELGESİ',
        tourismCertificate: 'ULUSLARARASI SAĞLIK TURİZMİ YETKİ BELGESİ'
    },
}

const Footer = () => {
    const {locale} = useRouter();
    const currentYear = new Date().getFullYear();
 
    return (
        <>
            <footer className="footer-top-area f-bg pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <Link href="/">
                                    <a>
                                        <img src="/brand/logo-white-sm.png" alt="Image" />
                                    </a>
                                </Link>

                                <div>
                                <h3>{footerContent[locale].getInTouch}</h3>
                                <ul>
                                    <li>
                                        <a href={ContactInfo.phoneHref}>
                                            <i className="bx bx-phone-call"></i>
                                            <span>{ContactContent[locale].callUs}:</span> 
                                            {ContactInfo.phone}
                                        </a>
                                    </li>
                                    <li>
                                        <a href={ContactInfo.emailHref}>
                                            <i className="bx bx-envelope"></i>
                                            <span>{ContactContent[locale].email}:</span> 
                                            {ContactInfo.email}
                                        </a>
                                    </li>
                                    <li>
                                        <i className="bx bx-location-plus"></i>
                                        <span>{ContactContent[locale].address}:</span> 
                                        {ContactInfo.address}
                                    </li>
                                </ul>
                                </div>

                                {/* <p>Lorem ipsum dolor, sit amet earum consectetur adipisicing elit. Cupiditate rerum quidem fugiat sapiente! Iusto quae perspiciatis, repudiandae ipsam minus et ex, aliquid dolor molestias, earum enim officiis porro obcaecati.</p> */}

                                <div className="social-area">
                                    <ul>
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
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebyoutubeook.com/" target="_blank">
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

                        

                        <div className="col-lg-2 col-md-6">
                            <div className="single-widget">
                                <h3>{footerContent[locale].about}</h3>
                                <ul>
                                    <li>
                                        <a href="/benefits-of-choosing-us">
                                            {footerContent[locale].benefits}
                                        </a>
                                    </li>
                                 
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-lg-2 col-md-6">
                            <div className="single-widget">
                                <h3>{footerContent[locale].services}</h3>
                                <ul>
                                    <li>
                                        <a href="/service/gastrik-manson/">
                                            Bariartric/Weight Loss Surgery
                                        </a>
                                    </li>
                                  
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="single-widget">
                                <h3>{footerContent[locale].certificates}</h3>
                                <ul>
                                    <li>
                                        <a target="_blank" href="https://wp.primehealthconcept.com/wp-content/uploads/2022/07/CamScanner-06-27-2022-11.19.pdf">
                                        {footerContent[locale].tourismCertificate}
                                        </a>
                                    </li>

                                    <li>
                                        <a target="_blank" href="https://wp.primehealthconcept.com/wp-content/uploads/2022/07/CamScanner-07-04-2022-19.55.pdf">
                                        {footerContent[locale].travelAgency}
                                        </a>
                                    </li>
                                  
                                </ul>
                            </div>
                        </div>

                        

                        {/* <div className="col-lg-3 col-md-6">
                            <div className="single-widget contact">
                                <h3>Get In Touch</h3>
                                <ul>
                                    <li>
                                        <a href="tel:+822456974">
                                            <i className="bx bx-phone-call"></i>
                                            <span>Hotline:</span> 
                                            Phone: +822456974
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:hello@corf.com">
                                            <i className="bx bx-envelope"></i>
                                            <span>Email:</span> 
                                            hello@corf.com
                                        </a>
                                    </li>
                                    <li>
                                        <i className="bx bx-location-plus"></i>
                                        <span>Address:</span> 
                                        123, Western Road, Melbourne Australia
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </footer>
         
            <div className="footer-bottom-area">
                <div className="container">
                    <div className="copy-right">
                        <p>Copyright &copy; {currentYear} Prime Health Concept</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;