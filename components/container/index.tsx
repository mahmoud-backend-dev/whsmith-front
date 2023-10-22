import { forwardRef } from "react";
import styles from "./container.module.scss";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export const Container = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
  }
>(function Container({ className, asChild, ...props }, ref) {
  const Component: any = asChild ? Slot : "div";

  return (
    <Component
      ref={ref}
      className={clsx(styles.container, className)}
      {...props}
    />
  );
});
