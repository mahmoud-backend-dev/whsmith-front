"use client";

import { useDirection } from "@/hooks/rtl";
import { roles } from "@/utils/constants";
import { DropdownMenu, IconButton, Table } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import { RxDotsHorizontal } from "react-icons/rx";

export function RolesTable() {
  const t = useTranslations("common");
  const { align, reverseAlign } = useDirection();
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell align={align}>
            {t("name")}
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell
            align={reverseAlign}
            width={20}
          ></Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {roles.map((role) => (
          <Table.Row key={role.name} align="center">
            <Table.Cell align={align}>{role.name}</Table.Cell>

            <Table.Cell align="center">
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
