"use client";

import { Container } from "@/components/container";
import { SectionInfo } from "@/components/form/fieldset/sections-info";
import { AdminPanelHeader } from "@/components/header/admin-panel-header";
import { ProductsSectionTable } from "@/components/table/products-section-table";
import { Button, IconButton } from "@radix-ui/themes";
import { RxPlus } from "react-icons/rx";

export default function Page() {
  return (
    <div>
      <AdminPanelHeader title="Products Section (1)">
        <Button variant="surface" radius="full" size="3">
          Add Product <RxPlus size="18" />
        </Button>
      </AdminPanelHeader>

      <Container>
        {/* <SectionInfo /> */}
        <ProductsSectionTable />
      </Container>
    </div>
  );
}
