import styles from './LayoutRightForm.module.css';

export const LayoutRightForm = () => {
  return (
    <form className={styles.form} action="">
      <input className={styles.input} type="text" placeholder="Email adress" />
      <input className={styles.input} type="text" placeholder="Password" />
      <button className={styles.btn} type="submit">Log me in</button>
    </form>
  );
};
