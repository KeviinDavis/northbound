'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './WorkList.module.css';

function useDragScroll() {
  const ref = useRef(null);
  const state = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  const onMouseDown = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    state.current = { isDown: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft };
    el.style.cursor = 'grabbing';
  }, []);

  const onMouseLeave = useCallback(() => {
    state.current.isDown = false;
    if (ref.current) ref.current.style.cursor = 'grab';
  }, []);

  const onMouseUp = useCallback(() => {
    state.current.isDown = false;
    if (ref.current) ref.current.style.cursor = 'grab';
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!state.current.isDown) return;
    e.preventDefault();
    const el = ref.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - state.current.startX) * 1.5;
    el.scrollLeft = state.current.scrollLeft - walk;
  }, []);

  return { ref, onMouseDown, onMouseLeave, onMouseUp, onMouseMove };
}

function WorkListItem({ project, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);
  const drag = useDragScroll();

  useEffect(() => {
    if (!contentRef.current) return;
    const measure = () => {
      if (contentRef.current) {
        setHeight(contentRef.current.offsetHeight);
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(contentRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div className={styles.item}>
      <button
        className={styles.row}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={styles.name}>{project.name}</span>
        <span className={styles.tags}>
          {project.tags?.map((tag, i) => (
            <span key={tag}>
              {tag}
              {i < project.tags.length - 1 && (
                <span className={styles.dash}> - </span>
              )}
            </span>
          ))}
        </span>
        <span className={styles.toggle}>
          {isOpen ? 'Less' : 'More'} {isOpen ? '\u2014' : '+'}
        </span>
      </button>
      <div
        className={styles.gallery}
        aria-hidden={!isOpen}
        style={{ height: isOpen ? height : 0 }}
      >
        <div ref={contentRef} className={styles.galleryInner}>
          {project.gallery?.length > 0 ? (
            <div
              ref={drag.ref}
              className={styles.slider}
              onMouseDown={drag.onMouseDown}
              onMouseLeave={drag.onMouseLeave}
              onMouseUp={drag.onMouseUp}
              onMouseMove={drag.onMouseMove}
            >
              {project.gallery.map((item, i) => (
                <div key={i} className={styles.slide}>
                  <Image
                    src={item.src}
                    alt={item.alt || `${project.name} project image ${i + 1}`}
                    fill
                    sizes="(max-width: 480px) 80vw, 22.5vw"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div
              ref={drag.ref}
              className={styles.emptyGallery}
              onMouseDown={drag.onMouseDown}
              onMouseLeave={drag.onMouseLeave}
              onMouseUp={drag.onMouseUp}
              onMouseMove={drag.onMouseMove}
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className={styles.emptySlide} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function WorkList({ projects }) {
  const [activeSlug, setActiveSlug] = useState(null);

  function toggle(slug) {
    setActiveSlug((prev) => (prev === slug ? null : slug));
  }

  return (
    <div className={styles.list}>
      {projects.map((project) => (
        <WorkListItem
          key={project.slug}
          project={project}
          isOpen={activeSlug === project.slug}
          onToggle={() => toggle(project.slug)}
        />
      ))}
    </div>
  );
}
