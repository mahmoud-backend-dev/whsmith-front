import { AdminPanelHeader } from "@/components/header/admin-panel-header";
import { Button } from "@radix-ui/themes";
import styles from "../admin.module.scss";
import { Container } from "@/components/container";
import { ProductsTable } from "@/components/table/products-table";
import { RxPlus } from "react-icons/rx";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("common");
  return (
    <div>
      <AdminPanelHeader title={t("products")}>
        <Button variant="surface" radius="full" size="3">
          {t("new")} <RxPlus size="18" />
        </Button>
      </AdminPanelHeader>

      <Container className={styles.container}>
        <ProductsTable />
      </Container>
    </div>
  );
}
