"use client";

import { Button, DropdownMenu, IconButton, Table } from "@radix-ui/themes";
import { RxDotsHorizontal } from "react-icons/rx";
import styles from "./table.module.scss";
import { useStoreMock } from "@/hooks/mocks";
import { useIsRtl } from "@/hooks/rtl";
import { useTranslations } from "next-intl";

export function StoresTable() {
  const store = useStoreMock();
  const isRtl = useIsRtl();
  const align = isRtl ? "right" : "left";
  const reverseAlign = isRtl ? "left" : "right";
  const t = useTranslations("common");
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell width={300} align={align}>
            {t("name")}
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell width={150} align={align}>
            {t("region")}
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell width={150} align={align}>
            {t("city")}
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell
            width={150}
            align="center"
            className={styles.postCodeCell}
          >
            {t("postal-code")}
          </Table.ColumnHeaderCell>

          <Table.ColumnHeaderCell
            align={reverseAlign}
            width={20}
          ></Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {store.map((store) => (
          <Table.Row key={store.name} align="center">
            <Table.Cell align={align}>{store.name}</Table.Cell>
            <Table.Cell align={align}>{store.region}</Table.Cell>
            <Table.Cell align={align}>{store.city}</Table.Cell>
            <Table.Cell align="center" className={styles.postCodeCell}>
              {store.postalCode}
            </Table.Cell>
            <Table.Cell align={reverseAlign}>
              <TableDropDown />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}

function TableDropDown() {
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
