"use client";

import { useCallback } from "react";
import Form from "../form";
import { InputField } from "../form/input";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./header.module.scss";
import { IconButton, TextField } from "@radix-ui/themes";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { useTranslations } from "next-intl";
import { useIsRtl } from "@/hooks/rtl";

export function SearchBar({ className }: { className?: string }) {
  const t = useTranslations("common");
  const isRtl = useIsRtl();

  const handleSubmit = useCallback((values: any) => {
    alert(JSON.stringify(values));
  }, []);
  return (
    <Form
      initialValues={{ search: "" }}
      onSubmit={handleSubmit}
      className={className}
    >
      {({ submitForm }) => (
        <InputField
          name="search"
          size="3"
          color="gray"
          className={styles.searchBar}
          placeholder={t("search")}
          before={<AiOutlineSearch size={22} />}
          after={
            <IconButton
              size="1"
              title={t("search")}
              color="gray"
              variant="ghost"
              className={styles.searchButton}
              type="submit"
            >
              {isRtl ? <BsArrowLeftShort /> : <BsArrowRightShort />}
            </IconButton>
          }
        />
      )}
    </Form>
  );
}
