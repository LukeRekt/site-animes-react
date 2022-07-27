import styles from './UserProfileSearch.module.css'
import { useContext } from "react"
import { UserContext } from '../../UserContext'
import { FaHeart, FaClock, FaEye, FaUserAlt, FaSmile, FaQuoteLeft, FaPhoneAlt, FaLock, FaBirthdayCake, FaTransgenderAlt, FaPlay } from 'react-icons/fa';
import { AiOutlineLogout, AiFillCamera } from "react-icons/ai";
import { RiEqualizerLine } from "react-icons/ri";
import { FiAtSign } from "react-icons/fi";
import { useState } from "react";
import React, {useEffect } from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import FavoritosHandle from '../../components/layoult/FavoritosHandle/FavoritosHandle';
import AnimeAssistido from '../../components/layoult/AnimeAssistidoPlaceholder/AnimeAssistido';


function UserProfileSearch() {
    const [toggleState, setToggleState] = useState(5);
    const [usuario, setUsuario] = useState({});
    const navigate = useNavigate();
    const {id} = useParams(); 

    const { email } = useContext(UserContext)
    const [toggleEdit, setToggleEdit] = useState(20);
    const [pageCarregando, setPageCarregando] = useState(true)
    const [totalAssistido, setTotalAssistido] = useState([]);
    const [totalAssistidoTempo, setTotalAssistidoTempo] = useState();

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_API_URL}/buscar`, {
            username: id,
          })
          .then(function (response) {
            setUsuario(response.data)
            console.log(response.data)
            setPageCarregando(false);
          })
          .catch(function (error) {
            console.log(error);
            navigate("/404");
          });
    }, [])

    const variables = {
        nomeUsuario: usuario.username,
      }
    useEffect(() =>  {
       
        axios.post(`${process.env.REACT_APP_API_URL}/getallprogresso`,  variables)
     .then(res => {
         setTotalAssistido(res.data.progresso)
         setTotalAssistidoTempo(res.data.progresso.length * 24 / 60)
        // setPorcentagem(res);a
     })
   }, [usuario])


    const toggleTab = (index) => {
        setToggleState(index);
    };

    const toggleEditBtn = (index) => {
        if (toggleEdit == index) {
            setToggleEdit(20);
        } else {
            setToggleEdit(index);
        }
    };

    return (
        
        <div className={styles.PerfilContainer}>
            
        <div className={styles.leftUser}>
            <div className={styles.userAvatar}>
                <div className={styles.metadeAvatar}>
                    <img  src={usuario.userBanner} alt="" />
                </div>
                <img id={styles.avatar} src={`${process.env.REACT_APP_API_URL}/${usuario.userAvatar}`} alt="" />
                <p>{usuario.username}</p>
                <p>@{usuario.username}</p>
                <div className={styles.userSeguidores}>
                    <p>0 Seguindo</p>
                    <p>0 Seguidores</p>
                    
                </div>
            </div>
            <div className={styles.horasAssistidos}>
                <p>episódios assistidos <br /> {totalAssistido.length} (aprox {totalAssistidoTempo} horas)</p>
                <div className={styles.assistidosDetail}>
                    <div className={styles.detailsInside}>
                        <FaPlay className={styles.playbutton} />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.rightUser}>
            <div onClick={() => toggleTab(1)} className={toggleState === 1 ? `${styles.favoritos} ${styles.ativo} ${styles.tab_color}`: `${styles.favoritos} ${styles.tab_color}`} ><p><FaHeart /> Favoritos</p></div>
            <div onClick={() => toggleTab(2)} className={toggleState === 2 ? `${styles.assistidos} ${styles.ativo} ${styles.tab_color}`: `${styles.assistidos} ${styles.tab_color}`}><p><FaEye /> Assistidos</p></div>
            <div onClick={() => toggleTab(3)} className={toggleState === 3 ? `${styles.maistarde} ${styles.ativo} ${styles.tab_color}`: `${styles.maistarde} ${styles.tab_color}`}><p><FaClock /> Ver mais Tarde</p></div>
            <div onClick={() => toggleTab(5)} className={toggleState === 5 ? `${styles.editarPerfil} ${styles.ativo} ${styles.tab_color}` : `${styles.editarPerfil} ${styles.tab_color}`}><p><RiEqualizerLine /> Editar Perfil</p></div>

        </div>
        <div className={styles.content_tabs}>
            <div className={toggleState === 1 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                <div className={styles.tab_Favoritos}>
                        
                        {pageCarregando ? (<>Carregando</>) : (<FavoritosHandle user={usuario.username}/>)}
                    
                </div>

            </div>

            <div className={toggleState === 2 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                <div className={styles.naoTem}>
                    <AnimeAssistido user={usuario.username}/>
                </div>
            </div>

            <div className={toggleState === 3 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                <div className={styles.naoTem}>
                    <p><FaClock fill='#5555553b' /> Lista vazia</p>
                </div>
            </div>
            <div className={toggleState === 4 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                <div className={styles.naoTem}>
                    <p><FaHeart fill='#5555553b' /> Você não tem nenhum favorito</p>
                    
                </div>
            </div>
            <div className={toggleState === 5 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                <div className={styles.EditGeral}>
                    <h2>Geral</h2>
                    <div className={styles.perfilInfos}>
                        <p><FaUserAlt /> Nome Público</p>
                        <p>{usuario.username}</p>
                        {toggleEdit == 1 ? <div className={styles.editInput}>
                            <input type="text" />
                            <button>Salvar</button>
                            <button>Cancelar</button>
                        </div> : <></>}

                        
                    </div>
                    <div className={styles.perfilInfos}>
                        <p><FaSmile /> Apelido</p>
                        <p>{usuario.username}</p>
                        {toggleEdit == 2 ? <div className={styles.editInput}>
                            <input type="text" />
                            <button>Salvar</button>
                            <button>Cancelar</button>
                        </div> : <></>}

                        
                    </div>
                </div>
                <div className={styles.EditGeral}>
                    <h2>Dados Pessoais</h2>
                    <div className={styles.perfilInfos}>
                        <p><FiAtSign /> Email</p>
                        <p>Segredo :P</p>
                    

                       
                    </div>
                    <div className={styles.perfilInfos}>
                        <p><FaPhoneAlt /> Número</p>
                        <p>123456789</p>
                       

                        
                    </div>
                    <div className={styles.perfilInfos}>
                        <p><FaBirthdayCake /> Aniversário</p>
                        <p className={styles.longe}>01/01/01</p>
                       
                    </div>
                    <div className={styles.perfilInfos}>
                        <p><FaTransgenderAlt /> Gênero</p>
                        <p className={styles.longe}>Masculino</p>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default UserProfileSearch