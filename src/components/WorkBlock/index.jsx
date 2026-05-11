'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './WorkBlock.module.css';

export default function WorkBlock({ project, index }) {
  const videoRef = useRef(null);
  const isActive = project.active !== false;

  function handleMouseEnter() {
    if (!project.video || !videoRef.current) return;
    if (!videoRef.current.src) {
      videoRef.current.src = project.video;
    }
    videoRef.current.play().catch(() => {});
  }

  function handleMouseLeave() {
    if (!project.video || !videoRef.current) return;
    videoRef.current.pause();
  }

  const Wrapper = isActive ? Link : 'div';
  const wrapperProps = isActive
    ? {
        href: `/work/${project.slug}`,
        className: styles.block,
        id: project.slug,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      }
    : {
        className: `${styles.block} ${styles.inactive}`,
        id: project.slug,
      };

  return (
    <Wrapper {...wrapperProps}>
      <div className={styles.visualWrap}>
        <div className={styles.imageWrap}>
          {project.image ? (
            <Image
              src={project.image.src}
              alt={project.image.alt || project.name}
              fill
              sizes="(max-width: 480px) 92vw, 48vw"
            />
          ) : (
            <div className={styles.placeholder} />
          )}
        </div>
        {project.video && (
          <div className={styles.videoWrap}>
            <video
              ref={videoRef}
              loop
              muted
              playsInline
              preload="none"
            />
          </div>
        )}
      </div>
      <div className={styles.infoWrap}>
        <div className={styles.tagList}>
          {project.tags?.map((tag, i) => (
            <div key={tag} className={styles.tagItem}>
              <span className={styles.tag}>{tag}</span>
              {i < project.tags.length - 1 && (
                <span className={styles.tagDash}>-</span>
              )}
            </div>
          ))}
        </div>
        <div className={styles.nameWrap}>
          <h2 className={styles.name}>{project.name}</h2>
        </div>
      </div>
      <div className={styles.borderDecor}>
        <div className={styles.borderLine} />
      </div>
    </Wrapper>
  );
}
