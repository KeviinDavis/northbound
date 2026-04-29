import styles from "./Section.module.css";

export default function Section({
  children,
  className = "",
  variant = "default",
}) {
  return (
    <section className={`${styles.section} ${styles[variant]} ${className}`}>
      {children}
    </section>
  );
}