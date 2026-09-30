import React from 'react';
import styles from './CSSModules.module.css';

const CSSModules = () => {
  const isSelected = true;
  const isUrgent = false;

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>CSS Modules Guide</h2>
        <p className={styles.description}>
          These classes are locally scoped to this specific component automatically.
        </p>
        <button className={`${styles.btn} ${styles.btnPrimary}`}>
          Action Button
        </button>
        <div className={`${styles.statusBadge} ${isSelected ? styles.isActive : ''}`}>
          {isSelected ? 'Status: Active Selection' : 'Status: Idle'}
        </div>
        <div className={`${styles.alertBox} ${isUrgent ? styles['theme-danger'] : styles['theme-info']}`}>
          Notification panel.
        </div>
      </div>
    </>
  );
};

export default CSSModules;
