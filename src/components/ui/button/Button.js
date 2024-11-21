import styles from './Button.module.scss';
import Link from "next/link";
import TransitionLink from "@/utils/TransitionLink";

const Button = ({ color, text, link }) => {
    return (
        <TransitionLink url={link}>
        <button className={styles.button} style={{ '--color': color }}>
            {text}
        </button>
        </TransitionLink>
    );
}

export default Button;
