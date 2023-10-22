"use client";

import { Link } from "@/navigation";
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
import { Admin, Role, admins } from "@/utils/constants";
import { Input } from "@/components/form/input";
import { useCallback } from "react";
import { fullName } from "@/utils";
import { useDirection, useIsRtl } from "@/hooks/rtl";
import { useTranslations } from "next-intl";

export function AdminsTable() {
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
            <Table.ColumnHeaderCell align="center">
              {t("roles")}
            </Table.ColumnHeaderCell>

            <Table.ColumnHeaderCell
              align={reverseAlign}
              width={20}
            ></Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {admins.map((admin) => (
            <Table.Row key={admin.firstName} align="center">
              <Table.Cell align={align}>
                <ThemeLink asChild underline="always">
                  <Link href={"#" as any}>{fullName(admin)}</Link>
                </ThemeLink>
              </Table.Cell>
              <Table.Cell align="center">
                <RolesPopover roles={admin.roles} />
              </Table.Cell>
              <Table.Cell align={reverseAlign}>
                <CellDropDown admin={admin} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Flex>
  );
}

function CellDropDown({ admin }: { admin: Admin }) {
  const t = useTranslations("common");
  const copyId = useCallback(() => {
    window.navigator.clipboard.writeText(admin.id);
  }, [admin]);
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
        <DropdownMenu.Item onClick={copyId}>{t("copy-id")}</DropdownMenu.Item>
        <DropdownMenu.Item color="red">{t("delete")}</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

function RolesPopover({ roles }: { roles: Role[] }) {
  const t = useTranslations("common");
  const { align, reverseAlign } = useDirection();

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="soft" size="1">
          {t("show")}
        </Button>
      </Popover.Trigger>
      <Popover.Content
        align="center"
        size="1"
        style={{
          width: 200,
          maxWidth: "100dvw",
          padding: 0,
          border: 0,
        }}
      >
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell align={align}>
                {t("name")}
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {roles.map(({ name }) => (
              <Table.Row key={name} align="center">
                <Table.Cell align={align}>{name}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Popover.Content>
    </Popover.Root>
  );
}
