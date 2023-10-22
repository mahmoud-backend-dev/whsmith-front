import { AdminPanelHeader } from "@/components/header/admin-panel-header";
import styles from "../admin.module.scss";
import { Container } from "@/components/container";
import { AddAdminDialog } from "@/components/dialog/add-admin";
import { AdminsTable } from "@/components/table/admins-table";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("common");
  return (
    <div>
      <AdminPanelHeader title={t("admins")}>
        <AddAdminDialog />
      </AdminPanelHeader>

      <Container className={styles.container}>
        <AdminsTable />
      </Container>
    </div>
  );
}
