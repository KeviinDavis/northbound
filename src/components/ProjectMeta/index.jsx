import styles from "./ProjectMeta.module.css";

const rows = [
  { label: "Client", key: "client" },
  { label: "Year", key: "year" },
  { label: "Key Focus", key: "scope" },
];

export default function ProjectMeta({ meta }) {
  return (
    <dl className={styles.root}>
      {rows.map(({ label, key }) => {
        const val = meta[key];
        const isMulti = Array.isArray(val);

        return (
          <div key={key} className={styles.row}>
            <dt className={styles.label}>{label}:</dt>
            <dd className={styles.value}>
              {isMulti ? val.join(", ") : val}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
