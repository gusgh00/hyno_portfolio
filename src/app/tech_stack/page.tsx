import { getMetadata } from "@utils/Metadata";
import styles from "./page.module.css";
import TechStack from '@components/pages/tech_stack/TechStack';
import { Metadata } from "next";

export const metadata: Metadata = getMetadata("TECH STACK")

export default function Home() {
  return (
    <div className={styles.main}>
      <TechStack/>
    </div>
  );
}
