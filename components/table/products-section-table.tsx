"use client";

import { Link } from "@/navigation";
import {
  IconButton,
  Table,
  DropdownMenu,
  Link as ThemeLink,
} from "@radix-ui/themes";
import { RxDotsHorizontal, RxTrash } from "react-icons/rx";

const products = [
  {
    name: "Book 1",
    category: "Category 1",
    price: 100,
  },
  {
    name: "Book 2",
    category: "Category 2",
    price: 200,
  },
];

export function ProductsSectionTable() {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Category</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell width={150} align="center">
            Price
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell width={60} align="center">
            <HeaderDropDown />
          </Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {products.map((product) => (
          <Table.Row key={product.name} align="center">
            <Table.Cell>
              <ThemeLink asChild underline="always">
                <Link href={"#" as any}>{product.name}</Link>
              </ThemeLink>
            </Table.Cell>
            <Table.Cell>{product.category}</Table.Cell>
            <Table.Cell align="center">{product.price}</Table.Cell>
            <Table.Cell align="center">
              <CellDropDown />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}

function CellDropDown() {
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
        <DropdownMenu.Item color="red">Delete</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

function HeaderDropDown() {
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
        <DropdownMenu.Item>Add</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
