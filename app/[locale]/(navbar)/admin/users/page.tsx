import { AdminPanelHeader } from "@/components/header/admin-panel-header";
import styles from "../admin.module.scss";
import { Container } from "@/components/container";
import { AdminsTable } from "@/components/table/admins-table";
import { useTranslations } from "next-intl";
import { UsersTable } from "@/components/table/users-table";

export default function Page() {
  const t = useTranslations("common");
  return (
    <div>
      <AdminPanelHeader title={t("users")} />

      <Container className={styles.container}>
        <UsersTable />
      </Container>
    </div>
  );
}
