"use client";

import { IconButton, Table, Flex, Badge } from "@radix-ui/themes";
import { RxEyeOpen } from "react-icons/rx";
import { MdOutlineFilterList } from "react-icons/md";
import { Input } from "@/components/form/input";
import { orders } from "@/utils/mocks-data";
import { OrderStatus } from "@/types";
import { useStoreMock } from "@/hooks/mocks";
import { useIsRtl } from "@/hooks/rtl";
import { useTranslations } from "next-intl";

export function OrdersTable() {
  const stores = useStoreMock();
  const isRtl = useIsRtl();
  const align = isRtl ? "right" : "left";
  const reverseAlign = isRtl ? "left" : "right";
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
              {t("order-id")}
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell align={align}>
              {t("store")}
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell align="center">
              {t("items-count")}
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell align="center">
              {t("status")}
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell align="center">
              {t("total-price")}
            </Table.ColumnHeaderCell>

            <Table.ColumnHeaderCell
              align={reverseAlign}
              width={20}
            ></Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {orders.map(({ id, items, status, total, createdAt, storeId }) => (
            <Table.Row key={id} align="center">
              <Table.Cell align={align}>{id}</Table.Cell>
              <Table.Cell align={align}>{stores.get(storeId)?.name}</Table.Cell>
              <Table.Cell align="center">{items.length}</Table.Cell>

              <Table.Cell align="center">
                <Badge color={getBadgeColor(status)}>{t(status)}</Badge>
              </Table.Cell>
              <Table.Cell align="center">{total}</Table.Cell>

              <Table.Cell align={reverseAlign}>
                <IconButton variant="surface" size="2">
                  <RxEyeOpen size={18} />
                </IconButton>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Flex>
  );
}

const getBadgeColor = (status: OrderStatus) => {
  switch (status) {
    case OrderStatus.Cancelled:
      return "red";
    case OrderStatus.Received:
      return "green";
    case OrderStatus.Pending:
      return "gray";
    case OrderStatus.Processed:
      return "blue";
    default:
      return "gray";
  }
};
