"use client";
import Form from "@/components/form";
import styles from "./sign.module.scss";
import { InputField } from "@/components/form/input";
import { object, ref, string } from "yup";
import { ErrorCode, YUP_PASSWORD } from "@/utils/constants";
import { Button } from "@radix-ui/themes";
import useAxios from "@/hooks/axios";
import { useCallbackRef } from "@radix-ui/react-use-callback-ref";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { Link as ThemeLink } from "@radix-ui/themes";
import { Link } from "@/navigation";

const validationSchema = object().shape({
  fname: string().required("First name is required"),
  lname: string().required("Last name is required"),
  email: string().email("Invalid email").required("Email is required"),
  password: YUP_PASSWORD,
  confirmPassword: string()
    .oneOf([ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export default function SignUpPage() {
  const axios = useAxios();

  const handleSubmit = useCallbackRef(
    async ({ fname, lname, email, password, confirmPassword }: any) => {
      console.log(fname, lname, email, password, confirmPassword);
      await toast.promise(
        axios.post("/auth/signup", {
          firstName: fname,
          lastName: lname,
          email,
          password,
          confirmPassword,
        }),
        {
          loading: "Creating account...",
          success:
            "Account created successfully, please check your email to verify your account",
          error: (err: AxiosError<any>) => {
            switch (err.response?.data?.message) {
              case ErrorCode.EmailAlreadyExists:
                return "Email already exists";
              case ErrorCode.EmailNotVerified:
                return "Email already exists but not verified";
              default:
                return "Something went wrong, please try again later";
            }
          },
        }
      );
    }
  );
  return (
    <div className={styles.sign}>
      <h1>Sign Up</h1>
      <p>Create an account to get started.</p>

      <Form
        className={styles.form}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        initialValues={{
          fname: "",
          lname: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
      >
        {({ isSubmitting }) => (
          <>
            <InputField name="fname" label="First Name" size="3" />
            <InputField name="lname" label="Last Name" size="3" />
            <InputField name="email" label="Email" size="3" />
            <InputField
              name="password"
              label="Password"
              type="password"
              size="3"
            />
            <InputField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              size="3"
            />
            <Button
              className={styles.submitButton}
              type="submit"
              size="3"
              disabled={isSubmitting}
            >
              Sign Up
            </Button>

            <ThemeLink asChild underline="always">
              <Link href="/sign-in">Already have an account? Sign in</Link>
            </ThemeLink>
          </>
        )}
      </Form>
    </div>
  );
}
