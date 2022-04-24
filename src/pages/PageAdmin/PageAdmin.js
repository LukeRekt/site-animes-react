import styles from "./PageAdmin.module.css"
import { useContext } from "react"
import { UserContext } from '../../UserContext'
import { FaHeart, FaClock, FaEye} from 'react-icons/fa';
import { RiEqualizerLine } from "react-icons/ri";
import { useState, useEffect } from "react";
function PageAdmin () { 
    const { user, setUser } = useContext(UserContext);

    const [toggleState, setToggleState] = useState(5);

    const toggleTab = (index) => {
        setPageCarregando(false);
        setToggleState(index);
    };
        
    
    return (

        <div className={styles.PerfilContainer}>
            <div className={styles.rightUser}>
                <div onClick={() => toggleTab(1)} className={toggleState === 1 ? `${styles.favoritos} ${styles.ativo} ${styles.tab_color}`: `${styles.favoritos} ${styles.tab_color}`} ><p><FaHeart /> Usuarios</p></div>
                <div onClick={() => toggleTab(2)} className={toggleState === 2 ? `${styles.assistidos} ${styles.ativo} ${styles.tab_color}`: `${styles.assistidos} ${styles.tab_color}`}><p><FaEye /> Animes</p></div>
                <div onClick={() => toggleTab(3)} className={toggleState === 3 ? `${styles.maistarde} ${styles.ativo} ${styles.tab_color}`: `${styles.maistarde} ${styles.tab_color}`}><p><FaClock /> Noticias</p></div>
                <div onClick={() => toggleTab(5)} className={toggleState === 5 ? `${styles.editarPerfil} ${styles.ativo} ${styles.tab_color}` : `${styles.editarPerfil} ${styles.tab_color}`}><p><RiEqualizerLine /> P</p></div>
                

            </div>
            <div className={styles.content_tabs}>
                <div className={toggleState === 1 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                    <div className={styles.tab_Favoritos}>
                  
                        
                    </div>

                </div>

                <div className={toggleState === 2 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                    <div className={styles.naoTem}>
                        
                    </div>
                </div>

                <div className={toggleState === 3 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                    <div className={styles.naoTem}>
                        
                    </div>
                </div>
                <div className={toggleState === 4 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                    <div className={styles.naoTem}>
                        
                        
                    </div>
                </div>
                <div className={toggleState === 5 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                     
                </div>
            </div>
        </div>
    )
}

export default PageAdmin