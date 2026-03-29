import { Benefit } from '../../features/services-facilities/interfaces/services-facilities.interface';

export interface ImgData {
  src: string;
  alt: string;
}

export interface LinkData {
  label: string;
  route: string;
}

export interface HeaderText {
  title: string;
  description: string;
}

// Interfaces de Composición (Base)
export interface WithLink {
  link?: LinkData;
}

export interface WithImage {
  img?: ImgData;
}

// Interfaces para Componentes Específicos
export interface HeaderData extends HeaderText, WithLink, WithImage {}

export interface InfoData {
  title: string;
  desc: string;
  featureTitle?: string;
  features?: string[];
  slug?: string;
  linkText?: string;
}

export const mapToInfoData = (benefit: Benefit, featureLabel: string): InfoData => {
  return {
    title: benefit.title,
    desc: benefit.desc,
    featureTitle: benefit.highlights?.length > 0 ? featureLabel : undefined,
    features: benefit.highlights,
    slug: benefit.slug,
  };
};
