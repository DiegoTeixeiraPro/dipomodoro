import React, {useState} from 'react';
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import styles from './App.module.scss';
import Cronometro from "../components/Cronometro"
import {ITarefa} from "../types/tarefa";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Ferramenta from "../components/Ferramenta";


function App() {
    const [tarefas, setTarefas] = useState<ITarefa[]>([]);
    const [selecionado, setSelecionado] = useState<ITarefa>();
    const [section, setSection] = useState<string>("entenda");

    function selecionaTarefa(tarefaSelecionada: ITarefa) {
        setSelecionado(tarefaSelecionada);
        setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
            ...tarefa,
            selecionado: tarefa.id === tarefaSelecionada.id ? true : false
        })))
    }

    function finalizarTarefa() {
        if (selecionado) {
            setSelecionado(undefined);
            setTarefas(tarefasAnteriores =>
                tarefasAnteriores.map(tarefa => {
                    if (tarefa.id === selecionado.id) {
                        return {
                            ...tarefa,
                            selecionado: false,
                            completado: true
                        }
                    }
                    return tarefa;
                }));
        }
    }


    return (
        <div className={styles.app}>
            <Header/>
            <Nav onSelectSection={setSection} currentSection={section}/>

            <main className={styles.main}>
                {section === "entenda" && (
                    <section>
                        <div>
                            <Ferramenta/>
                        </div>
                    </section>
                )}

                {section === "estude" && (
                    <section className={styles.section}>
                        <div className={styles.leftContainer}>
                            <Formulario setTarefas={setTarefas}/>
                            <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa}/>
                        </div>
                        <div className={styles.rightContainer}>
                            <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa}/>
                        </div>
                    </section>
                )}
            </main>

            <Footer/>
        </div>
    );
}

export default App;