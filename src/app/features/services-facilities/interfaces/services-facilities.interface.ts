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
  images: ImgData;
  route: string;
  fragment: string;
}



const mapToBenefitCard = (benefit: Benefit, baseRoute: string): BenefitCardData => {
  
  return {
    title: benefit.title,
    images: benefit.images && benefit.images.length > 0 ? benefit.images[0] : {} as ImgData,
    route: `${baseRoute}/${benefit.slug}`,
    fragment: benefit.slug
  };
};


let a:Benefit[] = [{
  id: "",
  slug: "",
  title: "",
  desc: "",
  images: [],
  highlights: []
}] 

let img:ImgData  = a[0].images[0];

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