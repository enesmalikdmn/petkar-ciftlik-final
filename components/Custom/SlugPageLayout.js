
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
                homePageUrl="/"
                homePageText="Home"
                activePageText="Hakkımzıda"
                imgUrl="/img/logo.png"
                imgClass="bg-1"
                postHeader="{service.postHeader}"
            />

            <div className="services-details-area">
                <div className="container">
                    <div className='row m-5'>
                        <div className='offset-lg-3 col-lg-6 service-content'>
                        <div className='mb-3'> Petkar Çiftliği olarak 2013 yılında faaliyete geçmiş bulunmaktayız. Bölgesinde öncü damızlık yetiştiricisi olma hedefiyle yola çıkan Petkar çiftliği, bu hedefini gerçekleştirmek için gerekli olabilecek kapalı ağıl alanları( 3.000 m2), kuzu büyütme ünitesi, sılaj ve yem depoları, idari binalar, elektrik ve su arıtma sistemleri gibi küçükbaş hayvan yetiştiriciliği için Avrupa standartlarında ve eksiksiz bir donanıma sahiptir.</div>
                        <div className='mb-3'> Kurulduğu günden itibaren edindiğimiz küçükbaş yetiştiriciliği deneyimi ve uzmanlığımız güvencesiyle 2021 yılında Fransa’dan ithal ettiğimiz safkan İle de France koyunları ile faaliyetlerimiz devam etmektedir. </div>
                        <div className='mb-3'>İklim koşullarına kolay uyum sağlayabilmesinin yanında verim, adaptasyon ve bakım koşullarının kolaylığı nedeniyle Ülkemize ve bölgemize küçükbaş yetiştiriciliğinde büyük katkılar sağlayacağına inandığımız için İle de France ırkını tercih ettik. </div>
                        <div className='mb-3'>Üstün etçi genetiğe sahip olan İle de France koyunlarımızın sürü adaptasyonunu tamamlamış olup, Yavru üretimi ve damızlık satışı faaliyetlerimiz başlamış bulunmaktadır.</div>

                        </div>
                    </div>
                </div>
            </div>


            <Footer services={services} cosmeticServices={cosmeticServices} abouts={abouts} />
        </>
    )
}

export default SlugPageLayout;