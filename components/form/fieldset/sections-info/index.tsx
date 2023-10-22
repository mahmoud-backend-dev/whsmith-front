import { useLocale, useTranslations } from "next-intl";
import styles from "./sections-info.module.scss";
import { Fieldset } from "..";
import { InputField } from "../../input";
import TextArea from "../../input/textarea";
import { LanguageSelect } from "../../select/language";
import { LocaleMap } from "@/types";
import isEqual from "lodash/isEqual";
import { Button } from "@radix-ui/themes";
import { useState } from "react";
import { Locale } from "@/navigation";
import toast from "react-hot-toast";

type SectionInfo = LocaleMap<{
  title: string;
  description: string;
}>;

export function SectionInfo({ info }: { info: SectionInfo }) {
  const t = useTranslations("common");
  const locale = useLocale();
  const [currentLocale, setCurrentLocale] = useState(() => locale);

  return (
    <Fieldset<SectionInfo>
      initialValues={info}
      legend={t("section-info")}
      footer={({ values, isSubmitting }) => (
        <div className={styles.footer}>
          <div className={styles.language}>
            <LanguageSelect
              triggerClassName={styles.select}
              onValueChange={(s: any) => setCurrentLocale(s)}
            />
          </div>

          <Button size={"2"} disabled={isSubmitting || isEqual(values, info)}>
            {t("save")}
          </Button>
        </div>
      )}
      onSubmit={async (values) => {
        toast.success("Fake data saved successfully");
      }}
      className={styles.form}
    >
      <div className={styles.inputs}>
        <InputField name={`${currentLocale}.title`} label={t("title")} />
        <TextArea
          name={`${currentLocale}.description`}
          className={styles.textarea}
          label={t("description")}
        />
      </div>
    </Fieldset>
  );
}
