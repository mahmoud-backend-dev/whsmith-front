"use client";

import Form from "@/components/form";
import { InputField } from "@/components/form/input";
import { LanguageSelect } from "@/components/form/select/language";
import { Locale, locales } from "@/navigation";
import { Store } from "@/types";
import { Button, Dialog, Flex } from "@radix-ui/themes";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { RxPlus } from "react-icons/rx";

export function CreateStoreDialog() {
  const locale = useLocale();
  const [selectedLocale, setSelectedLocale] = useState(() => locale as Locale);
  const [open, setOpen] = useState(false);
  const t = useTranslations("common");

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button variant="surface" radius="full" size="3">
          {t("stores")} <RxPlus size="18" />
        </Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 700 }} size="4">
        <Dialog.Title>
          <Flex justify="between" align="center" gap="3">
            {t("createStore")}
            <LanguageSelect
              onValueChange={(s) => setSelectedLocale(s as any)}
            />
          </Flex>
        </Dialog.Title>

        <Form
          initialValues={
            locales.reduce(
              (acc, locale) => ({
                ...acc,
                [locale]: { name: "", region: "", city: "" },
              }),
              { postalCode: "" }
            ) as Omit<Store, "id">
          }
          onSubmit={async (values) => alert(JSON.stringify(values, null, 2))}
        >
          <Flex direction="column" gap="3">
            <InputField label={t("name")} name={`${selectedLocale}.name`} />
            <InputField label={t("region")} name={`${selectedLocale}.region`} />
            <InputField label={t("city")} name={`${selectedLocale}.city`} />
            <InputField label={t("postal-code")} name="postalCode" />
          </Flex>
          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                {t("cancel")}
              </Button>
            </Dialog.Close>
            <Button type="submit">{t("create")}</Button>
          </Flex>
        </Form>
      </Dialog.Content>
    </Dialog.Root>
  );
}
