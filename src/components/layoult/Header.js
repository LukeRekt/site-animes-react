import {Link} from 'react-router-dom';
import styles from './Header.module.css'

import logo from '../../assets/img/logo.png';
import avatar from '../../assets/img/fotosperfil/avatar.png';

import { FaHouseUser, FaBell, FaNewspaper, FaStar, FaCalendarAlt } from 'react-icons/fa';


function Header() {
return (
    <div className={styles.header}>
        <Link to="/"><img className={styles.logo} src={logo} alt="Logo" /></Link>
        <div id='navegacao'>
                <li className={styles.item}> <Link to="/"><FaHouseUser/> INICIO</Link></li>
                <li className={styles.item}><Link to="/lista"><FaNewspaper/> LISTA</Link></li>
                <li className={styles.item}><Link to="/favoritos"><FaStar/> FAVORITOS</Link></li>
                <li className={styles.item}><Link to="/calendario"><FaCalendarAlt/>CALENDARIO</Link></li>
        </div>

        <div className={styles.usuario}>

            <div className={styles.perfil}>
            <Link to="/perfil"><img className={styles.avatar} src={avatar} alt="Avatar do usuário" /></Link>
            <FaBell/>
            <div className={styles.notificacoes_contador}>
                <p> 11</p>
            </div>
            </div>
       
        </div>
        </div>
    )

}

export default Header