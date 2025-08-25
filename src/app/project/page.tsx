import { getMetadata } from "@utils/Metadata";
import styles from "./page.module.css";
import Project from '@components/pages/project/Project';
import { Metadata } from "next";

export const metadata: Metadata = getMetadata("PROJECT")

export default function Home() {
  return (
    <div className={styles.main}>
      <Project/>
    </div>
  );
}
