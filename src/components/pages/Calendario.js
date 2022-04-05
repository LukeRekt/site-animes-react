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
                <div onClick={() => toggleTab(1)} className={`${styles.favoritos} ${styles.tab_color}`} ><p> Favoritos</p></div>
                <div onClick={() => toggleTab(2)} className={`${styles.assistidos} ${styles.tab_color}`}><p> Assistidos</p></div>
                <div onClick={() => toggleTab(3)} className={`${styles.maistarde} ${styles.tab_color}`}><p>Ver mais Tarde</p></div>
                <div onClick={() => toggleTab(5)} className={`${styles.editarPerfil} ${styles.tab_color}`}><p> Editar Perfil</p></div>
                <div className={`${styles.algumacoisa} ${styles.tab_color}`}><p>Logout</p></div>

            </div>
            <div className={styles.content_tabs}>
                <div className={toggleState === 1 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                    <div className={styles.naoTem}>
                        <p> Você não tem nenhum favorito</p>
                    </div>

                </div>

                <div className={toggleState === 2 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                    <div className={styles.naoTem}>
                        <p> Você não assistiu nada</p>
                    </div>
                </div>

                <div className={toggleState === 3 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                    <div className={styles.naoTem}>
                        <p> Lista vazia</p>
                    </div>
                </div>
                <div className={toggleState === 4 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                    <div className={styles.naoTem}>
                        <p>Você não tem nenhum favorito</p>
                    </div>
                </div>
                <div className={toggleState === 5 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                    
                </div>
            </div>
        </div>
    )
}//Esta página tem prioridade no desenvolvilmeto
export default Calendario