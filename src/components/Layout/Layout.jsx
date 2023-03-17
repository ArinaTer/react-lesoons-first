import styles from './Layout.module.css';
import { LayoutLeft } from './LayoutLeft/LayoutLeft';
import { LayoutRight } from './LayoutRight/LayoutRight';


export const Layout = () => {
  return (
    <section className={styles['layout-main']}>
      <LayoutLeft></LayoutLeft>
      <LayoutRight></LayoutRight>
    </section>
  );
};
