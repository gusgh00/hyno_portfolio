"use client"
import CodeBox from "@components/code_box/CodeBox";
import styles from "./comp.module.css";
import ActiveTab from "@components/active/ActiveTab";
import { useState } from "react";

const TechStackDummy = () => {
    const code = [
``,
``
    ]
    const [isCodeTabIndex, setCodeTabIndex] = useState<number>(0)
    return (
        <>
            <div className={`${styles.tech_stack_main} ${styles.tech_stack_main_02}`}>
                <div className={styles.start_section}>
                    <div className={styles.info_section}>
                        <span className={"font-title"}>DUMMY</span>
                    </div>
                    <div className={styles.result_section}>
                        <span className="font-desc">DUMMY</span>
                        <div className={styles.step}>
                        </div>
                    </div>
                </div>
                <div className={styles.end_section}>
                    <ActiveTab tabArr={['CSS', 'TypeScript', 'DOM']} selectedIndex={isCodeTabIndex} onClick={(tabIndex: number) => setCodeTabIndex(tabIndex)} />
                    <CodeBox code={code[isCodeTabIndex]} />
                </div>
            </div>
        </>
    );
}

export default TechStackDummy