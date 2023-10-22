import { Locale } from "@/navigation";

export interface Order {
  id: string;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
  total: number;
  storeId: string;
  items: OrderItem[];
}

export enum OrderStatus {
  Pending = "Pending",
  Processed = "Processed",
  Received = "Received",
  Cancelled = "Cancelled",
}

export interface OrderItem extends LocaleMap<ProductTranslation> {
  id: string;
  price: number;
  discount: number;
  quantity: number;
}

export type ProductTranslation = {
  name: string;
  description: string;
};

export interface Product extends LocaleMap<ProductTranslation> {
  id: string;
  images: string[];
  categoryId: string;
  storeInfo: StoreInfo[];
}

export interface StoreInfo {
  storeId: string;
  price: number;
  discount: number;
  quantity: number;
}

export type LocaleMap<T> = {
  [locale in Locale]: T;
};

export type CategoryTranslation = { name: string };

export interface Category extends LocaleMap<CategoryTranslation> {
  id: string;
}

export type StoreTranslation = { name: string; region: string; city: string };

export interface Store extends LocaleMap<StoreTranslation> {
  id: string;
  postalCode: string;
}

export type HomePageSection =
  | "productsSection1"
  | "imagesSection"
  | "productsSection2"
  | "mainCategories"
  | "brands";
export interface HomePageTranslation {
  title: string;
  description: string;
}

export type HomePage = LocaleMap<HomePageTranslation>;
