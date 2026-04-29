import styles from "./Header.module.css";

export default function Header({ variant = "default" }) {
  return (
    <header className={`${styles.header} ${styles[variant]}`}>
      Nav
    </header>
  );
}