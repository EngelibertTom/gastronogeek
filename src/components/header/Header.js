import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <Link href="/">
                            <img src="./assets/images/logo.png" alt="logo" />
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.link} href="/recettes">
                            <span>Recettes</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.link} href="/contact">
                            <span>Contact</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
