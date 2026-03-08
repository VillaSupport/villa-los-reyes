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

