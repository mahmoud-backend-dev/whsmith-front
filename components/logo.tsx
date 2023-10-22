import clsx from "clsx";
import { LogoSvg } from "./svg/logo";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={className} title="Home">
      <LogoSvg />
    </Link>
  );
}
