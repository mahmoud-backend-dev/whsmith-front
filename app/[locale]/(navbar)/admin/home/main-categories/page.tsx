"use client";
import { Fieldset } from "@/components/form/fieldset";
import { SectionInfo } from "@/components/form/fieldset/sections-info";
import ReactSelect from "react-select";
import styles from "./page.module.scss";
import { AdminPanelHeader } from "@/components/header/admin-panel-header";
import { Container } from "@/components/container";
import { Button } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import toast from "react-hot-toast";
import { useCategoriesMock } from "@/hooks/mocks";
import { homePages } from "@/utils/mocks-data";

const fakeData = {
  en: {
    title: "What Are You Looking For?",
    description: "",
  },
  ar: {
    title: "ما الذي تبحث عنه؟",
    description: "",
  },
};

export default function MainCategoriesPage() {
  const t = useTranslations("common");
  const categories = useCategoriesMock();
  const footer = (
    <div className={styles.footer}>
      <Button>{t("save")}</Button>
    </div>
  );
  return (
    <div>
      <AdminPanelHeader title={t("main-categories-section")} />
      <Container>
        <SectionInfo info={homePages.mainCategories} />
        <Fieldset
          initialValues={{}}
          legend={t("categories")}
          footer={footer}
          onSubmit={async () => {
            toast.success("Fake data saved successfully");
          }}
        >
          <ReactSelect
            name="categories"
            placeholder=""
            options={categories.map((category) => ({
              label: category.name,
              value: category.id,
            }))}
            isMulti
          />
        </Fieldset>
      </Container>
    </div>
  );
}
