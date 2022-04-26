import styles from "./PageAdmin.module.css"
import { useContext } from "react"
import { UserContext } from '../../UserContext'
import { FaHeart, FaClock, FaEye} from 'react-icons/fa';
import { RiEqualizerLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import ListAnimesAdmin from "./ListAnimesAdmin/ListAnimesAdmin";
import AddAnime from "./AddAnime/AddAnime";
import UsuariosAdmin from "./UsuariosAdmin/UsuariosAdmin";
function PageAdmin () { 
    const { user, setUser } = useContext(UserContext);

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
        
    
    return (

        <div className={styles.PerfilContainer}>
            <div className={styles.rightUser}>
                <div onClick={() => toggleTab(1)} className={toggleState === 1 ? `${styles.favoritos} ${styles.ativo} ${styles.tab_color}`: `${styles.favoritos} ${styles.tab_color}`} ><p><FaHeart /> AddAnimes</p></div>
                <div onClick={() => toggleTab(2)} className={toggleState === 2 ? `${styles.assistidos} ${styles.ativo} ${styles.tab_color}`: `${styles.assistidos} ${styles.tab_color}`}><p><FaEye /> Animes</p></div>
                <div onClick={() => toggleTab(3)} className={toggleState === 3 ? `${styles.maistarde} ${styles.ativo} ${styles.tab_color}`: `${styles.maistarde} ${styles.tab_color}`}><p><FaClock /> Noticias</p></div>
                <div onClick={() => toggleTab(4)} className={toggleState === 4 ? `${styles.editarPerfil} ${styles.ativo} ${styles.tab_color}` : `${styles.editarPerfil} ${styles.tab_color}`}><p><RiEqualizerLine /> Usuarios</p></div>
                

            </div>
            <div className={styles.content_tabs}>
                <div className={toggleState === 1 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                    <div className={styles.tab_Favoritos}>
                    <AddAnime/>
                        
                    </div>

                </div>

                <div className={toggleState === 2 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                    <div className={styles.naoTem}>
                    <ListAnimesAdmin/>
                    </div>
                </div>

                <div className={toggleState === 3 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                    <div className={styles.naoTem}>
                        
                    </div>
                </div>
                <div className={toggleState === 4 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                <div className={styles.naoTem}>
                        <UsuariosAdmin/>
                        </div>
                </div>
                </div>
               
            </div>
    )
}

export default PageAdmin