import React from 'react';
import Navbar from '../components/Custom/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import OurWorks from '../components/HomeOne/OurWorks';
import WeCareAboutYou from '../components/Custom/WeCareAboutYour';
import { getPageWithName, getServices } from '../lib/api';
import r, { removeTable, parseTable } from '../utils/removeHTML'
import { parse } from 'node-html-parser';
const Services1 = ({abouts, bannerItems, services, weCare, cosmeticServices }) => {
    return (
        <>
            <Navbar services={services} cosmeticServices={cosmeticServices} abouts={abouts}/>

            <PageBanner
                pageTitle="Services Style One"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Services Style One"
                imgClass="bg-1"
            />

            <div className="first-facility-area services-page-one">
                <div className="container">
                    <div className="row justify-content-center">
                        {
                            bannerItems.map((bi, index) => (
                                <div className="col-lg-4 col-sm-6">
                                    <div className="first-facility-item">
                                        <i className={bi.icon}></i>
                                        <h3>{bi.title}</h3>
                                        <p>{bi.content}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="shape">
                        <img src="/img/shape/shape1.png" alt="Image" />
                    </div>
                </div>
            </div>



            <div className="second-facility-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">

                        {
                            services.map((service, index) => (<div key={index} className="col-lg-4 col-sm-6">
                                <div className="second-facility-item">
                                    <h3>{service.title}</h3>
                                    <p>
									    <div dangerouslySetInnerHTML={{__html: service.miniContent}}></div>
                                    </p>

                                    <Link href={`/service/${service.slug}`}>
                                        <a className="read-more">
                                            Read More <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>))
                        }


                        {/* <div className="col-lg-4 col-sm-6">
                            <div className="second-facility-item">
                                <img src="/img/facility-img/facility-icon2.png" alt="Image" />
                                <h3>Emergency Helicopter</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                                <Link href="/service-details">
                                    <a className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="second-facility-item">
                                <img src="/img/facility-img/facility-icon3.png" alt="Image" />
                                <h3>Leading Technology</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                                <Link href="/service-details">
                                    <a className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            <WeCareAboutYou data={weCare} />

            <OurWorks />

         

            <Footer />
        </>
    )
}

export default Services1;



export async function getServerSideProps({ locale }) {
    const home = await getPageWithName('home', locale);
    const weCareTable = parseTable('about_content', home.content)
    const weCare = {
        title: r(weCareTable[0][0]),
        content: weCareTable[0][1],
        callText: weCareTable[0][2],
        mailText: weCareTable[0][3],
    }

    const {servicesPage, abouts, services, cosmeticServicesPage, cosmeticServices} = await getServices(locale)
    const doc = parse(servicesPage.content);
    const bannerItems = [
        /* pardon my french */
        {
            title: doc.querySelectorAll(".wp-block-table.services_banner tr")[0].querySelectorAll("td")[0].innerHTML,
            content: doc.querySelectorAll(".wp-block-table.services_banner tr")[1].querySelectorAll("td")[0].innerHTML,
            icon: doc.querySelectorAll(".wp-block-table.services_banner tr")[2].querySelectorAll("td")[0].innerHTML,
        },
        {
            title: doc.querySelectorAll(".wp-block-table.services_banner tr")[0].querySelectorAll("td")[1].innerHTML,
            content: doc.querySelectorAll(".wp-block-table.services_banner tr")[1].querySelectorAll("td")[1].innerHTML,
            icon: doc.querySelectorAll(".wp-block-table.services_banner tr")[2].querySelectorAll("td")[1].innerHTML,
        },
        {
            title: doc.querySelectorAll(".wp-block-table.services_banner tr")[0].querySelectorAll("td")[2].innerHTML,
            content: doc.querySelectorAll(".wp-block-table.services_banner tr")[1].querySelectorAll("td")[2].innerHTML,
            icon: doc.querySelectorAll(".wp-block-table.services_banner tr")[2].querySelectorAll("td")[2].innerHTML,
        }
    ]
    const image = servicesPage.featuredImage?.node?.sourceUrl
    return {
        props: {
            title: servicesPage.title,
            content: removeTable(servicesPage.content),
            bannerItems,
            services: services || [],
            cosmeticServices: cosmeticServices || [],
            image: image || null,
            abouts: abouts,
            weCare
        },
    }
}

