import { Select } from "@radix-ui/themes";
import { locales } from "@/navigation";
import { useLocale, useTranslations } from "next-intl";

export function LanguageSelect({
  triggerClassName,
  ...props
}: React.ComponentPropsWithRef<typeof Select.Root> & {
  triggerClassName?: string;
}) {
  const t = useTranslations("navbar.language-branch");
  const locale = useLocale();
  return (
    <Select.Root defaultValue={locale} {...props}>
      <Select.Trigger className={triggerClassName} />
      <Select.Content>
        {locales.map((locale) => (
          <Select.Item value={locale} key={locale}>
            {t(locale)}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}
