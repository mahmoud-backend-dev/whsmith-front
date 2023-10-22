import { BiSolidUser, BiSolidCart, BiKey } from "react-icons/bi";
import * as Sidebar from "../";

const accountLinks = [
  {
    name: "Account Details",
    href: "/account/details",
    icon: BiSolidUser,
  },
  {
    name: "Orders",
    href: "/account/orders",
    icon: BiSolidCart,
  },
  {
    name: "Security",
    href: "/account/security",
    icon: BiKey,
  },
] as const;

export function AccountSidebar() {
  return (
    <Sidebar.Body title="My Account">
      {accountLinks.map((link) => (
        <Sidebar.Link key={link.name} href={link.href} name={link.name} />
      ))}
    </Sidebar.Body>
  );
}
