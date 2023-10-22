import {
  Box,
  Card,
  DropdownMenu,
  Flex,
  IconButton,
  Text,
} from "@radix-ui/themes";
import styles from "./admin-product.module.scss";
import Link from "next/link";
import { RxDotsHorizontal, RxTrash } from "react-icons/rx";
import { ProductTranslated } from "@/hooks/mocks";
import { useTranslations } from "next-intl";

export function AdminProductCard({
  onDelete,
  product: { name, storeInfo: storePrices },
}: {
  product: ProductTranslated;
  onDelete?: () => void;
}) {
  const t = useTranslations("common");
  return (
    <Card asChild>
      <Link href="/admin/products/1" className={styles.link}>
        <Flex direction="column" gap="4" width="100%" position="relative">
          <Box className={styles.image} />
          <Flex direction="column" gap="2" width="100%">
            <Text size="3" weight="bold">
              {name}
            </Text>
            <Text size="2" color="gray">
              {storePrices[0].price} {t("sar")}
            </Text>
          </Flex>
        </Flex>
        {onDelete && (
          <IconButton
            size="3"
            color="red"
            className={styles.iconButton}
            onClick={onDelete}
          >
            <RxTrash size={20} />
          </IconButton>
        )}
      </Link>
    </Card>
  );
}

function CellDropDown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IconButton
          variant="soft"
          size="3"
          radius="full"
          className={styles.iconButton}
        >
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
