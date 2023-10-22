import { redirect } from "@/navigation";
import { RedirectType } from "next/navigation";

export default function AdminPage() {
  redirect("/account/details", RedirectType.replace);
}
