"use client";

import clsx from "clsx";
import styles from "./input.module.scss";
import sizeStyles from "@/styles/sizes.module.scss";
import { FieldConfig, useField } from "formik";
import { IconType } from "react-icons";
import { useId, useMemo, useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

export type SelectProps = FieldConfig<any> &
  Omit<React.ComponentPropsWithoutRef<"select">, "size"> & {
    label?: string;
    size?: "tiny" | "small" | "medium" | "large" | "huge";
    endIconClick?: () => any;
    endIcon?: IconType;
  };

function Select({
  label,
  size = "medium",
  endIcon: EndIcon,
  className,
  title,
  endIconClick,
  type,
  ...props
}: SelectProps) {
  const [field, meta] = useField(props);
  const generatedId = useId();
  const id = useMemo(() => props.id || generatedId, [generatedId, props.id]);
  let iconSize = 20;

  switch (size) {
    case "tiny":
      iconSize = 15;
      break;
    case "small":
      iconSize = 18;
      break;
    case "medium":
      iconSize = 20;
      break;
    case "large":
      iconSize = 22;
      break;
    case "huge":
      iconSize = 24;
      break;
  }
  return (
    <div className={clsx(styles.select, className)}>
      {label && <label htmlFor={id}>{label}</label>}

      <div className={clsx(styles.container)}>
        <select
          id={id}
          title={title || label || props.name}
          className={clsx(
            sizeStyles.sizes,
            sizeStyles[size],
            props.disabled && styles.disabled
          )}
          {...field}
          {...props}
        />
        {EndIcon && (
          <EndIcon
            className={clsx(styles.endIcon, styles.clickable)}
            size={iconSize}
          />
        )}
      </div>
      {meta.touched && meta.error && (
        <span className={styles.error}>{meta.error}</span>
      )}
    </div>
  );
}

export default Select;
