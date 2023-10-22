import { Container } from "@/components/container";
import styles from "./sign.module.scss";
import { Logo } from "@/components/logo";

export function SignLayout({ children }: { children?: React.ReactNode }) {
  return (
    <Container className={styles.layout}>
      <Logo className={styles.logo} />
      <div className={styles.content}>{children}</div>
    </Container>
  );
}
