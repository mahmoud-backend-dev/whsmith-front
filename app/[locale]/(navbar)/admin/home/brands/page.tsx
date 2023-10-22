"use client";
import { Container } from "@/components/container";
import { SectionInfo } from "@/components/form/fieldset/sections-info";
import { AdminPanelHeader } from "@/components/header/admin-panel-header";
import { AddBrandDialog } from "@/components/dialog/add-brand";
import { useTranslations } from "next-intl";
import { homePages } from "@/utils/mocks-data";

export default function Page() {
  const t = useTranslations("common");
  return (
    <div>
      <AdminPanelHeader title={t("brands-section")}>
        <AddBrandDialog />
      </AdminPanelHeader>

      <Container>
        <SectionInfo info={homePages.brands} />
      </Container>
    </div>
  );
}
