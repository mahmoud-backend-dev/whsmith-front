"use client";

import {
  useFormik,
  FormikConfig,
  FormikValues,
  FormikTouched,
  FormikErrors,
  FormikProvider,
} from "formik";
import { InputField } from "./input";
import { Button } from "@radix-ui/themes";

export type FromChildrenType<T extends FormikValues> =
  | {
      (props: {
        errors: FormikErrors<T>;
        touched: FormikTouched<T>;
        isSubmitting: boolean;
        isValidating: boolean;
        submitCount: number;
        submitForm: () => Promise<any>;
        initialValues: T;
        values: T;
        handleReset: (e?: React.SyntheticEvent<any>) => void;
        resetForm: (nextState?: any) => void;
        setFieldValue: (
          field: string,
          value: any,
          shouldValidate?: boolean
        ) => void;
      }): JSX.Element;
    }
  | React.ReactNode;

export interface FromProps<T extends FormikValues>
  extends Omit<FormikConfig<T>, "validateOnMount" | "validateOnChange"> {
  children: FromChildrenType<T>;
  handleIsSubmitting?: any;
  handleIsValidating?: any;
  name?: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default interface Form {
  Input: typeof InputField;
  Button: typeof Button;
}

export default function Form<T extends FormikValues>({
  validate,
  ...props
}: FromProps<T>) {
  const formik = useFormik<T>({
    validateOnBlur: true,
    ...props,
    validationSchema: props.validationSchema,
    initialValues: props.initialValues,
    onSubmit: props.onSubmit,
    validate: validate,
  });

  return (
    <FormikProvider value={formik}>
      <form
        id={props.id}
        name={props.name}
        onSubmit={formik.handleSubmit}
        className={props.className}
        style={props.style}
      >
        {typeof props.children == "function"
          ? props.children({
              errors: formik.errors,
              touched: formik.touched,
              isSubmitting: formik.isSubmitting,
              isValidating: formik.isValidating,
              submitCount: formik.submitCount,
              initialValues: formik.initialValues,
              values: formik.values,
              submitForm: formik.submitForm,
              handleReset: formik.handleReset,
              resetForm: formik.resetForm,
              setFieldValue: formik.setFieldValue,
            })
          : props.children}
      </form>
    </FormikProvider>
  );
}

Form.Input = InputField;
Form.Button = Button;
