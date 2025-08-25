import { getMetadata } from "@utils/Metadata";
import styles from "./page.module.css";
import Career from '@components/pages/career/Career';
import { Metadata } from "next";

export const metadata: Metadata = getMetadata("CAREER")

export default function Home() {
  return (
    <div className={styles.main}>
      <Career/>
    </div>
  );
}
