import {Link} from 'react-router-dom';
import styles from './Header.module.css'

import logo from '../../assets/img/zenitsu.png';
import avatar from './zenitsu.png';

function Header() {
return (
    <div className={styles.header}>
        <Link to="/"><img className={styles.logo} src={logo} alt="Logo" /></Link>
        <div id='navegacao'>
                <li className={styles.item}><Link to="/">INICIO</Link></li>
                <li className={styles.item}><Link to="/">LISTA</Link></li>
                <li className={styles.item}><Link to="/">FAVORITOS</Link></li>
                <li className={styles.item}><Link to="/">CALENDARIO</Link></li>
        </div>

        <div className={styles.usuario}>
        <Link to="/perfil"><img className={styles.avatar} src={avatar} alt="Avatar do usuário" /></Link>
        </div>
        </div>
    )

}

export default Header