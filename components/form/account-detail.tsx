"use client";

import Form from "@/components/form";
import { InputField } from "@/components/form/input";
import { YUP_PASSWORD } from "@/utils/constants";
import { object, string } from "yup";
import { Button, Flex } from "@radix-ui/themes";
import { APIUser } from "@/types/user";

const validationSchema = object().shape({
  fname: string().required("First name is required"),
  lname: string().required("Last name is required"),
  email: string().email("Invalid email").required("Email is required"),
  password: YUP_PASSWORD,
});

export function AccountDetailsForm({
  user,
  user: { firstName, lastName, email },
}: {
  user: APIUser;
  token: string;
}) {
  console.log(user);
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
          fname: firstName,
          lname: lastName,
          email: email,
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => alert(values)}
      >
        {({ isSubmitting }) => (
          <>
            <InputField name="fname" label="First Name" size="3" />
            <InputField name="lname" label="Last Name" size="3" />
            <InputField name="email" label="Email" type="email" size="3" />
            <InputField
              name="password"
              label="Current Password"
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
