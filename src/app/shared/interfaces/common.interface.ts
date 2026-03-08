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

