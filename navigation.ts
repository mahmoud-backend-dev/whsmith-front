import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const pathnames = {
  "/": "/",
  "/cart": "/cart",
  "/sign-in": "/sign-in",
  "/sign-up": "/sign-up",

  "/account": "/account",
  "/account/details": "/account/details",

  "/account/orders": "/account/orders",
  "/account/security": "/account/security",

  "/admin": "/admin",
  "/admin/stores": "/admin/stores",
  "/admin/categories": "/admin/categories",
  "/admin/products": "/admin/products",
  "/admin/orders": "/admin/orders",
  "/admin/users": "/admin/users",
  "/admin/admins": "/admin/admins",
  "/admin/roles": "/admin/roles",

  "/admin/home": "/admin/home",
  "/admin/home/images-section": "/admin/home/images-section",
  "/admin/home/products-section-2": "/admin/home/products-section-2",
  "/admin/home/main-categories": "/admin/home/main-categories",
  "/admin/home/brands": "/admin/home/brands",

  "/admin/partners": "/admin/partners",
  "admin/stores": "/admin/stores",
  "admin/categories": "/admin/categories",
  "admin/products": "/admin/products",
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({ locales, pathnames });
