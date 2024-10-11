import styles from './Button.module.scss';
import Link from "next/link";

const Button = ({ color, text, link }) => {
    return (
        <Link href={link}>
        <button className={styles.button} style={{ '--color': color }}>
            {text}
        </button>
        </Link>
    );
}

export default Button;
