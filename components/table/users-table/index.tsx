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
  Dialog,
  AlertDialog,
  Switch,
} from "@radix-ui/themes";
import { RxDotsHorizontal } from "react-icons/rx";
import { MdOutlineFilterList } from "react-icons/md";
import { Admin, Role, admins, users } from "@/utils/constants";
import { Input } from "@/components/form/input";
import { useCallback, useEffect, useRef, useState } from "react";
import { fullName } from "@/utils";
import { useDirection } from "@/hooks/rtl";
import { useTranslations } from "next-intl";
import { APIUser } from "@/types/user";

export function UsersTable() {
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
            <Table.ColumnHeaderCell align={align} width={200}>
              {t("email")}
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell align="center">
              {t("status")}
            </Table.ColumnHeaderCell>

            <Table.ColumnHeaderCell
              align={reverseAlign}
              width={20}
            ></Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users.map((user) => (
            <Table.Row key={user.firstName} align="center">
              <Table.Cell align={align}>
                <ThemeLink asChild underline="always">
                  <Link href={"#" as any}>{fullName(user)}</Link>
                </ThemeLink>
              </Table.Cell>
              <Table.Cell align={align}>{user.email}</Table.Cell>
              <Table.Cell align="center">
                <Badge color={user.banned ? "red" : "green"}>
                  {user.banned ? t("banned") : t("active")}
                </Badge>
              </Table.Cell>
              <Table.Cell align={reverseAlign}>
                <CellDropDown user={user} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Flex>
  );
}

function CellDropDown({ user }: { user: APIUser }) {
  const t = useTranslations("common");
  const [open, setOpen] = useState(false);
  const copyId = useCallback(() => {
    window.navigator.clipboard.writeText(user.id);
  }, [user]);
  return (
    <>
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
          <DropdownMenu.Item color="red" onSelect={() => setOpen(true)}>
            {!user.banned ? t("ban") : t("unban")}
          </DropdownMenu.Item>

          <DropdownMenu.Item onClick={copyId}>{t("copy-id")}</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <BanDialog user={user} open={open} changeOpen={setOpen} />
    </>
  );
}

export function BanDialog({
  user: { firstName, lastName, email, banned, id },
  open,
  changeOpen,
}: {
  user: APIUser;
  open: boolean;
  changeOpen: (open: boolean) => void;
}) {
  const [forever, setForever] = useState(false);
  const t = useTranslations("common");

  return (
    <AlertDialog.Root open={open} onOpenChange={changeOpen}>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>
          {banned ? t("unban") : t("ban")}
          {firstName} {lastName}
        </AlertDialog.Title>

        {banned ? (
          <Flex gap="3" align="center">
            <Switch
              checked={forever}
              onCheckedChange={setForever}
              className="all-ltr"
            />
            <Input
              placeholder={t("duration")}
              disabled={forever}
              min={1}
              type="number"
            />
          </Flex>
        ) : undefined}

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              {t("cancel")}
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color="red">
              {banned
                ? t("unban")
                : `${t("ban")} ${forever ? t("forever") : ""}`}
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
