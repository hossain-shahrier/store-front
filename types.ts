import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}
export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}
export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: Image[];
}
export interface Size {
  id: string;
  name: string;
}
export interface Image {
  [x: string]: string | StaticImport;
  id: string;
  name: string;
  value: string;
}
export interface Color {
  id: string;
  name: string;
  value: string;
}
