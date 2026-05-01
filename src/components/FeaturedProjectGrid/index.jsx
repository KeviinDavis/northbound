import ProjectTile from "@/components/ProjectTile";
import styles from "./FeaturedProjectGrid.module.css";

export default function FeaturedProjectGrid({ cols = 2, projects }) {
  const aspectRatio = cols === 3 ? "4/5" : "1/1";

  return (
    <div className={`${styles.grid} ${styles[`cols${cols}`]}`}>
      {projects.map((project) => (
        <ProjectTile key={project.slug} project={project} aspectRatio={aspectRatio} />
      ))}
    </div>
  );
}
