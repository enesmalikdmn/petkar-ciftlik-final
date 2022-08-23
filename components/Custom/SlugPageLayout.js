
import React from 'react';
import Navbar from './Navbar';
import PageBanner from '../Common/PageBanner';
import Subscribe from '../Common/Subscribe';
import Footer from './Footer';
import { CAccordion } from './AccordionWithTitle';
import { parse } from 'node-html-parser'
import dynamic from 'next/dynamic';
import { getPageWithNameLocale, getPostWithName, getService, getServices } from '../../lib/api';


const readMore = {
    tr: 'Devamı için lütfen tıklayınız',
    en: 'Please click here to read more',
    de: 'Bitte klicken Sie hier, um mehr zu lesen'
}

const SlugPageLayout = ({ service, abouts, services, cosmeticServices, locale }) => {
    const contents = service?.content.split("__TABLE__");
    const firstContent = contents.length > 0 ? contents[0] : ''
    const firstContentText = parse(firstContent)
    return (
        <>
            <Navbar services={services} cosmeticServices={cosmeticServices} abouts={abouts} />

            <PageBanner
                pageTitle={service?.title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={service?.title}
                imgUrl="/brand/logo.png"
                imgClass="bg-1"
                postHeader={service.postHeader}
            />

            <div className="services-details-area">
                <div className="container">
                    {
                        firstContentText.innerText.trim().length > 0 &&
                        <div className='row'>
                            <div dangerouslySetInnerHTML={{ __html: contents.length > 0 ? contents[0] : '' }} className='offset-lg-3 col-lg-6 service-content'></div>
                        </div>
                    }
                    {
                        service?.sections?.length > 0 &&
                        <div className="row justify-content-center">
                            {
                                /* 
                                    <div className="col-lg-6">
                                    <div className="services-img">
                                            <img src={service?.image || "/img/service-details/service-details1.jpg"} alt={service?.title} />
                                            </div>
                                    </div> 
                                    */
                            }
                            {
                                service?.sections?.map((s) => (
                                    <div style={{ backgroundColor: '#f9f9f9', marginTop: 20, padding: 20 }}>
                                        <div dangerouslySetInnerHTML={{ __html: s[0] }} className='service-content'></div>
                                        {s[1]?.length && <CAccordion items={[{ title: readMore[locale], content: s[1] }]} />}
                                    </div>
                                ))
                            }

                        </div>
                    }
                    <div className='row'>
                        <div dangerouslySetInnerHTML={{ __html: contents.length > 1 ? contents[1] : '' }} className='offset-lg-3 col-lg-6 service-content'></div>
                    </div>
                    <CAccordion items={service?.accordionItems} />
                    <div dangerouslySetInnerHTML={{ __html: contents.length > 2 ? contents.slice(2).join('') : '' }} className='offset-lg-3 col-lg-6 service-content'></div>
                </div>
            </div>


            <Footer services={services} cosmeticServices={cosmeticServices} abouts={abouts} />
        </>
    )
}

export default SlugPageLayout;