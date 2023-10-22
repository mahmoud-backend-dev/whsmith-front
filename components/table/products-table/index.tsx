"use client";

import { Link, Locale } from "@/navigation";
import {
  IconButton,
  Table,
  DropdownMenu,
  Link as ThemeLink,
  Flex,
  Button,
  Popover,
  Badge,
} from "@radix-ui/themes";
import { RxDotsHorizontal } from "react-icons/rx";
import { MdOutlineFilterList } from "react-icons/md";
import { Input } from "@/components/form/input";
import styles from "./table.module.scss";
import { useLocale, useTranslations } from "next-intl";
import { StoreInfo } from "@/types";
import { useProductsMock, useStoreMock } from "@/hooks/mocks";
import { useDirection, useIsRtl } from "@/hooks/rtl";

export function ProductsTable() {
  const products = useProductsMock();
  const { align, reverseAlign } = useDirection();
  const t = useTranslations("common");
  return (
    <Flex direction="column" gap="3">
      <Flex gap="3">
        <Input placeholder={t("search")} name="search" size="3" />
        <IconButton variant="outline" color="gray" size="3">
          <MdOutlineFilterList size={22} />
        </IconButton>
      </Flex>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell align={align}>
              {t("name")}
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell
              className={styles.categoryCell}
              align={align}
            >
              {t("category")}
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell align="center">
              {t("prices")}
            </Table.ColumnHeaderCell>

            <Table.ColumnHeaderCell
              align={reverseAlign}
              width={20}
            ></Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {products.map((product) => (
            <Table.Row key={product.id} align="center">
              <Table.Cell align={align}>
                <ThemeLink asChild underline="always">
                  <Link href={"#" as any}>{product.name}</Link>
                </ThemeLink>
              </Table.Cell>
              <Table.Cell className={styles.categoryCell} align={align}>
                {product.category.name}
              </Table.Cell>
              <Table.Cell align="center">
                <PricesPopover storeInfo={product.storeInfo} />
              </Table.Cell>
              <Table.Cell align={reverseAlign}>
                <CellDropDown />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Flex>
  );
}

function CellDropDown() {
  const t = useTranslations("common");
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IconButton variant="ghost" size="2" color="gray">
          <RxDotsHorizontal size={18} />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        align="end"
        side="bottom"
        style={{
          minWidth: 150,
        }}
      >
        <DropdownMenu.Item>{t("edit")}</DropdownMenu.Item>
        <DropdownMenu.Item color="red">{t("delete")}</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

function PricesPopover({ storeInfo }: { storeInfo: StoreInfo[] }) {
  const stores = useStoreMock();
  const t = useTranslations("common");
  const { align } = useDirection();
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="soft" size="1">
          {t("show")}
        </Button>
      </Popover.Trigger>
      <Popover.Content
        align="end"
        size="1"
        style={{
          width: 400,
          maxWidth: "100dvw",
          padding: 0,
          border: 0,
        }}
      >
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell align={align}>
                {t("store")}
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell align="center">
                {t("price")}
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell align="center">
                {t("discount")}
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell align="center">
                {t("quantity")}
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {storeInfo.map(({ price, discount, storeId, quantity }) => (
              <Table.Row key={storeId} align="center">
                <Table.Cell align={align}>
                  {stores.get(storeId)?.name}
                </Table.Cell>
                <Table.Cell align="center">${price}</Table.Cell>
                <Table.Cell align="center">
                  {discount ? (
                    <Badge color="red">
                      {`$${discount} - ${+(
                        100 -
                        ((price - discount) / price) * 100
                      ).toFixed(2)}%`}
                    </Badge>
                  ) : (
                    t("n/a")
                  )}
                </Table.Cell>
                <Table.Cell align="center">{quantity}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Popover.Content>
    </Popover.Root>
  );
}
