import { AdminPanelHeader } from "@/components/header/admin-panel-header";
import styles from "../admin.module.scss";
import { Container } from "@/components/container";
import { CategoriesTable } from "@/components/table/categories-table";
import { CreateCategoryDialog } from "@/components/dialog/create-category";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("common");
  return (
    <div>
      <AdminPanelHeader title={t("categories")}>
        <CreateCategoryDialog />
      </AdminPanelHeader>

      <Container className={styles.container}>
        <CategoriesTable />
      </Container>
    </div>
  );
}
