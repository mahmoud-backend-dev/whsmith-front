import { Box } from "@radix-ui/themes";
import styles from "./hidden-scroll.module.css";
import * as React from "react";
import clsx from "clsx";

export const HiddenScroll = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Box>) => (
  <Box className={clsx(styles.hiddenScroll, className)} {...props} />
);
