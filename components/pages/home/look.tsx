import { BookCard, BookCardProps } from "@/components/cards/book-card";
import { Container } from "../../container";
import styles from "./home.module.scss";
import Button from "@/components/button";
import CategoryCard from "@/components/cards/category-card";
import { useHomePageMock } from "@/hooks/mocks";

const categories = Array(5).fill({
  name: "Books",
});

export function Look() {
  const { mainCategories } = useHomePageMock();
  return (
    <Container asChild className={styles.section}>
      <section>
        <h2>{mainCategories.title}</h2>
        <p>{mainCategories.description}</p>
        <div className={styles.categories}>
          {categories.map((book) => (
            <CategoryCard name={book.name} key={book.name} />
          ))}
        </div>
      </section>
    </Container>
  );
}
