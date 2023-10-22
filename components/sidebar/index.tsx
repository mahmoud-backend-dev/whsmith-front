"use client";

import Button from "../button";
import styles from "./sidebar.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname, Link as OriginalLink, pathnames } from "@/navigation";
import clsx from "clsx";
import { Sheet, SheetContent, SheetTrigger } from "../sheet";
import { IconButton } from "@radix-ui/themes";
import { VscLayoutSidebarLeftOff } from "react-icons/vsc";
import { useSearchParams } from "next/navigation";
import { useIsRtl } from "@/hooks/rtl";

function OriginalBody({
  title,
  children,
  isDialog,
}: {
  title: string;
  children: React.ReactNode;
  isDialog?: boolean;
}) {
  return (
    <nav className={styles.body}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {isDialog && (
          <SheetTrigger className={styles.close} asChild>
            <Button
              type="transparentWhite"
              title="Close"
              icon={AiOutlineClose}
              size="large"
            />
          </SheetTrigger>
        )}
      </div>
      <ul className={styles.linkList}>{children}</ul>
    </nav>
  );
}

export function Body({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const isRtl = useIsRtl();
  return (
    <>
      <div className={styles.desktop}>
        <OriginalBody title={title}>{children}</OriginalBody>
      </div>
      <Sheet>
        <SheetTrigger className={styles.mobileTrigger} asChild>
          <IconButton variant="soft" size="3">
            <VscLayoutSidebarLeftOff size={18} />
          </IconButton>
        </SheetTrigger>
        <SheetContent side={isRtl ? "right" : "left"} className={styles.mobile}>
          <OriginalBody title={title} isDialog>
            {children}
          </OriginalBody>
        </SheetContent>
      </Sheet>
    </>
  );
}

type PathnameType = keyof typeof pathnames;

export function Link({
  href,
  name,
  subLinks,
}: {
  href: PathnameType;
  name: string;
  query?: Record<string, string | string[] | undefined>;
  subLinks?: {
    name: string;
    href: PathnameType;
  }[];
}) {
  const query = useSearchParams();
  const pathname = usePathname();
  const isActive = pathname.startsWith(href as any);
  return (
    <li className={styles.item}>
      <OriginalLink
        href={{
          pathname: href,
          query: query.toString(),
        }}
        className={clsx(isActive && styles.active, styles.linkAnchor)}
      >
        {name}
      </OriginalLink>

      {subLinks && subLinks?.length !== 0 && isActive && (
        <ul className={styles.subLinkList}>
          {subLinks.map(({ name, href }) => (
            <li key={name} className={styles.subItem}>
              <OriginalLink
                href={{
                  pathname: href,
                  query: query.toString(),
                }}
                className={clsx(
                  styles.linkAnchor,
                  pathname == href && styles.active
                )}
              >
                {name}
              </OriginalLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
