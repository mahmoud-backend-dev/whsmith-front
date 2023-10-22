import { Container } from "@/components/container";
import styles from "./account.module.scss";
import { AccountSidebar } from "@/components/sidebar/account";
import { redirect } from "@/navigation";
import { getSession } from "@/utils/session";

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session)
    return redirect({
      pathname: "/sign-in",
      query: {
        next: "/account",
      },
    });
  return (
    <div className={styles.layout}>
      <AccountSidebar />
      <div className={styles.body}>{children}</div>
    </div>
  );
}
