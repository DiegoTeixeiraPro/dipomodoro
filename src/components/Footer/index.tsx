import React from "react";
import styles from "./Footer.module.scss";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                Desenvolvido by <a href="https://www.linkedin.com/in/diego-teixeira-dev/">Diego
                Teixeira</a> *
                Design by <a href="https://www.linkedin.com/in/aline-carvalho-dev/">Aline
                Carvalho</a>
            </p>
        </footer>
    );
}


export default Footer;