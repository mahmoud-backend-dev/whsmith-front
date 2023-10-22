import { SignLayout } from "@/components/pages/sign/layout";
import SignInPage from "@/components/pages/sign/sign-in";
import { redirect } from "@/navigation";
import { getSession } from "@/utils/session";

export default async function SignIn({ searchParams }: { searchParams: any }) {
  const session = await getSession();

  if (session)
    return redirect({
      pathname: searchParams.next ?? "/",
    });

  return (
    <SignLayout>
      <SignInPage />
    </SignLayout>
  );
}
