import { Link, } from 'react-router-dom';
import styles from './Header.module.css'
import { useContext, useState } from "react"

import logo from '../../../assets/img/logo.png';
// import avatar from '../../assets/img/fotosperfil/avatar.png';
import { UserContext } from '../../../UserContext';


import { FaHouseUser, FaBell, FaNewspaper, FaStar, FaCalendarAlt, FaSearch, FaAlignJustify} from 'react-icons/fa';

//funcoes
import ProfileBox from '../ProfileBox/ProfileBox';
import { useVisibility } from '../../../context/Visibility';


function Header() {
    const [menu, setMenu] = useState(false);
    const { setVisibility } = useVisibility();
    function toggleProfile() {
        if (menu === true) {
            setMenu(false);
        } else {
            setMenu(true);
        }
    }
    //adicionar o setAvatar
    const { user } = useContext(UserContext);;
    const { avatar } = useContext(UserContext);
    return (
        <div className={styles.header}>
            <div className={styles.navegacaoMobile}><FaAlignJustify/></div>
            <Link to="/"><img className={styles.logo} src={logo} alt="Logo" /></Link>
            <div id={styles.navegacao}>
                <li className={styles.item}> <Link to="/"><FaHouseUser />HOME</Link></li>
                <li className={styles.item}><Link to="/lista"><FaNewspaper /> LISTA</Link></li>
                <li className={styles.item}><Link to="/favoritos"><FaStar /> FAVORITOS</Link></li>
                <li className={styles.item}><Link to="/calendario"><FaCalendarAlt /> CALENDÁRIO</Link></li>
            </div>
            <FaSearch id={styles.lupa} onClick={() => setVisibility(true)} />
            <div className={styles.usuario}>

                <div className={styles.perfil}>
                    {user ? (<img onClick={toggleProfile} className={styles.avatar} src={`${process.env.REACT_APP_API_URL}/${avatar}`} alt="Perfil" />) : (<img onClick={toggleProfile} className={styles.avatar} src={`${process.env.REACT_APP_API_URL}/static/imagens/avatars/default.png`} alt="" />)}
                    <div className={styles.perfilBox}>

                        {user ? (menu ? (<ProfileBox logado={false} visibility="visible" opacity={1} />) : (<ProfileBox logado={false} visibility="hidden" opacity={0} />)) : (menu ? (<ProfileBox logado={true} visibility="visible" opacity={1} />) : (<ProfileBox logado={true} visibility="visible" opacity={0} />))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header