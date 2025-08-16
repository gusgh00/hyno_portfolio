"use client"
import CodeBox from "@components/code_box/CodeBox";
import styles from "./comp.module.css";
import ActiveButton from "@components/active/ActiveButton";
import { IoIosAlert, IoIosApps, IoIosArrowBack, IoIosArrowForward, IoIosBookmark, IoIosBug, IoIosChatboxes, IoIosCheckmarkCircle, IoIosCloud, IoIosMoon, IoIosSunny } from "react-icons/io";
import ActiveTab from "@components/active/ActiveTab";
import { useState } from "react";
import useSchemeStore from "@store/schemeStore";

const TechStack02 = () => {
    const code = [
`:root[color-theme='light'] {
    --primary: #8250df;
    --default: #231f28;
    --secondary: #62596e;
    --success: #1a7f37;
    --info: #bf3989;
    --accent: #0969da;
    --warning: #bc4c00;
    --error: #d1242f;

    ...

    --contribution-violet-bgColor-0: #eff2f5;
    --contribution-violet-bgColor-1: #c9acee;
    --contribution-violet-bgColor-2: #804ac2;
    --contribution-violet-bgColor-3: #572da4;
    --contribution-violet-bgColor-4: #2b1163;
    --contribution-violet-borderColor-0: #241f280d;
}

:root[color-theme='dark'] {
    --primary: #ab7df8;
    --default: #f6f0fc;
    --secondary: #9891a1;
    --success: #3fb950;
    --info: #db61a2;
    --accent: #4493f8;
    --warning: #db6d28;
    --error: #f85149;

    ...

    --contribution-violet-bgColor-0: #151b23;
    --contribution-violet-bgColor-1: #16033a;
    --contribution-violet-bgColor-2: #35196c;
    --contribution-violet-bgColor-3: #522ea0;
    --contribution-violet-bgColor-4: #8c56d3;
    --contribution-violet-borderColor-0: #0401090d;
}

@media (prefers-color-scheme: dark) {
    html {
        color-scheme: dark;
    }
}

body,
body>* {
    transition-property: background, color;
    transition-duration: 0.2s;
}

body {
    background: var(--bgColor-default);
    color: var(--fgColor-default);
    font-family: 'Noto Sans KR', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

...`,
`//scheme state
import { create } from 'zustand';

interface StateType {
    isSchemeType: boolean;
    setSchemeType: (isSchemeType: boolean) => void;
}
const useSchemeStore = create<StateType>((set) => ({
    isSchemeType: false,
    setSchemeType: (isSchemeType: boolean) => set({isSchemeType: isSchemeType}),
}));

export default useSchemeStore;

//handle scheme
const {isSchemeType, setSchemeType} = useSchemeStore()

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
}, [isSchemeType])`
    ]
    const [isDummyDefault, setDummyDefault] = useState<string>("Result")
    const [isDummyDefaultClass, setDummyDefaultClass] = useState<string>("font-disabled")
    const [isDummyDisable, setDummyDisable] = useState<boolean>(false)
    const [isDummyTabIndex, setDummyTabIndex] = useState<number>(0)
    const [isCodeTabIndex, setCodeTabIndex] = useState<number>(0)

    const { isSchemeType, setSchemeType } = useSchemeStore()
    return (
        <>
            <div className={`${styles.tech_stack_main} ${styles.tech_stack_main_02}`}>
                <div className={styles.start_section}>
                    <div className={styles.info_section}>
                        <span className={"font-title"}>CSS 디자인 토큰 & 버튼 & 다크 Theme</span>
                    </div>
                    <div className={styles.result_section}>
                        <span className="font-desc">Default: <span className={isDummyDefaultClass}>{isDummyDefault}</span></span>
                        <div className={styles.step}>
                            <ActiveButton type="round" className="bg-primary" disabled={false} onClick={() => {
                                console.log("Primary")
                                setDummyDefault("Primary")
                                setDummyDefaultClass("font-primary")
                            }}>Primary</ActiveButton>
                            <ActiveButton type="round" className="bg-secondary" disabled={false} onClick={() => {
                                console.log("Secondary")
                                setDummyDefault("Secondary")
                                setDummyDefaultClass("font-secondary")
                            }}>Secondary</ActiveButton>
                            <ActiveButton type="round" className="bg-success" disabled={false} onClick={() => {
                                console.log("Success")
                                setDummyDefault("Success")
                                setDummyDefaultClass("font-success")
                            }}>Success</ActiveButton>
                            <ActiveButton type="round" className="bg-info" disabled={false} onClick={() => {
                                console.log("Info")
                                setDummyDefault("Info")
                                setDummyDefaultClass("font-info")
                            }}>Info</ActiveButton>
                            <ActiveButton type="round" className="bg-accent" disabled={false} onClick={() => {
                                console.log("Accent")
                                setDummyDefault("Accent")
                                setDummyDefaultClass("font-accent")
                            }}>Accent</ActiveButton>
                            <ActiveButton type="round" className="bg-warning" disabled={false} onClick={() => {
                                console.log("Warning")
                                setDummyDefault("Warning")
                                setDummyDefaultClass("font-warning")
                            }}>Warning</ActiveButton>
                            <ActiveButton type="round" className="bg-error" disabled={false} onClick={() => {
                                console.log("Error")
                                setDummyDefault("Error")
                                setDummyDefaultClass("font-error")
                            }}>Error</ActiveButton>
                        </div>
                        <span className="font-desc">Icon: <span className={isDummyDefaultClass}>{isDummyDefault}</span></span>
                        <div className={styles.step}>
                            <ActiveButton type="circle" className="bg-primary" disabled={false} onClick={() => {
                                console.log("Primary")
                                setDummyDefault("Primary")
                                setDummyDefaultClass("font-primary")
                            }}>
                                <IoIosCloud />
                            </ActiveButton>
                            <ActiveButton type="circle" className="bg-secondary" disabled={false} onClick={() => {
                                console.log("Secondary")
                                setDummyDefault("Secondary")
                                setDummyDefaultClass("font-secondary")
                            }}>
                                <IoIosApps />
                            </ActiveButton>
                            <ActiveButton type="circle" className="bg-success" disabled={false} onClick={() => {
                                console.log("Success")
                                setDummyDefault("Success")
                                setDummyDefaultClass("font-success")
                            }}>
                                <IoIosCheckmarkCircle />
                            </ActiveButton>
                            <ActiveButton type="circle" className="bg-info" disabled={false} onClick={() => {
                                console.log("Info")
                                setDummyDefault("Info")
                                setDummyDefaultClass("font-info")
                            }}>
                                <IoIosChatboxes />
                            </ActiveButton>
                            <ActiveButton type="circle" className="bg-accent" disabled={false} onClick={() => {
                                console.log("Accent")
                                setDummyDefault("Accent")
                                setDummyDefaultClass("font-accent")
                            }}>
                                <IoIosBookmark />
                            </ActiveButton>
                            <ActiveButton type="circle" className="bg-warning" disabled={false} onClick={() => {
                                console.log("Warning")
                                setDummyDefault("Warning")
                                setDummyDefaultClass("font-warning")
                            }}>
                                <IoIosBug />
                            </ActiveButton>
                            <ActiveButton type="circle" className="bg-error" disabled={false} onClick={() => {
                                console.log("Error")
                                setDummyDefault("Error")
                                setDummyDefaultClass("font-error")
                            }}>
                                <IoIosAlert />
                            </ActiveButton>
                        </div>
                        <span className="font-desc">Disabled</span>
                        <div className={styles.step}>
                            <ActiveButton type="round" className="bg-success" disabled={!isDummyDisable} onClick={() => setDummyDisable(!isDummyDisable)}>
                                <IoIosArrowBack /> Prev
                            </ActiveButton>
                            <ActiveButton type="round" className="bg-success" disabled={isDummyDisable} onClick={() => setDummyDisable(!isDummyDisable)}>
                                Next <IoIosArrowForward />
                            </ActiveButton>
                        </div>
                        <span className="font-desc">Tab</span>
                        <div className={styles.step}>
                            <ActiveTab tabArr={['Dummy 01', 'Dummy 02', 'Dummy 03']} selectedIndex={isDummyTabIndex} onClick={(tabIndex: number) => setDummyTabIndex(tabIndex)} />
                        </div>
                        <span className="font-desc">Change Scheme (Light or Dark Theme)</span>
                        <div className={styles.step}>
                            <ActiveButton type="default" className="bg-default" disabled={false} onClick={() => setSchemeType(!isSchemeType)}>
                                {isSchemeType ? <IoIosMoon /> : <IoIosSunny />} Click Me
                            </ActiveButton>
                        </div>
                    </div>
                </div>
                <div className={styles.end_section}>
                    <ActiveTab tabArr={['CSS', 'TypeScript']} selectedIndex={isCodeTabIndex} onClick={(tabIndex: number) => setCodeTabIndex(tabIndex)} />
                    <CodeBox code={code[isCodeTabIndex]} />
                </div>
            </div>
        </>
    );
}

export default TechStack02