import { getService, getServices } from '../lib/api';
import SlugPageLayout from '../components/Custom/SlugPageLayout';

export default SlugPageLayout;



export async function getServerSideProps({ locale }) {
    const service = await getService('benefits-of-choosing-us', locale)
    const {servicesPage,abouts, services, cosmeticServicesPage, cosmeticServices} = await getServices(locale)
    return {
        props: {
            service,
            services,
            abouts,
            cosmeticServices
        },
    }
}

