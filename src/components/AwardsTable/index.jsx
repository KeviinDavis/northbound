import styles from "./AwardsTable.module.css";

export default function AwardsTable({ content }) {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <p className={`text-tagline ${styles.eyebrow}`}>
          &mdash; {content.eyebrow}
        </p>
        <h2 className={styles.headline}>
          <span className={styles.headlineDesktop}>
            {content.headline.desktop}
          </span>
          <span className={styles.headlineMobile}>
            {content.headline.mobile}
          </span>
        </h2>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th className="sr-only">Year</th>
            <th className="sr-only">Award</th>
          </tr>
        </thead>
        <tbody>
          {content.entries.map((entry, i) => (
            <tr key={i} className={styles.row}>
              <td className={`text-tagline ${styles.year}`}>{entry.year}</td>
              <td className={styles.award}>{entry.award}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
