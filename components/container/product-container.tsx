import { forwardRef } from "react";
import styles from "./container.module.scss";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export const ProductsContainer = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
    size?: "small" | "normal";
  }
>(function Container(
  {
    className,
    asChild,
    size = "normal",

    ...props
  },
  ref
) {
  const Component: any = asChild ? Slot : "div";

  return (
    <Component
      ref={ref}
      className={clsx(styles.products, className, styles[size])}
      {...props}
    />
  );
});
