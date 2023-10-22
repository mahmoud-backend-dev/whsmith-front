import { Header } from "@/components/header";
import { Flex } from "@radix-ui/themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex direction="column" height="100%" asChild>
      <main>
        <Header />
        {children}
      </main>
    </Flex>
  );
}
