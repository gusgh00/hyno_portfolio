import styles from "./page.module.css";
import Career from '@components/pages/career/Career';

export default function Home() {
  return (
    <div className={styles.main}>
      <Career/>
    </div>
  );
}
