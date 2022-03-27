import styles from './ProfileBox.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { BiKey } from "react-icons/bi";
import { logout } from '../../api/user';
import { UserContext } from '../../UserContext';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { AiOutlineLogout } from "react-icons/ai";
import {FaStar} from "react-icons/fa"
function ProfileBox (props) {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const { admin } = useContext(UserContext)
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
    const salveadm = (e) => {
        e.preventDefault();
        alert("SAAAAALLVEEE ADDMM")    
    }

    return(
        <div style={pimba} className={styles.container} >
            
            {props.logado ? (<></>) : (<div className={styles.nomeUser}><p>@{user}</p> </div>)}
        <div className={styles.opcoes}>
        {props.logado ? (<Link to="/login"><div onClick={() => console.log("fechar")} className={styles.login}> <BiKey size="40px"/> <p>Login</p></div></Link>) :
             (<Link to="/perfil"><div onClick={() => console.log("fechar")} className={styles.login}>  <BiKey size="40px"/><p>Perfil</p></div></Link>)}
            
            {props.logado ? (<Link to="/registrar"><div className={styles.login}> <BiKey size="40px"/> <p>Registrar</p></div></Link>) :
             (<div onClick={handleLogout} className={styles.login}> <AiOutlineLogout size="40px"/> <p>Deslogar</p></div>)}

    {props.logado == false ? (admin == false ? (<></>) : (<div onClick={salveadm} id={styles.admin} className={styles.login}> <FaStar size="40px"/> <p id={styles.admin}>Admin</p></div>)) : (<></>)}

        </div>
            
            </div>
    )
}

export default ProfileBox