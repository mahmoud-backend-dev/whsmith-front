import { useTranslations } from "next-intl";
import * as Sidebar from "./";

const accountLinks = [
  {
    label: "home-page",
    href: "/admin/home",
    subLinks: [
      {
        label: "products-section-1",
        href: "/admin/home",
      },
      {
        label: "images-section",
        href: "/admin/home/images-section",
      },
      {
        label: "products-section-2",
        href: "/admin/home/products-section-2",
      },
      {
        label: "main-categories-section",
        href: "/admin/home/main-categories",
      },
      {
        label: "brands-section",
        href: "/admin/home/brands",
      },
    ],
  },
  {
    label: "stores",
    href: "/admin/stores",
    subLinks: [],
  },
  {
    label: "orders",
    href: "/admin/orders",
    subLinks: [],
  },
  {
    label: "admins",
    href: "/admin/admins",
    subLinks: [],
  },
  {
    label: "roles",
    href: "/admin/roles",
    subLinks: [],
  },
  {
    label: "users",
    href: "/admin/users",
    subLinks: [],
  },
  {
    label: "categories",
    href: "/admin/categories",
    subLinks: [],
  },
  {
    label: "products",
    href: "/admin/products",
    subLinks: [],
  },
] as const;

export function AdminSidebar() {
  const t = useTranslations("common");
  return (
    <Sidebar.Body title={t("admin-panel")}>
      {accountLinks.map((link) => (
        <Sidebar.Link
          key={link.label}
          href={link.href}
          name={t(link.label)}
          subLinks={link.subLinks.map((subLink) => ({
            name: t(subLink.label),
            href: subLink.href,
          }))}
        />
      ))}
    </Sidebar.Body>
  );
}
