import logo from '../img/logo.svg'; 
import styles from './LayoutLeft.module.css';

export const LayoutLeft = () => {
    return (
      <div className={styles['layout-left']}>
        <img className={styles.logo} src={logo} alt="" />
      </div>
    );
  };