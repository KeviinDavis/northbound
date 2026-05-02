'use client';

import { useState } from 'react';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import WorkGrid from '@/components/WorkGrid';
import WorkList from '@/components/WorkList';
import useReveal from '@/hooks/useReveal';
import styles from './WorkView.module.css';

export default function WorkView({ projects }) {
  const [view, setView] = useState('grid');
  const addRef = useReveal();

  return (
    <Section>
      <Container>
        <div className={styles.toolbar}>
          <h1 className={styles.title}>
            <span className={styles.clip}>
              <span ref={addRef} className={styles.titleInner}>Work</span>
            </span>
          </h1>
          <div className={styles.clip}>
            <div ref={addRef} className={styles.toggle}>
              <button
                className={`${styles.toggleBtn} ${view === 'grid' ? styles.active : ''}`}
                onClick={() => setView('grid')}
                aria-pressed={view === 'grid'}
              >
                Grid
              </button>
              <button
                className={`${styles.toggleBtn} ${view === 'list' ? styles.active : ''}`}
                onClick={() => setView('list')}
                aria-pressed={view === 'list'}
              >
                List
              </button>
            </div>
          </div>
        </div>
        {view === 'grid' ? (
          <WorkGrid projects={projects} />
        ) : (
          <WorkList projects={projects} />
        )}
      </Container>
    </Section>
  );
}
