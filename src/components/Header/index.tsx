import React from "react";
import styles from "./Header.module.scss";
import dipomodoro from "../../assets/img/dipomodoro.svg";


const Header = () => {
    return (
        <header className={styles.header}>
            <img src={dipomodoro} alt="Diagrama Pomodoro" className={styles.logo}/>
        </header>
    );
}


export default Header;