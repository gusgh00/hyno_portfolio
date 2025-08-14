import styles from "./page.module.css";
import TechStack01 from "@components/pages/tech_stack/TechStack01";

export default function Home() {
  return (
    <div className={styles.main}>
      <TechStack01/>
    </div>
  );
}
