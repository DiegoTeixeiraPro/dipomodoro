import React from "react";
import styles from "./Ferramenta.module.scss";
import tomatoImage from "../../assets/img/tomato.svg";


const Ferramenta = () => {
    return (
        <section className={styles.section}>
            <div>
                <h3>Olá estudante!</h3>
                <p>
                    Essa é uma ferramenta inspirada no “Método Pomodoro” para auxiliar nos estudos ou até mesmo em
                    tarefas
                    diárias. No intuito de de aumentar o foco e a produtividade.
                </p>
                <h3>Mas o que é o Método Pomodoro?</h3>
                <p>
                    O método Pomodoro é uma técnica de gerenciamento de tempo criada por Francesco Cirillo no final dos
                    anos
                    1980. Ele é projetado para melhorar a produtividade e manter o foco durante tarefas específicas,
                    ideal
                    para estudos e trabalho. O nome "Pomodoro" vem do cronômetro de cozinha em formato de tomate
                    (pomodoro,
                    em italiano) que Cirillo usou durante a universidade.
                </p>
                <h3>Como funciona?</h3>
                <ul>
                    <li> Escolha uma tarefa que deseja realizar;</li>
                    <li>Defina um timer para 25 minutos (um "Pomodoro");</li>
                    <li>Trabalhe na tarefa até que o timer toque;</li>
                    <li>Faça uma pequena pausa de 5 minutos;</li>
                    <li>Repita o processo. Após quatro "Pomodoros", faça uma pausa mais longa de 15-30 minutos.</li>
                </ul>
                <p>
                    <br/>
                    Essa técnica ajuda a reduzir a procrastinação, aumentar a concentração e melhorar a gestão do tempo.
                    Cada ciclo de 25 minutos permite que você mantenha um nível alto de produtividade, enquanto as
                    pausas
                    regulares evitam a exaustão mental.
                </p>
                <p>Pronto para transformar sua produtividade?</p>

            </div>

            <div className={styles.imageContainer}>
                <img src={tomatoImage} alt="Tomate"/>
            </div>
        </section>

    );
}

export default Ferramenta;