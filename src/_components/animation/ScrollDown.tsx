import styles from "./comp.module.css";

const ScrollDown = () => {
    return (
        <>
            <div className={styles.scroll_down}>
                <div className={styles.mouse}>
                    <div className={styles.scroller}></div>
                </div>
            </div>
        </>
    );
}

export default ScrollDown