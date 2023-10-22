"use client";

import { Input } from "@/components/form/input";
import { Button, Dialog, Flex } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import { RxPlus } from "react-icons/rx";

export function AddBrandDialog() {
  const t = useTranslations("common");
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="surface" radius="full" size="3">
          {t("add")} <RxPlus size="18" />
        </Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 700 }} size="4">
        <Dialog.Title>{t("addBrand")}</Dialog.Title>

        <Flex direction="column" gap="3">
          <Input label="Name" placeholder="Brand Name" />
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Create</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
