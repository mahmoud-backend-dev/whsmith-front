import { AdminPanelHeader } from "@/components/header/admin-panel-header";
import styles from "../admin.module.scss";
import { Container } from "@/components/container";
import { OrdersTable } from "@/components/table/orders-table";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("common");

  return (
    <div>
      <AdminPanelHeader title={t("orders")} />

      <Container className={styles.container}>
        <OrdersTable />
      </Container>
    </div>
  );
}
