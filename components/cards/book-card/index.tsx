import Button from "@/components/button";
import styles from "./book-card.module.scss";
import { AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";

export type BookCardProps = {
  title: string;
  author: string;
  price: number;
  image: string;
  addable: boolean;
};

export function BookCard({
  title,
  author,
  price,
  image,
  addable,
}: BookCardProps) {
  return (
    <div className={styles.body}>
      <svg width="300" height="284" viewBox="0 0 300 284" fill="none">
        <path
          d="M0 89.3656C0 80.3046 6.09168 72.3755 14.8467 70.0409L274.847 0.707535C287.544 -2.67831 300 6.89161 300 20.0322V264C300 275.046 291.046 284 280 284H20C8.9543 284 0 275.046 0 264V89.3656Z"
          fill="#F4F4F4"
        />
      </svg>

      <div className={styles.image}>
        <Image src={image} alt={title} width={250} height={250} />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.author}>By {author}</p>
        <p className={styles.price}>£{price}</p>
      </div>

      {addable && (
        <Button
          size="huge"
          icon={AiOutlinePlus}
          fullRounded
          title="Add to basket"
          className={styles.add}
        />
      )}
    </div>
  );
}
