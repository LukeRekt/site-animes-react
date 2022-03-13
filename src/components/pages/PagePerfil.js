import styles from './PagePerfil.module.css'
import {useContext} from "react"
import { UserContext } from '../../UserContext'

function PagePefil(){
    const {user} = useContext(UserContext)
    const {avatar} = useContext(UserContext)
    return ( 
        <div className={styles.PerfilContainer}>
            <div className={styles.leftUser}>
                <div className={styles.userAvatar}>
                <img src={avatar} alt="" />
                <p>{user}</p>
                <div className={styles.userSeguidores}>
                    <p>0 Seguindo</p>
                    <p>0 Seguidores</p>
                </div>
                </div>
                <div className={styles.assistidos}>
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
                
            </div>
        </div>
    )
}

export default PagePefil