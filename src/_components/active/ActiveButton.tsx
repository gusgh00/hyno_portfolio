import styles from "./comp.module.css";

const ActiveButton = (props: {
    type: string,
    onClick: () => void,
    disabled: boolean,
    className: string,
    children?: React.ReactNode
}) => {
    return (
        <>
            <button type="button" className={`${styles.active_button} ${props.className} ${props.type === "round" ? styles.round : styles.default}`} disabled={props.disabled}
                onClick={() => props.disabled}
            >
                {props.children}
            </button>
        </>
    );
}

export default ActiveButton