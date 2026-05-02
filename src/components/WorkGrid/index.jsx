import WorkBlock from '@/components/WorkBlock';
import styles from './WorkGrid.module.css';

export default function WorkGrid({ projects }) {
  return (
    <div className={styles.grid}>
      <div className={styles.borderVertical} />
      {projects.map((project, index) => (
        <WorkBlock key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}
