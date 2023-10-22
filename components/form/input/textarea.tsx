"use client";

import clsx from "clsx";
import styles from "./input.module.scss";
import { FieldConfig, useField } from "formik";
import { ForwardRefExoticComponent, useId, useMemo, useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { IconButton, TextArea as OriginalTextArea } from "@radix-ui/themes";

type Props = typeof OriginalTextArea extends ForwardRefExoticComponent<infer T>
  ? T
  : never;

export type InputProps = FieldConfig<any> &
  Props & {
    label?: string;
  };

function TextArea({ label, ...props }: InputProps) {
  const [field, meta] = useField(props);
  const generatedId = useId();
  const id = useMemo(() => props.id || generatedId, [generatedId, props.id]);

  return (
    <div className={clsx(styles.input)}>
      {label && <label htmlFor={id}>{label}</label>}

      <OriginalTextArea {...field} {...props} />

      {meta.touched && meta.error && (
        <span className={styles.error}>{meta.error}</span>
      )}
    </div>
  );
}

export default TextArea;
