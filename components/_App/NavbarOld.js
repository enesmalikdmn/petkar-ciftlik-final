import React from 'react';
import Link from '../../utils/ActiveLink';
import TopHeader from './TopHeader';
import { Router, useRouter } from "next/router";

const navbarContent = {
    'en': {
        home: 'Home',
        about: 'About',
        benefits: 'Benefits of Choosing Us',
        services: 'Services & Pricing',
        blog: 'Blog',
        contact: 'Contact',
        getQuote: 'Get A Quote',
        hospitals: 'Hospitals',
        faq: 'FAQ',
        medicalTeam: 'Medical Team',
    },
    'de': {
        home: 'Home',
        about: 'About',
        benefits: 'Benefits of Choosing Us',
        services: 'Services & Pricing',
        blog: 'Blog',
        contact: 'Contact',
        getQuote: 'Get A Quote',
        hospitals: 'Hospitals',
        faq: 'FAQ',
        medicalTeam: 'Medical Team',
    },
    'tr': {
        home: 'Ana Sayfa',
        about: 'benefits-of-choosing-u',
        benefits: 'Neden Biz?',
        services: 'Hizmetler & Ücretler',
        blog: 'Blog',
        contact: 'İletişim',
        getQuote: 'Bize Ulaşın',
        hospitals: 'Hastaneler',
        faq: 'SSS',
        medicalTeam: 'Sağlık Ekibimiz',
    },
    
}

const Navbar = () => {
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
                                        <a onClick={toggleNavbar} className="navbar-brand">
                                            <img src="/img/logo.png" alt="logo" />
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
                                                        {navbarContent[locale].home}
                                                    </a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">{navbarContent[locale].about}</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about-us" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">
                                                        {navbarContent[locale].benefits}
                                                        </a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        {navbarContent[locale].services}
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/services-1" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">
                                                                Bariatric/Weight Loss Surgery
                                                                </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        {navbarContent[locale].medicalTeam}
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/doctors-1" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Doctors Style One</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/doctors-2" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Doctors Style Two</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/doctors-3" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Doctors Style Three</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/doctor-details" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Doctors Details</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        {navbarContent[locale].hospitals}
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/services-1" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Medifema</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/services-1" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Izmir Ekol</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/services-1" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Dentekol</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>


                                            <li className="nav-item">
                                                <Link href="/#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        {navbarContent[locale].blog}
                                                         <i className='bx bx-plus'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/blog-grid" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Blog Grid</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/blog-left-sidebar" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Blog Left Sidebar</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/blog-right-sidebar" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Blog Right Sidebar</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/blog-details" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Blog Details</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/contact" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">
                                                        {navbarContent[locale].faq}
                                                    </a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/contact" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">
                                                        {navbarContent[locale].contact}
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">

                                            <Link href="/#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        {locale.toUpperCase()}
                                                    </a>
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    {locales.map((lang) => (
                                                        <li key={lang} className="nav-item">

                                                            <a onClick={toggleNavbar} href={`/${lang}${router.asPath}`} className="nav-link">{lang.toUpperCase()}</a>

                                                        </li>
                                                    ))}
                                                </ul>
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
