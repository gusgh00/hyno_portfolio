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
            <button type="button" className={`${styles.active_button} ${props.className} ${props.type === "circle" ? styles.circle : styles.round} ${props.className === "bg-default" ? styles.default : ""}`} disabled={props.disabled}
                onClick={() => props.onClick()}
            >
                {props.children}
            </button>
        </>
    );
}

export default ActiveButton