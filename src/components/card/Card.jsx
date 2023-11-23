import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src='/p1.jpeg' alt="" fill className={styles.image} />
        </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
              date
          </span>
          <span className={styles.category}>category</span>
        </div>
        <Link href={`/posts/postslug`}>
          <h1 className={styles.title}>post title</h1>
        </Link>
        desccccccccccccccccccccccccccccc
        <div className={styles.desc} />
        <Link href={`/posts/postslug`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
