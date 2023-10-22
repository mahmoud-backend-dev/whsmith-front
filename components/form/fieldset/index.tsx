import { FormikValues } from "formik";
import Form, { FromChildrenType, FromProps } from "..";
import styles from "./fieldset.module.scss";
import isFunction from "lodash/isFunction";

export interface FieldsetProps<T extends FormikValues> extends FromProps<T> {
  legend?: string;
  footer?: FromChildrenType<T>;
}

export function Fieldset<T extends FormikValues>({
  children,
  legend,
  footer,
  ...props
}: FieldsetProps<T>) {
  return (
    <section className={styles.container}>
      <Form {...props}>
        {(props) => (
          <div className={styles.fieldset}>
            <div className={styles.content}>
              <h4 className={styles.legend}>{legend}</h4>
              {isFunction(children) ? children(props) : children}
            </div>
            <footer className={styles.footer}>
              {isFunction(footer) ? footer(props) : footer}
            </footer>
          </div>
        )}
      </Form>
    </section>
  );
}
