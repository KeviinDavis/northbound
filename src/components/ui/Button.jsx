import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "primary",
  as = "button",
  ...props
}) {
  const Component = as;

  return (
    <Component
      className={`${styles.button} ${styles[variant]}`}
      {...props}
    >
      {children}
    </Component>
  );
}