"use client"
import { navigationList } from "@items/NavigationList";
import LogoDark from "@imgs/logo_dark.png";
import LogoLight from "@imgs/logo_light.png";
import styles from "./comp.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import useSchemeStore from "@store/schemeStore";
import ActiveSelect from "@components/active/ActiveSelect";

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()
  const { isSchemeType, setSchemeType } = useSchemeStore()
  const [isMenuSelect, setMenuSelect] = useState<number>(0)

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

  useEffect(() => {
    const url = navigationList.filter((item, index) => index === isMenuSelect)[0].url
    router.push(url)
  }, [isMenuSelect])

  useEffect(() => {
    const menuIndex = navigationList.findIndex((item, index) => item.url === pathname)
    setMenuSelect(menuIndex)
  }, [pathname])
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_main}>
          <div className={styles.header_title} onClick={() => router.push("/")}>
            {!isSchemeType
              ?
              <Image src={LogoLight} alt="logo_light" className={styles.logo} />
              :
              <Image src={LogoDark} alt="logo_dark" className={styles.logo} />
            }
          </div>
          <div className={styles.navi_section}>
            {navigationList.map((item, index) => (
              <div key={index} className={styles.navi} onClick={() => router.push(item.url)}>
                {item.name}
              </div>
            ))}
            <div className={styles.navi_select}>
              <ActiveSelect
                onSelect={(index: number) => setMenuSelect(index)}
                disabled={false}
                selected_value={isMenuSelect}
                select_list={navigationList.map(item => item.name)}
                placeholder="메뉴 선택"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header