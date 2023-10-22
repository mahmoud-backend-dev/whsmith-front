"use client";

import Form from "@/components/form";
import { InputField } from "@/components/form/input";
import { YUP_PASSWORD } from "@/utils/constants";
import { object, ref, string } from "yup";
import { Button, Flex } from "@radix-ui/themes";
import { APIUser } from "@/types/user";

const validationSchema = object().shape({
  password: YUP_PASSWORD,
  new_password: YUP_PASSWORD,
  confirm_password: string()
    .oneOf([ref("newPassword")], "Passwords must match")
    .required("Confirm password is required"),
});

export function AccountSecurityForm({ token }: { token: string }) {
  return (
    <Flex
      direction="column"
      mt="4"
      justify="center"
      width="100%"
      gap="4"
      style={{
        maxWidth: "500px",
      }}
      asChild
    >
      <Form
        initialValues={{
          password: "",
          new_password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => alert(values)}
      >
        {({ isSubmitting }) => (
          <>
            <InputField
              name="password"
              label="Current Password"
              type="password"
              size="3"
            />
            <InputField
              name="new_password"
              label="New Password"
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
              type="submit"
              size="3"
              style={{
                width: "100%",
              }}
              disabled={isSubmitting}
            >
              Save
            </Button>
          </>
        )}
      </Form>
    </Flex>
  );
}
