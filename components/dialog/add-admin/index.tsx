"use client";

import { Input } from "@/components/form/input";
import { Button, Dialog, Flex } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import { RxPlus } from "react-icons/rx";

export function AddAdminDialog() {
  const t = useTranslations("common");
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="surface" radius="full" size="3">
          {t("create")} <RxPlus size="18" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Content style={{ maxWidth: 700 }} size="4">
        <Dialog.Title>{t("addAdmin")}</Dialog.Title>

        <Flex direction="column" gap="3">
          <Input label={t("email")} />
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              {t("cancel")}
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>{t("add")}</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>{" "}
    </Dialog.Root>
  );
}
