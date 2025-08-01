"use client"
import styles from "./comp.module.css";

const ActiveBtn = (props: {
    btn_name: string,
    onClick: () => void
}) => {
    return (
        <>
            <div className={styles.active_btn} onClick={() => props.onClick()}>
                <span className={styles.btn_name}>{props.btn_name}</span>
            </div>
        </>
    );
}

export default ActiveBtn