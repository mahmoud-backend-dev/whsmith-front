import { Hero } from "./main";
import { GreatValueBooks } from "./great-value-books";
import styles from "./home.module.scss";
import { Popular } from "./popular";
import { Offer } from "./offer";
import { Look } from "./look";

export function HomePage() {
  return (
    <div className={styles.home}>
      <Hero />
      <GreatValueBooks />
      <Popular />
      <Look />
      <Offer />
    </div>
  );
}
