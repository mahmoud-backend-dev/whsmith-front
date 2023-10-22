import { Container } from "@/components/container";
import { AdminPanelHeader } from "@/components/header/admin-panel-header";
import styles from "../account.module.scss";
import { AccountDetailsForm } from "@/components/form/account-detail";
import { getSession } from "@/utils/session";
import { AccountSecurityForm } from "@/components/form/account-security";

export default async function AccountSecurity() {
  const session = (await getSession())!;

  return (
    <div>
      <AdminPanelHeader title="Account Security" />

      <Container className={styles.container}>
        <AccountSecurityForm token={session.token} />
      </Container>
    </div>
  );
}
