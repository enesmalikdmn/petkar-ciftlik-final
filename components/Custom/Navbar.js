import React from 'react';
import Link from '../../utils/ActiveLink';
import TopHeader from './TopHeader';
import { Router, useRouter } from "next/router";

const navbarContent = {
    'en': {
        home: 'Home',
        about: 'About Us',
        benefits: 'Benefits of Choosing Us',
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
    },
    'de': {
        home: 'Startseite',
        about: 'Über uns',
        benefits: 'Vorteile der Wahl von uns',
        services: 'Medizinische Verfahren & Dienstleistungen',
        cosmetic: 'Kosmetische Chirurgie',
        helpingChildren: 'Hilfe für benachteiligte Kinder',
        blog: 'Blog',
        contact: 'Kontaktiere uns',
        getQuote: 'Get A Quote',
        hospitals: 'Hospitals',
        testimonials: 'Kundenmeinungen',
        successStory: 'Erfolgsgeschichten',
        faq: 'FAQ',
        medicalTeam: 'Medical Team',
    },
    'tr': {
        home: 'Ana Sayfa',
        about: 'benefits-of-choosing-u',
        benefits: 'Neden Biz?',
        services: 'Medikal Prosedürler & Hizmetler',
        helpingChildren: 'Dezavantajı Çocuklara Yardımcı Olmak',
        cosmetic: 'Kozmetik Cerrahi',
        blog: 'Blog',
        contact: 'Bize Ulaşın',
        getQuote: 'Bize Ulaşın',
        hospitals: 'Hastaneler',
        testimonials: 'Yorumlar',
        successStory: 'Başarı Hikayeleri',
        faq: 'SSS',
        medicalTeam: 'Sağlık Ekibimiz',
    },
    
}

const Navbar = ({services, cosmeticServices, abouts}) => {
    const [menu, setMenu] = React.useState(true)

    const toggleNavbar = () => {
        setMenu(!menu)
    }

    const router = useRouter();

    const locale = router.locale || "en";
   
    const locales = router.locales || ["en", "tr", "de"];

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <header className="header-area fixed-top">

                <TopHeader />

                <div className="nav-area five">
                    <div id="navbar" className="navbar-area">
                        <div className="main-nav">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <div className="container">
                                    <Link href="/">
                                        <a onClick={toggleNavbar} className="navbar-logo">
                                            <img className='logo-img' src="/img/logo.png" alt="logo" />
                                        </a>
                                    </Link>

                                    <button
                                        onClick={toggleNavbar}
                                        className={classTwo}
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="icon-bar top-bar"></span>
                                        <span className="icon-bar middle-bar"></span>
                                        <span className="icon-bar bottom-bar"></span>
                                    </button>

                                    <div className={classOne} id="navbarSupportedContent">
                                        <ul className="navbar-nav m-auto">
                                            <li className="nav-item">
                                                <Link href="/#" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">
                                                        Anasayfa
                                                    </a>
                                                </Link>
                                            </li>

                                            {/* <li className="nav-item">
                                                <Link href="/#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        benefits-of-choosing-u
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    {
                                                        abouts.map((s,i) => (
                                                            
                                                    <li key={i} className="nav-item">
                                                    <Link href={`/about-us/${s.slug}/`} activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">
                                                            {s.title}
                                                            </a>
                                                    </Link>
                                                </li>
                                                        ))
                                                    }
                                                </ul>
                                            </li> */}

                                            <li className="nav-item">
                                                <Link href="/hakkimizda" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">
                                                        Hakkımızda
                                                        </a>
                                                </Link>
                                            </li>

                                            {/* <li className="nav-item">
                                                <Link href="/#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        {navbarContent[locale].services}
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    {
                                                        services.map((s,i) => (
                                                            
                                                    <li key={i} className="nav-item">
                                                    <Link href={`/service/${s.slug}/`} activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">
                                                            {s.title}
                                                            </a>
                                                    </Link>
                                                </li>
                                                        ))
                                                    }
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        {navbarContent[locale].cosmetic}
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    {
                                                        cosmeticServices.map((s,i) => (
                                                            
                                                    <li key={i} className="nav-item">
                                                    <Link href={`/cosmetic-surgeries/${s.slug}/`} activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">
                                                            {s.title}
                                                            </a>
                                                    </Link>
                                                </li>
                                                        ))
                                                    }
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/helping-disadvantaged-children" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">
                                                        {navbarContent[locale].helpingChildren}
                                                        </a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/testimonials" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">
                                                        {navbarContent[locale].testimonials}
                                                        </a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/success-stories" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">
                                                        {navbarContent[locale].successStory}
                                                        </a>
                                                </Link>
                                            </li> */}

                                            

                                            
                                            <li className="nav-item">

                                            {/* <Link href="/#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        {locale.toUpperCase()}
                                                    </a>
                                                </Link> */}
                                                {/* <ul className="dropdown-menu">
                                                    {locales.map((lang) => (
                                                        <li key={lang} className="nav-item">
                                                            <a href={`/${lang}${router.asPath}`} className="nav-link">{lang.toUpperCase()}</a>
                                                        </li>
                                                    ))}
                                                </ul> */}
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="others-option">
                                        <div className="subscribe">
                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    {navbarContent[locale].contact}
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;
