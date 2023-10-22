import styles from "./admin.module.scss";
import { AdminSidebar } from "@/components/sidebar/admin-sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <AdminSidebar />
      <div className={styles.body}>{children}</div>
    </div>
  );
}
