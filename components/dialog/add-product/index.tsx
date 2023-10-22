"use client";

import { AdminProductCard } from "@/components/cards/admin-product";
import { ProductsContainer } from "@/components/container/product-container";
import { Input } from "@/components/form/input";
import { useProductsMock } from "@/hooks/mocks";
import { locales } from "@/navigation";
import { mockProducts } from "@/utils/mocks-data";
import {
  Button,
  Card,
  Dialog,
  Flex,
  Inset,
  Separator,
  Text,
  TextField,
} from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import { useCallback, useMemo, useState } from "react";
import { RxPlus } from "react-icons/rx";

export function AddProductSectionDialog() {
  const t = useTranslations("common");
  const [filter, setFilter] = useState("");
  const [timeoutId, setTimeoutId] = useState<any>(null);
  const products = useProductsMock();

  const handleFilterChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (timeoutId) clearTimeout(timeoutId);
      setTimeoutId(
        setTimeout(() => {
          setFilter(value);
        }, 500)
      );
    },
    [timeoutId]
  );

  const filteredProducts = useMemo(() => {
    if (!filter) return products.map((product) => product);

    const filtered = mockProducts.filter((product) =>
      locales.some(
        (locale) =>
          product[locale].name.toLowerCase().includes(filter.toLowerCase()) ||
          product[locale].description
            .toLowerCase()
            .includes(filter.toLowerCase())
      )
    );
    return products.filter((product) =>
      filtered.some((p) => p.id === product.id)
    );
  }, [filter, products]);
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="surface" radius="full" size="3">
          {t("addProduct")} <RxPlus size="18" />
        </Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 700 }} size="4">
        <Dialog.Title>{t("addProduct")}</Dialog.Title>

        <Card>
          <Flex direction="column" gap="3">
            <Input
              type="search"
              placeholder={t("search")}
              onChange={handleFilterChange}
            />

            <Separator my="3" size="4" />
            <Inset side="all">
              <ProductsContainer
                size="small"
                style={{
                  maxHeight: 300,
                  padding: "1rem",
                  overflowY: "auto",
                }}
              >
                {filteredProducts.map((product) => (
                  <AdminProductCard
                    key={product.id}
                    product={product}
                    onDelete={() => {}}
                  />
                ))}
              </ProductsContainer>
            </Inset>
          </Flex>
        </Card>

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
      </Dialog.Content>
    </Dialog.Root>
  );
}
