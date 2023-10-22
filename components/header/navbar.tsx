"use client";
import { useNavbar } from "@/hooks/navbar";
import styles from "./header.module.scss";
import { useCallback, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import clsx from "clsx";
import { Button, IconButton } from "@radix-ui/themes";
import { useCategoriesMock } from "@/hooks/mocks";

export function Navbar() {
  const { isOpen, setOpen, isMobile, setIsMobile } = useNavbar();
  const categories = useCategoriesMock();

  const handleResize = useCallback(() => {
    if (window.innerWidth <= 768 && !isMobile) setIsMobile(true);
    else if (window.innerWidth > 768 && isMobile) setIsMobile(false);
  }, [setIsMobile, isMobile]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (isMobile) setOpen(false);

    // eslint-disable-next-line
  }, [isMobile]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  return (
    <nav className={clsx(styles.navbar, !isOpen && styles.hide)}>
      <div className={styles.navbarHeader}>
        <h3>Categories</h3>

        <IconButton
          title="Close"
          variant="ghost"
          size="3"
          onClick={() => setOpen(false)}
          className={styles.closeButton}
        >
          <GrClose size={22} />
        </IconButton>
      </div>

      <ul className={styles.navbarList}>
        {categories.slice(0, 10).map(({ id, name }) => (
          <li key={id} className={styles.navbarItem}>
            <a href="#" className={styles.navbarLink}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
