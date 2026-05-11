import Link from "next/link";
import Image from "next/image";
import styles from "./ProjectTile.module.css";

export default function ProjectTile({ project, aspectRatio = "1/1" }) {
  const imageClasses = `${styles.imageInner}${aspectRatio === "4/5" ? ` ${styles.portrait}` : ""}`;

  return (
    <article className={styles.root}>
      <div className={styles.imageBlock}>
        <div className={imageClasses}>
          {project.image ? (
            <Image
              src={project.image.src}
              alt={project.image.alt || project.name}
              fill
              sizes="(max-width: 480px) 92vw, 48vw"
            />
          ) : null}
        </div>
        <h3 className={styles.name}>{project.name}</h3>
        <span className={`text-tagline ${styles.year}`}>{project.year}</span>
      </div>
      <div className={styles.meta}>
        <p className={`text-tagline ${styles.category}`}>{project.category}</p>
        <p className={styles.caption}>{project.caption}</p>
        <Link href={project.cta.href} className={styles.cta}>
          {project.cta.label.replace(" →", "")} <span className={styles.arrow}>&rarr;</span>
        </Link>
      </div>
    </article>
  );
}
