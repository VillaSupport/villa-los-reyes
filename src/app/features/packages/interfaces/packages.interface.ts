import { ImgData } from "../../../shared/interfaces/common.interface";

/**
 * Representa la entidad completa del Paquete (Modelo de Datos)
 */
export interface Package {
    id: number | string;
    slug: string;
    title: string;
    desc: string;
    duration: string;
    image: ImgData;
    price: number;
    currency: 'USD';
    billingType: string;
    itinerary: string[];
    includes: {
        activities: string[];
        gastronomy: string[];
        transportation: string[];
    };
}

/**
 * Representa la información simplificada para las Tarjetas (Modelo de UI)
 */
export interface PackageCardData {
    id: number | string;
    route: string;
    title: string;
    image: ImgData;
    duration: string;
    desc: string;
    price: number;
    unit: string;
}


/**
 * Mapper: Transforma un objeto de tipo Package al formato PackageCardData.
 * Ideal para limpiar la data antes de enviarla a componentes de presentación.
 */
export const mapToPackageCardData = (
    pkg: Package,
    baseRoute: string = '/packages'): PackageCardData =>
({
    id: pkg.id,
    route: `${baseRoute}/${pkg.slug}`,
    title: pkg.title,
    image: pkg.image,
    duration: pkg.duration,
    desc: pkg.desc,
    price: pkg.price,
    unit: pkg.billingType,
});