import { getPageWithNameLocale, getPostWithName, getServices } from '../lib/api';
import SlugPageLayout from '../components/Custom/SlugPageLayout';

// const AboutUs = ({ service,abouts, services, cosmeticServices }) => {
//     return (
//         <>
//             <Navbar services={services} cosmeticServices={cosmeticServices} abouts={abouts} />

//             <PageBanner
//                 pageTitle={service?.title}
//                 homePageUrl="/"
//                 homePageText="Home"
//                 activePageText={service?.title}
//                 imgClass="bg-1"
//                 postHeader={service.postHeader}
//             />

//             <div className="services-details-area ptb-100">
//                 <div className="container">
//                     <div className="row justify-content-center">
//                         {/* <div className="col-lg-6">
//                 <div className="services-img">
//                     <img src={service?.image || "/img/service-details/service-details1.jpg"} alt={service?.title} />
//                 </div>
//             </div> */}
//                         <div className='col-lg-6'>
//                             {service?.content}
//                         </div>
//                     </div>
//                     <CAccordion items={service?.accordionItems} />
//                 </div>
//             </div>



//             <Footer />
//         </>
//     )
// }

export default SlugPageLayout;



export async function getServerSideProps({ locale }) {
    
    const post = await getPageWithNameLocale("testimonials", locale)
    const { servicesPage, services, abouts, cosmeticServicesPage, cosmeticServices } = await getServices(locale)
    return {
        props: {
            service: post,
            services: services,
            cosmeticServices: cosmeticServices,
            abouts: abouts
        },
    }
}


