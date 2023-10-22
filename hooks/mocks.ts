import { Locale } from "@/navigation";
import {
  HomePageSection,
  HomePageTranslation,
  OrderItem,
  OrderStatus,
  ProductTranslation,
  StoreInfo,
  StoreTranslation,
} from "@/types";
import {
  categories,
  orders,
  mockProducts,
  stores,
  homePages,
} from "@/utils/mocks-data";
import { useLocale } from "next-intl";
import { cache, useMemo } from "react";

export interface getArray<T> extends Array<T> {
  get(id: string): T | null;
}

export interface CategoryTranslated {
  id: string;
  name: string;
}

const mocksCategories = cache((locale: Locale): CategoryTranslated[] =>
  categories.map((category) => ({
    id: category.id,
    name: category[locale].name,
  }))
);

export const useCategoriesMock = () => {
  const locale = useLocale() as Locale;
  const data = mocksCategories(locale) as getArray<CategoryTranslated>;

  data.get = (id: string) => {
    return data.find((category) => category.id === id) || null;
  };

  return data;
};

export interface ProductTranslated extends ProductTranslation {
  id: string;
  images: string[];
  storeInfo: StoreInfo[];
  category: CategoryTranslated;
}

const mocksProducts = cache((locale: Locale): ProductTranslated[] =>
  mockProducts.map((product) => ({
    id: product.id,
    images: product.images,
    storeInfo: product.storeInfo,
    ...product[locale],
    category: mocksCategories(locale).find(
      (category) => category.id === product.categoryId
    )!,
  }))
);

export const useProductsMock = () => {
  const locale = useLocale() as Locale;
  const data = mocksProducts(locale) as getArray<ProductTranslated>;

  data.get = (id: string) => {
    return data.find((product) => product.id === id) || null;
  };

  return data;
};

export interface StoreTranslated extends StoreTranslation {
  id: string;
  postalCode: string;
}

const mocksStores = cache((locale: Locale): StoreTranslated[] =>
  stores.map((store) => ({
    id: store.id,
    postalCode: store.postalCode,
    ...store[locale],
  }))
);

export const useStoreMock = () => {
  const locale = useLocale() as Locale;
  const data = mocksStores(locale) as getArray<StoreTranslated>;

  data.get = (id: string) => {
    return data.find((store) => store.id === id) || null;
  };

  return data;
};

const homePageMock = cache(
  (
    locale: Locale
  ): {
    [K in HomePageSection]: HomePageTranslation;
  } =>
    Object.entries(homePages).reduce((acc, [key, value]) => {
      acc[key as HomePageSection] = value[locale];
      return acc;
    }, {} as { [K in HomePageSection]: HomePageTranslation })
);

export const useHomePageMock = () => {
  const locale = useLocale() as Locale;
  return homePageMock(locale);
};
