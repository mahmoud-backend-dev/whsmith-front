import { AdminPanelHeader } from "@/components/header/admin-panel-header";
import styles from "../admin.module.scss";
import { Container } from "@/components/container";
import { CreateRoleDialog } from "@/components/dialog/role";
import { RolesTable } from "@/components/table/roles-table";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("common");
  return (
    <div>
      <AdminPanelHeader title={t("roles")}>
        <CreateRoleDialog />
      </AdminPanelHeader>

      <Container className={styles.container}>
        <RolesTable />
      </Container>
    </div>
  );
}
