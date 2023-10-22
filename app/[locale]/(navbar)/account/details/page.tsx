import { Container } from "@/components/container";
import { AdminPanelHeader } from "@/components/header/admin-panel-header";
import styles from "../account.module.scss";
import { AccountDetailsForm } from "@/components/form/account-detail";
import { getSession } from "@/utils/session";

export default async function AccountDetails() {
  const session = (await getSession())!;

  return (
    <div>
      <AdminPanelHeader title="Account Details" />

      <Container className={styles.container}>
        <AccountDetailsForm user={session.user} token={session.token} />
      </Container>
    </div>
  );
}
