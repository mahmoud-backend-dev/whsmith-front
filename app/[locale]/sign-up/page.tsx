import { SignLayout } from "@/components/pages/sign/layout";
import SignUpPage from "@/components/pages/sign/sign-up";
import { redirect } from "@/navigation";
import { getSession } from "@/utils/session";

export default async function SignUp({ searchParams }: { searchParams: any }) {
  const session = await getSession();

  if (session)
    return redirect({
      pathname: searchParams.next ?? "/",
    });
  return (
    <SignLayout>
      <SignUpPage />
    </SignLayout>
  );
}
