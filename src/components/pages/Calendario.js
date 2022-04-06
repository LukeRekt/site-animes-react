import { useState } from "react";
import styles from "./Calendario.module.css"
function Calendario() {
    const [toggleState, setToggleState] = useState(5);

    const toggleTab = (index) => {

        setToggleState(index);
    };

    return (//Deve ser possível adicionar no calendário por contas autorizadas  
        <div className={styles.container}>
            <div className={styles.BtnSemana}>
                <div onClick={() => toggleTab(1)} className={toggleState === 1 ? `${styles.favoritos}  ${styles.tab_color} ${styles.tab_color_active}` : `${styles.favoritos}  ${styles.tab_color} `} ><p>Domingo</p></div>
                <div onClick={() => toggleTab(2)} className={toggleState === 2 ? `${styles.assistidos}  ${styles.tab_color} ${styles.tab_color_active}` : `${styles.favoritos}  ${styles.tab_color} `}><p>Segunda</p></div>
                <div onClick={() => toggleTab(3)} className={toggleState === 3 ? `${styles.maistarde}  ${styles.tab_color} ${styles.tab_color_active}` : `${styles.favoritos}  ${styles.tab_color} `}><p>Terça</p></div>
                <div onClick={() => toggleTab(4)} className={toggleState === 4 ? `${styles.editarPerfil}  ${styles.tab_color} ${styles.tab_color_active}` : `${styles.favoritos}  ${styles.tab_color} `}><p>Quarta</p></div>
                <div onClick={() => toggleTab(5)} className={toggleState === 5 ? `${styles.algumacoisa}  ${styles.tab_color} ${styles.tab_color_active}` : `${styles.favoritos}  ${styles.tab_color} `}><p>Quinta</p></div>
                <div onClick={() => toggleTab(6)} className={toggleState === 6 ? `${styles.algumacoisa}  ${styles.tab_color} ${styles.tab_color_active}` : `${styles.favoritos}  ${styles.tab_color} `}><p>Sexta</p></div>
                <div onClick={() => toggleTab(7)} className={toggleState === 7 ? `${styles.algumacoisa} ${styles.ultimo} ${styles.tab_color} ${styles.tab_color_active}` : `${styles.favoritos}  ${styles.tab_color} `}><p>Sábado</p></div>
            </div>
            <div className={styles.content_tabs}>
                <div className={toggleState === 1 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                    <div className={styles.naoTem}>
                        <p> Nenhum episódio hoje</p>
                    </div>

                </div>

                <div className={toggleState === 2 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                    <div className={styles.naoTem}>
                    <p> Nenhum episódio hoje</p>
                    </div>
                </div>

                <div className={toggleState === 3 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                    <div className={styles.naoTem}>
                    <p> Nenhum episódio hoje</p>
                    </div>
                </div>
                <div className={toggleState === 4 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                    <div className={styles.naoTem}>
                    <p> Nenhum episódio hoje</p>
                    </div>
                </div>
                <div className={toggleState === 5 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                <p> Nenhum episódio hoje</p>
                </div>
                <div className={toggleState === 6 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                    <div className={styles.naoTem}>
                    <p> Nenhum episódio hoje</p>
                    </div>
                </div>
                <div className={toggleState === 7 ? `${styles.content}  ${styles.active_content}` : `${styles.content} `}>
                    <div className={styles.naoTem}>
                    <p> Nenhum episódio hoje</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}//Esta página tem prioridade no desenvolvilmeto
export default Calendario