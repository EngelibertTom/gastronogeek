'use client'
import Link from "next/link";
import styles from "./Header.module.scss";
import TransitionLink from "@/utils/TransitionLink";
import {useState} from "react";

const Header = () => {

    const [bgHeader, setBgHeader] = useState('transparent');

    document.addEventListener("scroll", (e) => {
        if(window.scrollY === 0) {
            setBgHeader('transparent')
        } else {
            setBgHeader('white')
        }
    })

    return (
        <header className={styles.header} style={{ '--bgColor': bgHeader }}>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <TransitionLink url="/">
                            <img src="/assets/images/logo.png" alt="logo" />
                        </TransitionLink>
                    </li>
                    <li>
                        <TransitionLink className={styles.link} url="/recettes">
                            <span>Recettes</span>
                        </TransitionLink>
                    </li>
                    <li>
                        <TransitionLink className={styles.link} url="/contact">
                            <span>Contact</span>
                        </TransitionLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
