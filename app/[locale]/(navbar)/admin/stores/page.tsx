import { AdminPanelHeader } from "@/components/header/admin-panel-header";
import styles from "../admin.module.scss";
import { Container } from "@/components/container";
import { StoresTable } from "@/components/table/stores-table";
import { CreateStoreDialog } from "@/components/dialog/create-store";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("common");
  return (
    <div>
      <AdminPanelHeader title={t("stores")}>
        <CreateStoreDialog />
      </AdminPanelHeader>

      <Container className={styles.container}>
        <StoresTable />
      </Container>
    </div>
  );
}
