import Media from "@/components/ui/Media";
import styles from "./MediaGrid.module.css";

export default function MediaGrid({ cols, items }) {
  return (
    <ul className={`${styles.grid} ${styles[`cols${cols}`]}`}>
      {items.map((item, i) => (
        <li key={i} className={styles.item}>
          <Media
            type="image"
            src={item.media.src}
            alt={item.media.alt}
            fill
            aspectRatio="4/5"
          />
        </li>
      ))}
    </ul>
  );
}
