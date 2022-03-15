import styles from './PagePerfil.module.css'
import {useContext} from "react"
import { UserContext } from '../../UserContext'
import { FaHeart, FaClock, FaEye} from 'react-icons/fa';
import { RiEqualizerLine } from "react-icons/ri";
import { GrConfigure } from "react-icons/gr";

function PagePefil(){
    const {user} = useContext(UserContext)
    const {avatar} = useContext(UserContext)
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
                <div className={`${styles.favoritos} ${styles.teste}`} ><p><FaHeart/> Favoritos</p></div>
                <div className={`${styles.assistidos} ${styles.teste}`}><p><FaEye/> Assistidos</p></div>
                <div className={`${styles.maistarde} ${styles.teste}`}><p><FaClock/> Ver mais Tarde</p></div>
                <div className={`${styles.algumacoisa} ${styles.teste}`}><p> Alguma Coisa</p></div>
                <div className={`${styles.editarPerfil} ${styles.teste}`}><p><RiEqualizerLine/> Editar Perfil</p></div>
            </div>
        </div>
    )
}

export default PagePefil