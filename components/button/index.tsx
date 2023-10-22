import React, { forwardRef } from "react";
import clsx from "clsx";
import styles from "./button.module.scss";
import sizeStyles from "@/styles/sizes.module.scss";
import { PiSpinnerLight } from "react-icons/pi";
import { Slot } from "@radix-ui/react-slot";
import { IconType } from "react-icons";
import Link from "next/link";

type Props<T extends React.ElementType> = Omit<
  React.ComponentPropsWithoutRef<T>,
  "type"
>;

export type ButtonProps = {
  type?:
    | "primary"
    | "secondary"
    | "danger"
    | "transparent"
    | "transparentWhite";
  size?: "tiny" | "small" | "medium" | "large" | "huge";
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
  fullRounded?: boolean;
  icon?: IconType;
  endIcon?: IconType;
  asChild?: boolean;
  spanClass?: any;
} & (
  | ({ link: true | "normal"; href: string } & Props<"a">)
  | ({ link?: false; htmlType?: HTMLButtonElement["type"] } & Props<"button">)
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    type = "primary",
    size = "medium",
    className,
    link,
    block,
    disabled,
    loading,
    asChild,
    children,
    fullRounded,
    // @ts-ignore
    htmlType = "button",
    icon: Icon,
    endIcon: EndIcon,
    spanClass,
    ...props
  },
  ref
) {
  const Component: any =
    link === "normal" ? "a" : link ? Link : asChild ? Slot : "button";

  disabled = disabled || loading;

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
    <Component
      type={htmlType}
      ref={ref}
      className={clsx(
        styles.btn,
        styles[type],
        sizeStyles.sizes,
        sizeStyles[size],
        className,
        disabled && styles.disabled,
        block && styles.block,
        fullRounded && styles.fullRounded
      )}
      disabled={disabled}
      {...props}
    >
      {asChild ? (
        React.isValidElement(children) ? (
          React.cloneElement(
            children,
            undefined,
            loading ? (
              <PiSpinnerLight className={styles.loading} size={iconSize} />
            ) : (
              Icon && <Icon className={styles.icon} size={iconSize} />
            ),
            children.props.children && (
              <span className={styles.content}>{children.props.children}</span>
            ),
            EndIcon && !loading && (
              <EndIcon className={styles.endIcon} size={iconSize} />
            )
          )
        ) : null
      ) : (
        <>
          {loading ? (
            <PiSpinnerLight className={styles.loading} size={iconSize} />
          ) : (
            Icon && <Icon className={styles.icon} size={iconSize} />
          )}
          {children && <span className={spanClass}>{children}</span>}
          {EndIcon && !loading && (
            <EndIcon className={styles.endIcon} size={iconSize} />
          )}
        </>
      )}
    </Component>
  );
});

export default Button;
