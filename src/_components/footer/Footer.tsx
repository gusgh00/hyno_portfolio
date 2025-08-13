import styles from "./comp.module.css";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_main}>
          <span className={styles.copyright}>
            &copy; 2025 HYNO All rights reserved.
          </span>
          <div className={styles.contact_section}>
            <Link href={"mailto:hyno0913@naver.com"} target="_blank" className={styles.contact}>
              <MdEmail className={styles.icon}/>
              <span className={styles.text}>hyno0913@naver.com</span>
            </Link>
            <Link href={"https://github.com/gusgh00"} target="_blank" className={styles.contact}>
              <FaGithub className={styles.icon}/>
              <span className={styles.text}>gusgh00.github.io</span>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer