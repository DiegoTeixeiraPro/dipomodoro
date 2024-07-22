import React from "react";
import styles from './Botao.module.scss';


interface BotaoProps {
    titulo: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}


const Botao = ({titulo, type, onClick}: BotaoProps) => {
    return (
        <button
            className={styles.botao}
            type={type || "button"}
            onClick={onClick}
        >
            {titulo}
        </button>
    );
};


export default Botao;