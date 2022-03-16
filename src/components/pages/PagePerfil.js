import styles from './PagePerfil.module.css'
import { useContext } from "react"
import { UserContext } from '../../UserContext'
import { FaHeart, FaClock, FaEye } from 'react-icons/fa';
import { RiEqualizerLine } from "react-icons/ri";
import { useState } from "react";

function PagePefil() {
    const { user } = useContext(UserContext)
    const { avatar } = useContext(UserContext)
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className={styles.PerfilContainer}>
            <div className={styles.leftUser}>

                <div className={styles.userAvatar}>
                    <div className={styles.metadeAvatar}>
                        <img src="https://aniyuki.com/wp-content/uploads/2022/01/aniyuki-zenitsu-agatsuma-31.gif" alt="" />
                    </div>
                    <img src={avatar} alt="" />
                    <p>{user}</p>
                    <p>@{user}</p>
                    <div className={styles.userSeguidores}>
                        <p>0 Seguindo</p>
                        <p>0 Seguidores</p>
                    </div>
                </div>
                <div className={styles.horasAssistidos}>
                    <p>HORAS ASSISTIDAS</p>
                    <p>HORAS ASSISTIDAS</p>
                    <p>HORAS ASSISTIDAS</p>
                    <p>HORAS ASSISTIDAS</p>
                    <p>HORAS ASSISTIDAS</p>
                    <p>HORAS ASSISTIDAS</p>
                    <p>HORAS ASSISTIDAS</p>
                    <p>HORAS ASSISTIDAS</p>
                    <p>HORAS ASSISTIDAS</p>
                </div>
            </div>
            <div className={styles.rightUser}>
                <div onClick={() => toggleTab(1)} className={`${styles.favoritos} ${styles.teste}`} ><p><FaHeart /> Favoritos</p></div>
                <div onClick={() => toggleTab(2)} className={`${styles.assistidos} ${styles.teste}`}><p><FaEye /> Assistidos</p></div>
                <div onClick={() => toggleTab(3)} className={`${styles.maistarde} ${styles.teste}`}><p><FaClock /> Ver mais Tarde</p></div>
                <div onClick={() => toggleTab(4)} className={`${styles.algumacoisa} ${styles.teste}`}><p> Alguma Coisa</p></div>
                <div onClick={() => toggleTab(5)} className={`${styles.editarPerfil} ${styles.teste}`}><p><RiEqualizerLine /> Editar Perfil</p></div>
            </div>
            <div className={styles.content_tabs}>
                <div className={toggleState === 1 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                    <h2>Conteudo 1</h2>
                    <p>cccccccc</p>
                    <p>cccccccc</p>
                    <p>cccccccc</p>
                    <p>cccccccc</p>
                    <p>cccccccc</p>
                    <p>cccccccc</p>
                    <p>cccccccc</p>
                    <p>cccccccc</p>
                    <p>cccccccc</p>
                    <p>cccccccc</p>
                    <p>cccccccc</p>
                </div>

                <div className={toggleState === 2 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                    <h2>Conteudo 2</h2>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                </div>

                <div className={toggleState === 3 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                    <h2>Conteudo 3</h2>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                </div>
                <div className={toggleState === 4 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                    <h2>Conteudo 4</h2>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                </div>
                <div className={toggleState === 5 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                    <h2>Conteudo 5</h2>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                    <p>bbbbbb</p>
                </div>
            </div>
        </div>
    )
}

export default PagePefil