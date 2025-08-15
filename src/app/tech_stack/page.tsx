import styles from "./page.module.css";
import TechStack from '@components/pages/tech_stack/TechStack';

export default function Home() {
  return (
    <div className={styles.main}>
      <TechStack/>
    </div>
  );
}
