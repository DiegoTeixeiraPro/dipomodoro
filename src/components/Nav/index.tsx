import React from "react";
import styles from "./Nav.module.scss";


interface NavProps {
    onSelectSection: (section: string) => void;
    currentSection: string;
}

const Nav: React.FC<NavProps> = ({onSelectSection, currentSection}) => {
    return (
        <nav className={styles.nav}>
            <div className={styles.p}>
                <p
                    onClick={() => onSelectSection("entenda")}
                    className={currentSection === "entenda" ? styles.active : ""}
                >
                    Entenda a ferramenta
                </p>
                <p
                    onClick={() => onSelectSection("estude")}
                    className={currentSection === "estude" ? styles.active : ""}
                >
                    Comece a estudar
                </p>
            </div>
        </nav>
    );
};

export default Nav;