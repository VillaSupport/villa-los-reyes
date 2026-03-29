import { ImgData } from "../../../shared/interfaces/common.interface";
import { FeatureItem } from "../../../shared/interfaces/feature-overview.interface";

export interface CategoryDetail {
  category: string;
  title: string;
  adventures: Adventure[];
}

export interface Adventure {
  id: string | number;
  slug: string;
  relatedPackageSlug: string,
  title: string;
  desc: string;
  imgs: { src: string; alt: string }[]; // Cambiado de string[] a objeto
  tips: string[];
}


export interface ExperienceCardData {
  title: string;
  image: ImgData;
  route: string;
}


export const mapFeatureToExperience = (
  feature: FeatureItem,
  baseRoute: string = '/experiences',
): ExperienceCardData => {
  return {
    title: feature.name,
    image: feature.image,
    route: `${baseRoute}/${feature.category.toLowerCase().trim().replace(/\s+/g, '-')}`,
  };
};
