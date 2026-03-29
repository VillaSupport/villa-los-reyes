import { FeatureTemplateItem } from '../templates/feature-overview-template/feature-overview-template';
import { ImgData } from './common.interface';

export interface CategoryDetail {
  slug: string;
  image: { src: string; alt: string };

  title: string;
  desc: string;
  linkText: string;
}

export interface AdventurePreview {
  slug: string;
  image: { src: string; alt: string };
  title?: string;
  description?: string;
}

export interface FeatureItem {
  id: string | number;
  name: string;
  category: string;
  title: string;
  desc: string;
  image: { src: string; alt: string };

  linkText: string;

  previewItems: AdventurePreview[];
}


export const mapToFeatureTemplateItem = (
  item: FeatureItem,
): FeatureTemplateItem => {
  return {
    main: {
      slug: String(item.category), // O item.category según prefieras para la ruta
      image: item.image,
      title: item.title,
      desc: item.desc,
      linkText: item.linkText,
    },
    previews: item.previewItems,
  };
};
