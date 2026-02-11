import { SharedImage } from "../../../shared/interfaces/common.interface";

export interface Benefit {
    id: string | number;
    slug: string;
    title: string;
    desc: string;
    images: SharedImage[];
    highlights: string[];
}

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
  images: SharedImage[];
  features: string[];
}

export interface RoomSpace extends BaseSpace {
  type: 'rooms'; // Etiqueta obligatoria
  items: RoomItem[];
}

export interface CommonSpace extends BaseSpace {
  type: 'common'; // Etiqueta obligatoria
  images: SharedImage[];
}

export type Space = RoomSpace | CommonSpace;

export interface FacilitiesDetail {
  category: string;
  spaces: Space[];
}