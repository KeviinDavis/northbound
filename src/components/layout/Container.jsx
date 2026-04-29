import styles from "./Container.module.css";

export default function Container({ children, variant = "default", className = "" }) {
  return (
    <div className={`${styles.container} ${variant === "narrow" ? styles.narrow : ""} ${className}`}>
      {children}
    </div>
  );
}