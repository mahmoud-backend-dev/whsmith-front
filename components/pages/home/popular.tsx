import { BookCard, BookCardProps } from "@/components/cards/book-card";
import { Container } from "../../container";
import styles from "./home.module.scss";
import Button from "@/components/button";
import { useHomePageMock } from "@/hooks/mocks";

const books: BookCardProps[] = Array(4).fill({
  title: "Milk and honey",
  addable: true,
  author: "Rupi Kaur",
  price: 6,
  image:
    "https://cdn.discordapp.com/attachments/1088544131212652605/1156638529674301440/Bp9p5PJ.png",
});

export function Popular() {
  const { productsSection2 } = useHomePageMock();
  return (
    <Container asChild className={styles.section}>
      <section>
        <h2>{productsSection2.title}</h2>
        <p>{productsSection2.description}</p>
        <div className={styles.books}>
          {books.map((book) => (
            <BookCard {...book} key={book.title} />
          ))}
        </div>
      </section>
    </Container>
  );
}
