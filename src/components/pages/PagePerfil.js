import styles from './PagePerfil.module.css'
import { useContext } from "react"
import { UserContext } from '../../UserContext'
import { FaHeart, FaClock, FaEye, FaUserAlt, FaSmile, FaQuoteLeft, FaPhoneAlt, FaLock, FaBirthdayCake, FaTransgenderAlt, FaPlay} from 'react-icons/fa';
import { AiOutlineLogout } from "react-icons/ai";
import { RiEqualizerLine } from "react-icons/ri";
import { FiAtSign } from "react-icons/fi";
import { useState } from "react";
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
import { logout } from '../../api/user'

function PagePefil() {
    const { user, setUser } = useContext(UserContext);
    const { avatar } = useContext(UserContext)
    const { banner } = useContext(UserContext)
    const [toggleState, setToggleState] = useState(5);

    const navigate = useNavigate();

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

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        
        <div className={styles.PerfilContainer}>
            <div className={styles.leftUser}>

                <div className={styles.userAvatar}>
                    <div className={styles.metadeAvatar}>
                        <img src={banner} alt="" />
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
                    <p>videos assistidos <br /> 0 (aprox 0 horas)</p>
                    <div className={styles.assistidosDetail}>
                        <div className={styles.detailsInside}>
                            <FaPlay className={styles.playbutton}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.rightUser}>
                <div onClick={() => toggleTab(1)} className={`${styles.favoritos} ${styles.tab_color}`} ><p><FaHeart /> Favoritos</p></div>
                <div onClick={() => toggleTab(2)} className={`${styles.assistidos} ${styles.tab_color}`}><p><FaEye /> Assistidos</p></div>
                <div onClick={() => toggleTab(3)} className={`${styles.maistarde} ${styles.tab_color}`}><p><FaClock /> Ver mais Tarde</p></div>
                <div onClick={() => toggleTab(5)} className={`${styles.editarPerfil} ${styles.tab_color}`}><p><RiEqualizerLine /> Editar Perfil</p></div>
                <div onClick={handleLogout} className={`${styles.algumacoisa} ${styles.tab_color}`}><p><AiOutlineLogout /> Logout</p></div>
                
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
                    <div className={styles.EditGeral}>
                        <h2>Geral</h2>
                        <div className={styles.perfilInfos}>
                            <p><FaUserAlt/> Nome Público</p>
                            <button>Alterar</button>
                        </div>
                        <div className={styles.perfilInfos}>
                            <p><FaSmile/> Apelido</p>
                            <button>Alterar</button>
                        </div>
                        <div className={styles.perfilInfos}>
                            <p><FaQuoteLeft/> Frase do perfil</p>
                            <button>Alterar</button>
                        </div>
                    </div>
                    <div className={styles.EditGeral}>
                    <h2>Dados Pessoais</h2>
                        <div className={styles.perfilInfos}>
                            <p><FiAtSign/> Email</p>
                            <button>Alterar</button>
                        </div>
                        <div className={styles.perfilInfos}>
                            <p><FaPhoneAlt/> Número</p>
                            <button>Alterar</button>
                        </div>
                        <div className={styles.perfilInfos}>
                            <p><FaBirthdayCake/> Aniversário</p>
                        </div>
                        <div className={styles.perfilInfos}>
                            <p><FaTransgenderAlt /> Gênero</p>
                        </div>
                    </div>
                    <div className={styles.EditGeral}>
                        <h2>Segurança</h2>
                        <div className={styles.perfilInfos}>
                            <p><FaLock/> Senha</p>
                            <button>Alterar</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PagePefil