import Button from "@/components/button";
import styles from "./home.module.scss";
import { Container } from "@/components/container";
import mainImage from "./images/main.webp";
import Image from "next/image";

export function Hero() {
  return (
    <main className={styles.main}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <h1>Organic groceries, delivered fresh to your door.</h1>
          <p>
            We offer a wide selection of groceries at competitive prices, and we
            make it easy to shop with us. You can order online and pick up your
            groceries in store, or you can have them delivered to your door. We
            also offer a variety of convenient services, such as online coupons
            and shopping lists.
          </p>
          <Button type="secondary" size="huge" title="Discover">
            Discover
          </Button>
        </div>
        <Image
          src={mainImage}
          alt="Organic groceries, delivered fresh to your door."
          width={500}
          className={styles.image}
        />
      </Container>
    </main>
  );
}
