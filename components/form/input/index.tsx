"use client";

import clsx from "clsx";
import styles from "./input.module.scss";
import { FieldConfig, useField } from "formik";
import {
  ForwardRefExoticComponent,
  useId,
  useMemo,
  useState,
  ComponentPropsWithRef,
} from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { IconButton, TextField } from "@radix-ui/themes";

type Props = (typeof TextField.Root extends ForwardRefExoticComponent<infer T>
  ? T
  : never) &
  Omit<ComponentPropsWithRef<"input">, "size"> & {
    label?: string;
    before?: JSX.Element;
    after?: JSX.Element;
    iconSize?: "1" | "2" | "3" | "4";
    disabled?: boolean;
  };

export type InputProps = FieldConfig<any> & Props;

export function InputField(props: InputProps) {
  const [field, meta] = useField(props.name);

  return (
    <Input
      error={meta.touched && meta.error ? meta.error : undefined}
      {...props}
      {...field}
    />
  );
}

export function Input({
  label,

  before: Before,
  after: After,
  type,
  name,
  error,

  iconSize,
  variant,
  color,
  radius,
  size,
  ref,
  className,

  disabled,

  ...props
}: Props & { error?: string }) {
  const generatedId = useId();
  const id = useMemo(() => props.id || generatedId, [generatedId, props.id]);

  const isPassword = type === "password";
  const [passwordVisible, setPasswordVisible] = useState(!isPassword);
  After =
    After ||
    (isPassword ? (
      passwordVisible ? (
        <IconButton
          size={iconSize}
          onClick={() => setPasswordVisible(false)}
          variant="ghost"
          color={color}
          type="button"
        >
          <BsEyeSlashFill size={18} />
        </IconButton>
      ) : (
        <IconButton
          size={iconSize}
          onClick={() => setPasswordVisible(true)}
          variant="ghost"
          type="button"
          color={color}
        >
          <BsEyeFill size={18} />
        </IconButton>
      )
    ) : undefined);

  return (
    <div className={clsx(styles.input)}>
      {label && <label htmlFor={id}>{label}</label>}

      <TextField.Root
        variant={variant}
        color={color}
        size={size}
        radius={radius}
        ref={ref}
        className={className}
      >
        {Before && <TextField.Slot>{Before}</TextField.Slot>}
        <TextField.Input
          id={id}
          type={isPassword ? (!passwordVisible ? "password" : "text") : type}
          disabled={disabled}
          name={name}
          {...props}
        />

        {After && <TextField.Slot>{After}</TextField.Slot>}
      </TextField.Root>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
