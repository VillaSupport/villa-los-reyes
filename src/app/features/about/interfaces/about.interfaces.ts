import { ImgData } from "../../../shared/interfaces/common.interface";



export interface AboutMap {
  url: string;
}

export interface AboutData {
  id: string;
  slug: string;
  title: string;
  description: string;
  images?: ImgData[];
  map?: AboutMap;
}