import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ContactInfo from '../../content/constants';
import ContactContent from '../../content/contact-content';
import SocialLinks from '../Common/SocialLinks';



const navbarContent = {
    'en': {
        home: 'Home',
        overview: 'Overview',
        about: 'About Us',
        benefits: 'Benefits of Choosing Us',
        certificates: 'Certificates',
        services: 'Medical Procedures & Services',
        cosmetic: 'Cosmetic Surgery',
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
        certificates: 'Certificates',
        overview: 'Überblick',
        benefits: 'Vorteile der Wahl von uns',
        services: 'Medizinische Verfahren & Dienstleistungen',
        cosmetic: 'Kosmetische Chirurgie',
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
        overview: 'Genel Bakış',
        certificates: 'Sertifikalar',
        benefits: 'Neden Biz?',
        services: 'Medikal Prosedürler & Hizmetler',
        helpingChildren: 'Helping Disadvantaged Children',
        cosmetic: 'Kozmetik Cerrahi',
        blog: 'Blog',
        contact: 'İletişim',
        getQuote: 'Bize Ulaşın',
        hospitals: 'Hastaneler',
        testimonials: 'Testimonials',
        successStory: 'Success Stories',
        faq: 'SSS',
        medicalTeam: 'Sağlık Ekibimiz',
        getInTouch: 'Bize Ulaşın',
        travelAgency: 'SEYAHAT ACENTESİ BELGESİ',
        tourismCertificate: 'ULUSLARARASI SAĞLIK TURİZMİ YETKİ BELGESİ'
    },

}



const Footer = ({ abouts, services, cosmeticServices }) => {
    const { locale } = useRouter();
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="footer-top-area f-bg pt-100 pb-70">
                <div className="container">
                    <div className='row' style={{display: 'flex'}}>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-widget">
                                <Link href="/">
                                    <a>
                                        <img src="/img/logo.png" alt="Image" />
                                    </a>
                                </Link>

                                <div>
                                    <h3>{navbarContent[locale].getInTouch}</h3>
                                    <ul>
                                        <li>
                                            <a href={ContactInfo.phoneHref}>
                                                <i className="bx bx-phone-call"></i>
                                                <span>{ContactContent[locale].callUs}:</span>
                                                +90 532 317 52 19
                                            </a>
                                        </li>
                                        <li>
                                            <a href={ContactInfo.emailHref}>
                                                <i className="bx bx-envelope"></i>
                                                <span>{ContactContent[locale].email}:</span>
                                                petkarkoyun@gmail.com
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
                                    <SocialLinks />
                                    {/* <ul>
                                        <li>
                                            <a href="https://www.facebook.com/people/Petkar-Koyunculuk/100076410344160//" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.twitter.com/" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                   
                                        <li>
                                            <a href="https://www.instagram.com/petkarkoyun/" target="_blank">
                                                <i className="bx bxl-instagram"></i>
                                            </a>
                                        </li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex'>
                        Petkar Çiftliği olarak 2013 yılında faaliyete geçmiş bulunmaktayız. Bölgesinde öncü damızlık yetiştiricisi olma hedefiyle yola çıkan Petkar çiftliği, bu hedefini gerçekleştirmek için gerekli olabilecek kapalı ağıl alanları( 3.000 m2), kuzu büyütme ünitesi, sılaj ve yem depoları, idari binalar, elektrik ve su arıtma sistemleri gibi küçükbaş hayvan yetiştiriciliği için Avrupa standartlarında ve eksiksiz bir donanıma sahiptir.
                        </div> */}


                        <div className="footer-text col-lg-2 col-md-4">
                        Petkar Çiftliği olarak 2013 yılında faaliyete geçmiş bulunmaktayız. Bölgesinde öncü damızlık yetiştiricisi olma hedefiyle yola çıkan Petkar çiftliği, bu hedefini gerçekleştirmek için gerekli olabilecek kapalı ağıl alanları( 3.000 m2), kuzu büyütme ünitesi, sılaj ve yem depoları, idari binalar, elektrik ve su arıtma sistemleri gibi küçükbaş hayvan yetiştiriciliği için Avrupa standartlarında ve eksiksiz bir donanıma sahiptir.

                        </div>
                            {/* <div className="single-widget">
                                <Link href="/">
                                <p>Hakkımzda</p>
                                    
                                </Link>
                            </div> */}

                            {/* <div className='single-widget'>
                                <h3>
                                    {navbarContent[locale].overview}
                                </h3>
                                <ul>
                                    <li>
                                        <Link href="/about-us" activeClassName="active">
                                            <a>
                                                {navbarContent[locale].benefits}
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/helping-disadvantaged-children" activeClassName="active">
                                            <a>
                                                {navbarContent[locale].helpingChildren}
                                            </a>
                                        </Link>
                                    </li>
                                    
                                    <li>
                                        <Link href="/testimonials" activeClassName="active">
                                            <a>
                                                {navbarContent[locale].testimonials}
                                            </a>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/success-stories" activeClassName="active">
                                            <a>
                                                {navbarContent[locale].successStory}
                                            </a>
                                        </Link>
                                    </li>
                                </ul>

                            </div> */}
                        {/* </div> */}
                        {/* <div className="col-lg-2 col-md-4">
                            <div className="single-widget">
                                <h3>
                                    {navbarContent[locale].services}
                                </h3>
                                <ul>
                                    {
                                        services.map((s, i) => (
                                            <li key={i}>
                                                <Link href={`/about-us/${s.slug}/`} activeClassName="active">
                                                    <a>
                                                        {s.title}
                                                    </a>
                                                </Link>
                                            </li>
                                        ))
                                    }

                                </ul>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-2 col-md-4">
                            <div className="single-widget">
                                <h3>
                                    {navbarContent[locale].cosmetic}
                                </h3>
                                <ul>
                                    {
                                        cosmeticServices.map((s, i) => (
                                            <li key={i}>
                                                <Link href={`/about-us/${s.slug}/`} activeClassName="active">
                                                    <a>
                                                        {s.title}
                                                    </a>
                                                </Link>
                                            </li>
                                        ))
                                    }

                                </ul>
                            </div>
                        </div> */}


                        {/* <div className="col-lg-2 col-md-4">
                            <div className="single-widget">
                                <h3>
                                    {navbarContent[locale].certificates}
                                </h3>
                                <ul>
                                    <li>
                                        <a target="_blank" href="https://wp.primehealthconcept.com/wp-content/uploads/2022/07/CamScanner-06-27-2022-11.19.pdf">
                                        {navbarContent[locale].tourismCertificate}
                                        </a>
                                    </li>

                                    <li>
                                        <a target="_blank" href="https://wp.primehealthconcept.com/wp-content/uploads/2022/07/CamScanner-07-04-2022-19.55.pdf">
                                        {navbarContent[locale].travelAgency}
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div> */}



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
                        <p>Copyright &copy; {currentYear} Petkar Ile De France Damızlık Çiftliği</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;