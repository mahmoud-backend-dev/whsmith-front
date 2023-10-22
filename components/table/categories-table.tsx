"use client";
import { useCategoriesMock } from "@/hooks/mocks";
import { useDirection } from "@/hooks/rtl";
import { IconButton, Table, DropdownMenu } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import { RxDotsHorizontal } from "react-icons/rx";

export function CategoriesTable() {
  const categories = useCategoriesMock();
  const { align, reverseAlign } = useDirection();
  const t = useTranslations("common");
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell align={align}>
            {t("name")}
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell width={0} align={reverseAlign} />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {categories.map((category) => (
          <Table.Row key={category.name} align="center">
            <Table.Cell align={align}>{category.name}</Table.Cell>
            <Table.Cell align={reverseAlign}>
              <CellDropDown />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
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
