"use client"
import { FaCircle, FaMinusCircle, FaPlusCircle, FaRegCopy, FaTimesCircle } from "react-icons/fa";
import styles from "./comp.module.css";
import { useState } from "react";
import { FaArrowRotateLeft, FaCode } from "react-icons/fa6";
import useSwiperStore from "@store/swiperStore";
import useWidthStore from "@store/widthStore";

const CodeBox = (props: {
    code: string
}) => {
    const [isWindowBtn, setWindowBtn] = useState<boolean>(false)
    const [isWindowMin, setWindowMin] = useState<boolean>(false)
    const [isWindowMax, setWindowMax] = useState<boolean>(false)
    const [isWindowClose, setWindowClose] = useState<boolean>(false)

    const { setIsSwiper } = useSwiperStore()
    const { isWidth } = useWidthStore()



    const handleCopyText = async () => {
        await navigator.clipboard.writeText(props.code);
    }

    const handleWindowReset = () => {
        setWindowMax(false)
        setWindowMin(false)
        setWindowClose(false)
    }

    return (
        <>
            <div className={`${styles.code_box} ${isWindowClose ? styles.code_status_3 : (isWindowMax ? styles.code_status_2 : (isWindowMin ? styles.code_status_1 : styles.code_status_0))}`}>
                <div className={styles.top_section}
                    onMouseOver={() => setWindowBtn(true)}
                    onMouseOut={() => setWindowBtn(false)}
                >
                    <div className={styles.start_section}>
                        {isWindowBtn && isWidth > 1600
                            ?
                            <>
                                <FaTimesCircle className={styles.close_icon} onClick={() => setWindowClose(true)} />
                                <FaMinusCircle className={styles.min_icon} onClick={() => setWindowMin(!isWindowMin)} />
                                <FaPlusCircle className={styles.max_icon} onClick={() => setWindowMax(!isWindowMax)} />
                            </>
                            :
                            <>
                                <FaCircle className={styles.close_icon} />
                                <FaCircle className={styles.min_icon} />
                                <FaCircle className={styles.max_icon} />
                            </>
                        }
                    </div>
                    <FaCode className={styles.code_title} />
                    <div className={styles.end_section}>
                        {
                            isWidth > 1600
                            ?
                            <FaArrowRotateLeft className={styles.reset_icon} onClick={() => handleWindowReset()} />
                            :
                            null
                        }
                        <FaRegCopy className={styles.copy_icon} onClick={() => handleCopyText()} />
                    </div>
                </div>
                <div className={styles.code_section}
                    onMouseOver={() => setIsSwiper(false)}
                    onMouseOut={() => setIsSwiper(true)}
                >
                    {props.code.split('\n').map((item, index) => (
                        <p className={styles.code} key={index}>
                            <span className={styles.code_index}>{index + 1}</span>{item}
                        </p>
                    ))}
                </div>
            </div>
        </>
    );
}

export default CodeBox