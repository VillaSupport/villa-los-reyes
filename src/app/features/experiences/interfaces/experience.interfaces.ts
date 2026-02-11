export interface CategoryDetail {
  category: string;
  title: string;
  adventures: Adventure[];
}

export interface Adventure {
  id: string | number;
  slug: string;
  title: string;
  desc: string;
  images: { imageUrl: string; imgDesc: string }[]; // Cambiado de string[] a objeto
  tips: string[];
}

