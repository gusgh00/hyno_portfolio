"use client"
import { useEffect, useState } from "react";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import styles from "./comp.module.css";
import { FiMenu, FiX } from "react-icons/fi";
import { PiCirclesFourFill } from "react-icons/pi";

const Header = () => {
    const [isSchemeType, setSchemeType] = useState<boolean>(false)
    const [isMenuOn, setMenuOn] = useState<boolean>(false)

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
            <div className={styles.header}>
                <div className={"inner_main " + styles.header_inner}>
                    <div className={styles.hamburger_btn} onClick={() => setMenuOn(!isMenuOn)}>
                        {isMenuOn
                            ?
                            <FiX className={styles.icon}/>
                            :
                            // <FiMenu className={styles.icon}/>
                            <PiCirclesFourFill className={styles.icon}/>
                        }
                    </div>
                    <span className={styles.title}>HYNO PORTFOLIO</span>
                    <div className={styles.color_scheme_btn} onClick={() => setSchemeType(!isSchemeType)}>
                        {isSchemeType
                            ?
                            <IoIosMoon className={styles.icon}/>
                            :
                            <IoIosSunny className={styles.icon}/>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header