import styles from './ProfileBox.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { BiKey } from "react-icons/bi";
import { logout } from '../../api/user';
import { UserContext } from '../../UserContext';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { AiOutlineLogout } from "react-icons/ai";
function ProfileBox (props) {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);;
    
    const pimba = {
        opacity: props.opacity,
        visibility: props.visibility,
      }
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

    return(
        <div style={pimba} className={styles.container} >
            
            {props.logado ? (<></>) : (<div className={styles.nomeUser}><p>@{user}</p> </div>)}

            {props.logado ? (<Link to="/login"><div onClick={() => console.log("fechar")} className={styles.login}>  <p><BiKey size="25px"/>Login</p></div></Link>) :
             (<Link to="/perfil"><div onClick={() => console.log("fechar")} className={styles.login}>  <p><BiKey size="25px"/>Perfil</p></div></Link>)}
            
            {props.logado ? (<Link to="/registrar"><div className={styles.login}>  <p><BiKey size="25px"/>Registrar</p></div></Link>) :
             (<div onClick={handleLogout} className={styles.login}>  <p><AiOutlineLogout size="23px"/>Deslogar</p></div>)}
            </div>
    )
}

export default ProfileBox