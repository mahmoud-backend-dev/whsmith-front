"use client";
import { Container } from "@/components/container";
import { SectionInfo } from "@/components/form/fieldset/sections-info";
import { AdminPanelHeader } from "@/components/header/admin-panel-header";
import { AdminProductCard } from "@/components/cards/admin-product";
import { AddProductSectionDialog } from "@/components/dialog/add-product";
import { ProductsContainer } from "@/components/container/product-container";
import { useTranslations } from "next-intl";
import { useProductsMock } from "@/hooks/mocks";
import { homePages } from "@/utils/mocks-data";

export default function Page() {
  const t = useTranslations("common");
  const products = useProductsMock();
  return (
    <div>
      <AdminPanelHeader title={t("products-section-1")}>
        <AddProductSectionDialog />
      </AdminPanelHeader>

      <Container>
        <SectionInfo info={homePages.productsSection1} />
        <ProductsContainer>
          {products.map((product) => (
            <AdminProductCard
              key={product.id}
              product={product}
              onDelete={() => {}}
            />
          ))}
        </ProductsContainer>
      </Container>
    </div>
  );
}
