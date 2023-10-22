"use client";
import { Container } from "@/components/container";
import { SectionInfo } from "@/components/form/fieldset/sections-info";
import { AdminPanelHeader } from "@/components/header/admin-panel-header";
import { homePages } from "@/utils/mocks-data";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("common");

  return (
    <div>
      <AdminPanelHeader title={t("images-section")} />

      <Container>
        <SectionInfo info={homePages.imagesSection} />
      </Container>
    </div>
  );
}
