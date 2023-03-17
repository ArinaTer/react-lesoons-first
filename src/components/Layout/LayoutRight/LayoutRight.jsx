import styles from './LayoutRight.module.css';
import { LayoutRightForm } from '../LayoutRightForm/LayoutRightForm';

export const LayoutRight = () => {
    return (
      <div className={styles['layout-right']}>
        <div className={styles.headline}>
          <span className={styles.subtitle}>Welcome to</span>
          <h2 className={styles.title}>Keturah</h2>
        </div>
         <LayoutRightForm />
      </div>
    );
  };