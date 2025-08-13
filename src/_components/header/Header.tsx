"use client"
import { navigationList } from "@items/NavigationList";
import LogoDark from "@imgs/logo_dark.png";
import LogoLight from "@imgs/logo_light.png";
import styles from "./comp.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isSchemeType, setSchemeType] = useState<boolean>(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setSchemeType(true)
    } else {
      setSchemeType(false)
    }
  }, [])

  useEffect(() => {
    if (isSchemeType) {
      document.documentElement.setAttribute('color-theme', 'dark');
    } else {
      document.documentElement.setAttribute('color-theme', 'light');
    }
  }, [isSchemeType])
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_main}>
          <div className={styles.header_title}>
            {!isSchemeType
            ?
            <Image src={LogoLight} alt="logo_light" className={styles.logo}/>
            :
            <Image src={LogoDark} alt="logo_dark" className={styles.logo}/>
            }
          </div>
          <div className={styles.navi_section}>
            {navigationList.map((item, index) => (
              <Link href={item.href} key={index} className={styles.navi}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header