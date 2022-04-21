import styles from './PagePerfil.module.css'
import { useContext } from "react"
import { UserContext } from '../../UserContext'
import { FaHeart, FaClock, FaEye, FaUserAlt, FaSmile, FaQuoteLeft, FaPhoneAlt, FaLock, FaBirthdayCake, FaTransgenderAlt, FaPlay } from 'react-icons/fa';
import { AiOutlineLogout } from "react-icons/ai";
import { RiEqualizerLine } from "react-icons/ri";
import { FiAtSign } from "react-icons/fi";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import { logout } from '../../api/user'
import Axios from "axios";
import FavoritosHandle from '../../components/layoult/FavoritosHandle/FavoritosHandle';
import AnimeAssistido from '../../components/layoult/AnimeAssistidoPlaceholder/AnimeAssistido';

function PagePefil() {
    const { user, setUser } = useContext(UserContext);
    const { avatar } = useContext(UserContext)
    const { banner } = useContext(UserContext)
    const { email } = useContext(UserContext)
    const [toggleState, setToggleState] = useState(5);
    const [toggleEdit, setToggleEdit] = useState(20);
    const navigate = useNavigate();
    const [posts, setPosts] = useState([])
    const [pageCarregando, setPageCarregando] = useState(true)
    const [totalAssistido, setTotalAssistido] = useState([]);
    const [totalAssistidoTempo, setTotalAssistidoTempo] = useState();
    const [file, setFile] = useState(null);

    const upload = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("screenshot", file);

        Axios.post("http://localhost:3232/trocaravatarteste", formData,  {withCredentials: true}, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then((res) => {
            window.location.reload();
            console.log("Sucesso! ", res);
        });
    };
    const variables = {
        nomeUsuario: user,
      }
    useEffect(() =>  {
       
        Axios.post('http://localhost:3232/getallprogresso',  variables)
     .then(res => {
         setTotalAssistido(res.data.progresso)
         setTotalAssistidoTempo(res.data.progresso.length * 24 / 60)
        // setPorcentagem(res);a
     })
   }, [user])
    useEffect(() => {
        Axios.get('http://localhost:3232/getanim')
            .then(res => {
                setPosts(res.data.animes)
                
            })
    }, [])

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
        setPageCarregando(false);
        setToggleState(index);
    };
    const toggleEditBtn = (index) => {
        if (toggleEdit == index) {
            setToggleEdit(20);
        } else {
            setToggleEdit(index);
        }
    };
    

   
            
        console.log(totalAssistidoTempo)
        
    
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
                    {console.log(totalAssistido)}
                    <p>videos assistidos <br /> {totalAssistido.length} (aprox {totalAssistidoTempo} horas)</p>
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
                <div onClick={handleLogout} className={`${styles.algumacoisa} ${styles.tab_color}`}><p><AiOutlineLogout /> Logout</p></div>

            </div>
            <div className={styles.content_tabs}>
                <div className={toggleState === 1 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                    <div className={styles.tab_Favoritos}>
                       {/* {favoritos.length == 0 ? (<></>) : (posts.map((post, index) => 
                        favoritos[index] ? (<Animes key={post.id} nome={post.nome} id={post.id} imagem={post.imagem} episodeos={post.episodios} />) : (<></>)))}  */}
                            
                            {pageCarregando ? (<>Carregando</>) : (<FavoritosHandle user={user}/>)}
                        
                    </div>

                </div>

                <div className={toggleState === 2 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}>
                    <div className={styles.naoTem}>
                        <AnimeAssistido user={user}/>
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
                            <p>{user}</p>
                            {toggleEdit == 1 ? <div className={styles.editInput}>
                                <input type="text" />
                                <button>Salvar</button>
                                <button>Cancelar</button>
                            </div> : <></>}

                            <button onClick={() => toggleEditBtn(1)}>Alterar</button>
                        </div>
                        <div className={styles.perfilInfos}>
                            <p><FaSmile /> Apelido</p>
                            <p>{user}</p>
                            {toggleEdit == 2 ? <div className={styles.editInput}>
                                <input type="text" />
                                <button>Salvar</button>
                                <button>Cancelar</button>
                            </div> : <></>}

                            <button onClick={() => toggleEditBtn(2)}>Alterar</button>
                        </div>
                        <div className={styles.perfilInfos}>
                            <p><FaQuoteLeft /> Avatar</p>
                            <input
                                type="file"
                                className={styles.inputFile}
                                name="screenshot"
                                onChange={(e) => {
                                    setFile(e.target.files[0]);
                                }} />
                            <button className="" onClick={(e) => upload(e)}>Mudar</button>
                        </div>
                    </div>
                    <div className={styles.EditGeral}>
                        <h2>Dados Pessoais</h2>
                        <div className={styles.perfilInfos}>
                            <p><FiAtSign /> Email</p>
                            <p>{email}</p>
                            {toggleEdit == 4 ? <div className={styles.editInput}>
                                <input type="text" />
                                <button>Salvar</button>
                                <button>Cancelar</button>
                            </div> : <></>}

                            <button onClick={() => toggleEditBtn(4)}>Alterar</button>
                        </div>
                        <div className={styles.perfilInfos}>
                            <p><FaPhoneAlt /> Número</p>
                            <p>123456789</p>
                            {toggleEdit == 5 ? <div className={styles.editInput}>
                                <input type="text" />
                                <button>Salvar</button>
                                <button>Cancelar</button>
                            </div> : <></>}

                            <button onClick={() => toggleEditBtn(5)}>Alterar</button>
                        </div>
                        <div className={styles.perfilInfos}>
                            <p><FaBirthdayCake /> Aniversário</p>
                            <p className={styles.longe}>01/01/01</p>
                            <button onClick={() => toggleEditBtn(1)}>Alterar</button>
                        </div>
                        <div className={styles.perfilInfos}>
                            <p><FaTransgenderAlt /> Gênero</p>
                            <p className={styles.longe}>Helicóptero de Combate</p>
                            <button onClick={() => toggleEditBtn(1)}>Alterar</button>
                        </div>
                    </div>
                    <div className={styles.EditGeral}>
                        <h2>Segurança</h2>
                        <div className={styles.perfilInfos}>
                            <p><FaLock /> Senha</p>
                            {toggleEdit == 8 ? <div className={styles.editInput}>
                                <input type="text" />
                                <button>Salvar</button>
                                <button>Cancelar</button>
                            </div> : <></>}

                            <button onClick={() => toggleEditBtn(8)}>Alterar</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PagePefil