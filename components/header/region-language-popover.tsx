"use client";
import { Box, Popover, Tabs, Theme } from "@radix-ui/themes";
import { useCallback } from "react";
import styles from "./header.module.scss";
import { TbWorld } from "react-icons/tb";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams, useRouter } from "next/navigation";
import queryString from "query-string";
import clsx from "clsx";
import { usePathname } from "@/navigation";
import { useIsRtl } from "@/hooks/rtl";
import { IconButton } from "@radix-ui/themes";

const languages = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "العربية",
    value: "ar",
  },
] as const;

export default function RegionLanguagePopover({
  revert,
}: {
  revert?: boolean;
}) {
  const t = useTranslations("navbar.language-branch");
  const searchParams = useSearchParams();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const rtl = useIsRtl();

  const changeLanguage = useCallback(
    (lang: string) => {
      const url = queryString.stringifyUrl({
        url: `/${lang}${pathname}`,
        query: Object.fromEntries(searchParams),
      });

      router.replace(url);
    },
    [pathname, router, searchParams]
  );

  return (
    <Theme
      accentColor="indigo"
      grayColor="slate"
      radius="large"
      appearance="light"
      asChild
    >
      <Popover.Root>
        <Popover.Trigger>
          <IconButton size="3" title="Cart" highContrast color="gray">
            <TbWorld size={22} />
          </IconButton>
        </Popover.Trigger>
        <Popover.Content
          align="end"
          alignOffset={0}
          style={{
            width: 350,
            maxWidth: "100%",
          }}
        >
          <Tabs.Root defaultValue="language" dir={rtl ? "rtl" : "ltr"}>
            <Tabs.List className={styles.list}>
              <Tabs.Trigger value="language" style={{ flex: 1 }}>
                {t("lang")}
              </Tabs.Trigger>
              <Tabs.Trigger value="region" style={{ flex: 1 }}>
                {t("branch")}
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="language">
              <Box px="4" pt="3" pb="2">
                <p>{t("lang-desc")}</p>

                <ul className={styles.languages}>
                  {languages.map(({ label, value }) => (
                    <li key={value}>
                      <button
                        className={clsx(
                          styles.language,
                          locale == value && styles.active
                        )}
                        onClick={() => changeLanguage(value)}
                      >
                        <span className={styles.originalName}>{label}</span>
                        <span className={styles.translatedName}>
                          {t(value)}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </Box>
            </Tabs.Content>

            <Tabs.Content value="region" className={styles.content}>
              <Box px="4" pt="3" pb="2">
                <p>{t("branch-desc")}</p>
              </Box>
            </Tabs.Content>
          </Tabs.Root>
        </Popover.Content>
      </Popover.Root>
    </Theme>
  );
}
