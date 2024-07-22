import React from "react";
import styles from './Lista.module.scss';
import Item from "./Item";
import {ITarefa} from "../../types/tarefa";


interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}


function Lista({tarefas, selecionaTarefa}: Props) {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Meu plano de estudos</h2>

            <div className={styles.listaTarefas}>

                <ul>
                    {tarefas.map((item) => (
                        <Item
                            selecionaTarefa={selecionaTarefa}
                            key={item.id}
                            {...item}
                        />
                    ))}
                </ul>

            </div>
        </section>
    )
}

export default Lista;