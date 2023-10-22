"use client";
import Form from "@/components/form";
import styles from "./sign.module.scss";
import { InputField } from "@/components/form/input";
import { ErrorCode, YUP_PASSWORD } from "@/utils/constants";
import { object, string } from "yup";
import { Button } from "@radix-ui/themes";
import { signIn } from "next-auth/react";
import { useCallbackRef } from "@radix-ui/react-use-callback-ref";
import toast from "react-hot-toast";
import useAxios from "@/hooks/axios";
import { useSearchParams } from "next/navigation";
import { Link, useRouter } from "@/navigation";
import { Link as ThemeLink } from "@radix-ui/themes";

const validationSchema = object().shape({
  email: string().email("Invalid email").required("Email is required"),
  password: YUP_PASSWORD,
});

export default function SignInPage() {
  const axios = useAxios();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSubmit = useCallbackRef(async ({ email, password }: any) => {
    const handler = async () => {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) throw res.error;

      if (res?.ok) router.push((searchParams.get("next") as any) ?? "/");
    };

    await toast.promise(handler(), {
      loading: "Signing in...",
      success: () => {
        router.push((searchParams.get("next") as any) ?? "/");
        return "Signed in successfully";
      },
      error: (err) => {
        switch (err) {
          case ErrorCode.EmailNotVerified:
            return "Your email is not verified. Please check your inbox for the verification email.";

          case ErrorCode.InvalidCredentials:
            return "Invalid email or password";
          default:
            return "Something went wrong";
        }
      },
    });
  });

  return (
    <div className={styles.sign}>
      <h1>Sign In</h1>
      <p>If you are a registered user, please enter your email and password.</p>

      <Form
        className={styles.form}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        initialValues={{
          email: "",
          password: "",
        }}
      >
        {({ isSubmitting }) => (
          <>
            <InputField name="email" label="Email" size="3" />
            <InputField
              name="password"
              label="Password"
              type="password"
              size="3"
            />
            <Button
              className={styles.submitButton}
              type="submit"
              size="3"
              disabled={isSubmitting}
            >
              Sign In
            </Button>

            <ThemeLink asChild underline="always">
              <Link href="/sign-up">Don&apos;t have an account? Sign up</Link>
            </ThemeLink>
          </>
        )}
      </Form>
    </div>
  );
}
