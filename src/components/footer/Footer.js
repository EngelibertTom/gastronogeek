import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLinks}>
                <a href="#recettes">Recettes</a>
                <a href="#contact">Contact</a>
            </div>

            <div className={styles.footerInfo}>
                <p>Site créé par <br /><strong>Tom Engelibert</strong></p>
            </div>

            <div className={styles.footerContact}>
                <p><strong>Téléphone :</strong> 06 19 33 06 74</p>
                <p><strong>Email : </strong><a href="mailto:tom.engelibert@gmail.com">tom.engelibert@gmail.com</a></p>
            </div>
        </footer>
    );
};

export default Footer;
