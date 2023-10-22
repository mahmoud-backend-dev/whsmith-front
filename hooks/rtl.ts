import { useLocale } from "next-intl";

export const useIsRtl = () => {
  const locale = useLocale();
  return locale === "ar";
};

export const useDirection = () => {
  const isRtl = useIsRtl();
  const align = isRtl ? "right" : "left";
  const reverseAlign = isRtl ? "left" : "right";
  return {
    align,
    reverseAlign,
    direction: isRtl ? "rtl" : "ltr",
  } as const;
};
