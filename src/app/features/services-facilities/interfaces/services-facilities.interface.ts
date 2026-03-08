import { ImgData } from "../../../shared/interfaces/common.interface";

export interface Benefit {
  id: string | number;
  slug: string;
  title: string;
  desc: string;
  images: ImgData[];
  highlights: string[];
}

export interface BenefitCardData {
  title: string;
  image: ImgData;
  route: string;
  fragment: string;
}



export const mapToBenefitCard = (benefit: Benefit, category: string, baseRoute: string = '/services-facilities'): BenefitCardData => {

  const hasImage = benefit.images && benefit.images.length > 0;

  if (!hasImage) {
    console.warn(`⚠️ Warning: El beneficio con ID ${benefit.id} ("${benefit.title}") no tiene imágenes en la posición 0.`);
  }

  return {
    title: benefit.title,
    image: hasImage ? benefit.images[0] : { src: '', alt: '' },
    route: `${baseRoute}/${category}`,
    fragment: benefit.slug
  };
};


export interface StayBenefitsDetail {
  category: string;
  benefits: Benefit[];
}

interface BaseSpace {
  id: number | string;
  slug: string;
  title: string;
  desc: string;
}

export interface RoomItem {
  title: string;
  desc: string;
  capacity: string;
  images: ImgData[];
  features: string[];
}

export interface RoomSpace extends BaseSpace {
  type: 'rooms'; // Etiqueta obligatoria
  items: RoomItem[];
}

export interface CommonSpace extends BaseSpace {
  type: 'common'; // Etiqueta obligatoria
  images: ImgData[];
}

export type Space = RoomSpace | CommonSpace;

export interface FacilitiesDetail {
  category: string;
  spaces: Space[];
}