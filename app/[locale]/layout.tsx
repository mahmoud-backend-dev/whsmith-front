import "./globals.scss";
import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { locales } from "@/navigation";
import { notFound } from "next/navigation";
import pick from "lodash/pick";
import { useIsRtl } from "@/hooks/rtl";
import clsx from "clsx";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { SessionProvider } from "@/components/providers/session";
import { Toaster } from "react-hot-toast";

const clientSideMessages = ["navbar", "common"];

export const metadata: Metadata = {
  title: "WhSmith",
  description: "WhSmith",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();
  const rtl = useIsRtl();
  const messages = useMessages()!;
  return (
    <html lang={locale} suppressHydrationWarning dir={rtl ? "rtl" : "ltr"}>
      <body>
        <Toaster />
        <SessionProvider>
          <NextIntlClientProvider
            locale={locale}
            messages={pick(messages, clientSideMessages)}
          >
            <Theme
              accentColor="indigo"
              grayColor="slate"
              radius="medium"
              appearance="light"
              style={{ minHeight: "100%", height: "100%" }}
            >
              {children}
            </Theme>
          </NextIntlClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
