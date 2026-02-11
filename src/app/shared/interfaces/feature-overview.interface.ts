import { FeatureTemplateItem } from "../templates/feature-overview-template/feature-overview-template";

export interface MainContent {
  slug: string;
  imageUrl: string;
  imgDesc: string;
  title: string;
  desc: string;
  linkText: string;
}

export interface PreviewContent {
  slug: string;
  imageUrl: string;
  imgDesc: string;
  title?: string;
  description?: string;
}


export interface FeatureItem {
  id: string | number;
  category: string;
  title: string;
  desc: string;
  linkText: string;
  imageUrl: string;
  imgDesc: string;
  previewItems: PreviewContent[];
}




export const mapToFeatureTemplateItem = (item: FeatureItem): FeatureTemplateItem => {
  return {
    main: {
      slug: String(item.category), // O item.category según prefieras para la ruta
      imageUrl: item.imageUrl,
      imgDesc: item.imgDesc,
      title: item.title,
      desc: item.desc,
      linkText: item.linkText
    },
    previews: item.previewItems
  };
};