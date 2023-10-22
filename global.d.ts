// Use type safe message keys with `next-intl`
type Messages = typeof import("./messages/en.json");
declare interface IntlMessages extends Messages {}

declare namespace NodeJS {
  interface ProcessEnv {
    readonly API_URL: string;
    readonly RATE_LIMIT_TOKEN: string;
  }
}
