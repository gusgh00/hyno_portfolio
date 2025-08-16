import CodeBox from "@components/code_box/CodeBox";
import styles from "./comp.module.css";
import ActiveButton from "@components/active/ActiveButton";
import { FaReact } from "react-icons/fa";
import { IoIosAlert, IoIosApps, IoIosArrowBack, IoIosArrowForward, IoIosBookmark, IoIosBug, IoIosChatboxes, IoIosCheckmarkCircle, IoIosCloud, IoIosCloudDone } from "react-icons/io";

const TechStack02 = () => {
    const code = `
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    `
    return (
        <>
            <div className={`${styles.tech_stack_main} ${styles.tech_stack_main_02}`}>
                <div className={styles.start_section}>
                    <div className={styles.info_section}>
                        <span className={"font-title"}>CSS 디자인 토큰 & 다크 Theme</span>
                    </div>
                    <div className={styles.result_section}>
                        <div className={styles.step}>
                            <ActiveButton type="default" className="bg-primary" disabled={false} onClick={() => console.log("Hello World")}>Primary</ActiveButton>
                            <ActiveButton type="default" className="bg-secondary" disabled={false} onClick={() => console.log("Hello World")}>Secondary</ActiveButton>
                            <ActiveButton type="default" className="bg-success" disabled={false} onClick={() => console.log("Hello World")}>Success</ActiveButton>
                            <ActiveButton type="default" className="bg-info" disabled={false} onClick={() => console.log("Hello World")}>Info</ActiveButton>
                            <ActiveButton type="default" className="bg-accent" disabled={false} onClick={() => console.log("Hello World")}>Accent</ActiveButton>
                            <ActiveButton type="default" className="bg-warning" disabled={false} onClick={() => console.log("Hello World")}>Warning</ActiveButton>
                            <ActiveButton type="default" className="bg-error" disabled={false} onClick={() => console.log("Hello World")}>Error</ActiveButton>
                        </div>
                        <div className={styles.step}>
                            <ActiveButton type="round" className="bg-primary" disabled={false} onClick={() => console.log("Hello World")}>
                                <IoIosCloud />
                            </ActiveButton>
                            <ActiveButton type="round" className="bg-secondary" disabled={false} onClick={() => console.log("Hello World")}>
                                <IoIosApps />
                            </ActiveButton>
                            <ActiveButton type="round" className="bg-success" disabled={false} onClick={() => console.log("Hello World")}>
                                <IoIosCheckmarkCircle />
                            </ActiveButton>
                            <ActiveButton type="round" className="bg-info" disabled={false} onClick={() => console.log("Hello World")}>
                                <IoIosChatboxes />
                            </ActiveButton>
                            <ActiveButton type="round" className="bg-accent" disabled={false} onClick={() => console.log("Hello World")}>
                                <IoIosBookmark />
                            </ActiveButton>
                            <ActiveButton type="round" className="bg-warning" disabled={false} onClick={() => console.log("Hello World")}>
                                <IoIosBug />
                            </ActiveButton>
                            <ActiveButton type="round" className="bg-error" disabled={false} onClick={() => console.log("Hello World")}>
                                <IoIosAlert />
                            </ActiveButton>
                        </div>
                        <div className={styles.step}>
                            <ActiveButton type="default" className="bg-success" disabled={true} onClick={() => console.log("Hello World")}>
                                <IoIosArrowBack /> Prev
                            </ActiveButton>
                            <ActiveButton type="default" className="bg-success" disabled={false} onClick={() => console.log("Hello World")}>
                                Next <IoIosArrowForward />
                            </ActiveButton>
                        </div>
                    </div>
                </div>
                <div className={styles.end_section}>
                    <CodeBox code={code} />
                </div>
            </div>
        </>
    );
}

export default TechStack02