"use client";

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <NextAuthSessionProvider refetchInterval={60} refetchOnWindowFocus={true}>
      {children}
    </NextAuthSessionProvider>
  );
};
