"use client";

import { Container } from "@/components/container";
import styles from "./home.module.scss";
import Form from "@/components/form";
import { AsDark } from "@/components/as-dark";

export function Offer() {
  return (
    <div className={styles.offer}>
      <div className={styles.container}>
        <h1>Sign Up Today For 10% Off Your First Order</h1>
        <p>
          Sign up to our newsletters for the latest news, inspiration, exclusive
          offers and discount codes
        </p>
        <Form
          initialValues={{
            email: "",
          }}
          onSubmit={(values) => alert(values)}
          className={styles.form}
        >
          <Form.Input name="email" placeholder="Email" size="3" />
          <AsDark
            type="submit"
            size="3"
            color="gray"
            highContrast
            as={Form.Button}
          >
            Submit
          </AsDark>
        </Form>
      </div>
    </div>
  );
}
