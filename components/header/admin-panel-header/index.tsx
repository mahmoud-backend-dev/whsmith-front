import { Box, Flex, Heading } from "@radix-ui/themes";
import styles from "./admin-panel-header.module.scss";
import { Container } from "@/components/container";

export function AdminPanelHeader({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <Box
      className={styles.header}
      position={{
        md: "sticky",
      }}
      top="0"
      asChild
      py={{
        initial: "3",
        md: "6",
      }}
    >
      <header>
        <Container>
          <Flex
            direction={{
              md: "row",
              initial: "column",
            }}
            align={{
              md: "center",
            }}
            justify="between"
            gap="4"
          >
            <h3 className={styles.title}>{title}</h3>
            <Flex align="center" gap="2">
              {children}
            </Flex>
          </Flex>
        </Container>
      </header>
    </Box>
  );
}
