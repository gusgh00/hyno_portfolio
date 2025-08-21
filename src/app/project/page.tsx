import styles from "./page.module.css";
import Project from '@components/pages/project/Project';

export default function Home() {
  return (
    <div className={styles.main}>
      <Project/>
    </div>
  );
}
