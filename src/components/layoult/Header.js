import { Link, useNavigate, } from 'react-router-dom';
import styles from './Header.module.css'
import { useContext, useState } from "react"
import BarraBuscaOverlay from './BarraBuscaOverlay';

import logo from '../../assets/img/logo.png';
// import avatar from '../../assets/img/fotosperfil/avatar.png';
import { toast } from 'react-toastify';
import { UserContext } from '../../UserContext';


import { FaHouseUser, FaBell, FaNewspaper, FaStar, FaCalendarAlt, FaSearch } from 'react-icons/fa';

//funcoes
import { logout } from '../../api/user'
import ProfileBox from './ProfileBox';
import { useVisibility } from '../../context/Visibility';


function Header() {
    const [menu, setMenu] = useState(false);
    const {visibility, setVisibility} = useVisibility();
    function toggleProfile(){
        if(menu === true){
            setMenu(false);
            console.log("if")
            
            
        }else{
            setMenu(true);
            console.log("else")
            
        }
    
    }
    //adicionar o setAvatar
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);;
    const { avatar } = useContext(UserContext);
    const handleLogout = (e) => {
        e.preventDefault();

        logout()
            .then((res) => {
                toast.success(res.message);
                setUser(null);
                navigate('/login');
            })
            .catch((err) => console.error(err));
    }
    return (
        <div className={styles.header}>
            <Link to="/"><img className={styles.logo} src={logo} alt="Logo" /></Link>
            <div id='navegacao'>
                <li className={styles.item}> <Link to="/"><FaHouseUser /> INICIO</Link></li>
                <li className={styles.item}><Link to="/lista"><FaNewspaper /> LISTA</Link></li>
                <li className={styles.item}><Link to="/favoritos"><FaStar /> FAVORITOS</Link></li>
                <li className={styles.item}><Link to="/calendario"><FaCalendarAlt />CALENDARIO</Link></li>
            </div>
<FaSearch style={{cursor:"pointer"}} size="30px" onClick={() => setVisibility(true)}/>
            {/* <button onClick={handleLogout}>Deslogar</button>  */}
            <div className={styles.usuario}>

                <div className={styles.perfil}>
                {/* <Link to="/perfil"></Link> */}
                    {/* <Link to="/perfil"> */}
                    {/* {user ? (<img className={styles.avatar} src={avatar} alt="Avatar do usuário" />) : (<img className={styles.avatar} src="http://localhost:3232/static/imagens/avatars/default.png" alt="" />)} */}
                    {user ? (<img onClick={toggleProfile} className={styles.avatar} src={avatar} alt="Avatar do usuário" />) : (<img onClick={toggleProfile} className={styles.avatar} src="http://localhost:3232/static/imagens/avatars/default.png" alt="" />)}
                   
                    {/* </Link> */}
                    <FaBell />
                    
                    <div className={styles.notificacoes_contador}>
                        <p> 11</p>
                    </div>
                    <div className={styles.perfilBox}>

                        { user ? (menu ? (<ProfileBox logado={false} visibility="visible" opacity={1}/>) : (<ProfileBox logado={false} visibility="hidden" opacity={0}/>)) : (menu ? (<ProfileBox logado={true} visibility="visible" opacity={1}/>) : (<ProfileBox logado={true} visibility="visible" opacity={0}/>))}
                   </div>
                </div>

            </div>
        </div>
    )
    //usar {!user ? () : ()}
}

export default Header