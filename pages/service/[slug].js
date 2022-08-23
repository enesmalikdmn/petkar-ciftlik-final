import { getService, getServices } from '../../lib/api';
import SlugPageLayout from '../../components/Custom/SlugPageLayout';

export default SlugPageLayout;


export async function getServerSideProps({ locale, params, preview = false, previewData }) {
    const service = await getService(params.slug, locale)
    const {servicesPage, abouts,services, cosmeticServicesPage, cosmeticServices} = await getServices(locale)
    return {
        props: {
            service,
            services,
            abouts,
            cosmeticServices,
            locale
        },
    }
}