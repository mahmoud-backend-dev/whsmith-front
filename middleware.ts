import createMiddleware from "next-intl/middleware";
import { locales } from "./navigation";

export default createMiddleware({
  locales,

  defaultLocale: "ar",
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
