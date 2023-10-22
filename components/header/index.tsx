"use client";

import { forwardRef } from "react";
import styles from "./header.module.scss";
import clsx from "clsx";
import { Container } from "../container";
import { Logo } from "../logo";
import { SearchBar } from "./search-bar";
import { BiSolidUser, BiSolidCart } from "react-icons/bi";
import { Navbar } from "./navbar";
import { useNavbar } from "@/hooks/navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import RegionLanguagePopover from "./region-language-popover";
import { IconButton, Theme } from "@radix-ui/themes";
import { Link, usePathname } from "@/navigation";
import { useSession } from "next-auth/react";

export const Header = forwardRef<
  HTMLElement,
  Omit<React.HTMLAttributes<HTMLElement>, "children">
>(function Header({ className, ...props }, ref) {
  const { isOpen, setOpen } = useNavbar();
  const { data } = useSession();
  const pathname = usePathname();

  return (
    <header className={clsx(styles.header, className)} ref={ref} {...props}>
      <Container>
        <div className={styles.container}>
          <Logo className={styles.logo} />

          <div className={styles.actions}>
            <SearchBar className={styles.desktopSearchBar} />

            <Theme
              accentColor="indigo"
              grayColor="slate"
              radius="large"
              appearance="dark"
              asChild
            >
              <div className={styles.buttons}>
                <RegionLanguagePopover />

                <IconButton
                  size="3"
                  title="Cart"
                  highContrast
                  color="gray"
                  asChild
                >
                  <Link href="/cart">
                    <BiSolidCart size={22} />
                  </Link>
                </IconButton>
                <IconButton
                  size="3"
                  title="Sign In"
                  highContrast
                  color="gray"
                  asChild
                >
                  <Link
                    href={
                      data?.user
                        ? ("/account" as any)
                        : {
                            pathname: "/sign-in",
                            query: {
                              next: pathname,
                            },
                          }
                    }
                  >
                    <BiSolidUser size={22} />
                  </Link>
                </IconButton>
                <IconButton
                  size="4"
                  title="Categories"
                  asChild
                  color="gray"
                  highContrast
                  variant="ghost"
                  className={styles.categoriesButton}
                >
                  <button onClick={() => setOpen(!isOpen)}>
                    <GiHamburgerMenu size={22} />
                  </button>
                </IconButton>
              </div>
            </Theme>
          </div>
        </div>

        <SearchBar className={styles.mobileSearchBar} />
      </Container>
      <Navbar />
    </header>
  );
});
