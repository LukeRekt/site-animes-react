import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect, useContext } from 'react'
import { BsLightningChargeFill } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import axios from 'axios'
import styles from './PageAnime.module.css'
import Tabs from '../../components/layoult/Tabs';
import AnimeTemas from '../../components/layoult/AnimeTemas';
import { UserContext } from '../../UserContext'

function PageAnime() {

    const { user } = useContext(UserContext);
    const {favoritos} = useContext(UserContext);
    const { id } = useParams();
    const [posts, setPosts] = useState([])
    const [temas, setTemas] = useState([])
    
    let navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:3232/getanim/${id}`)
            .then(res => {
                setPosts(res.data.animes)
                setTemas(res.data.animes.temas)
            }).catch((err) => {
                return navigate("/");
            })
    }, [])

    function lancamento() {
        if (posts.lancamento === true) {
            return "EM LANÇAMENTO"
        } else {
            return "Completo"
        }
    }
    const lanc = lancamento();

    return (
        <div className={styles.container}>
            <div className={styles.nomeAnime}>
                {posts.nome}
            </div>

            <div className={styles.fotoAnime}>
                <img src={posts.imagem} alt="" />
                {posts.lancamento == false ? (<div className={` ${styles.sobreAnime} ${styles.animeCompleto}`}>
                <FaCheck/>
                    <div className={styles.sobreAnimeTexto}>
                        
                        <p>{lanc}</p>
                    </div>
                
                </div>) : (<div className={styles.sobreAnime}>
                <BsLightningChargeFill/>
                    <div className={styles.sobreAnimeTexto}>
                        
                        <p>{lanc}</p>
                        <p>{posts.diaLancamento}</p>
                    </div>
                
                </div>)}
                
                {console.log(favoritos.includes(id))}
                {user ? ( favoritos.includes(parseInt(id)) ? (<div className={styles.favoritar}><p><FiHeart/> Favorito</p></div>) : (<div className={styles.favoritar}><p><FiHeart/> Favoritar</p></div>)) 
                : (<></>)}
                
                <div className={styles.boxInfoAnimes}>
                    <p>Episódios</p>
                    {posts.episodios}</div>
                <div className={styles.boxInfoAnimes}>
                    <p>Especiais</p>
                    {posts.especiais}</div>
                <div className={styles.boxInfoAnimes}>
                    <p>Filmes</p>
                    {posts.filmes}</div>
                <div className={styles.prodAnime}>
                    <p>Autor</p>
                    <p>{posts.autor}</p>
                </div>
                <div className={styles.prodAnime}>
                    <p>Diretor</p>
                    <p>{posts.diretor}</p>
                </div>
                <div className={styles.prodAnime}>
                    <p>Estudio</p>
                    <p>{posts.estudio}</p>
                </div>
                <div className={styles.prodAnime}>
                    <p>Ano</p>
                    <p>{posts.ano}</p>
                </div>
            </div>
            <div className={styles.sinopseAnime}>
                <h3>Sinopse</h3>
                <p>{posts.descricao}</p>
                <AnimeTemas temas={temas}/> 

            </div>
            <div className={styles.episodeosAnime}>
                <Tabs id={id} temporadas={posts.temporadas}/>
                {/* eps aqui listados vindo direto de um novo server json buscando de acordo com o id do ep */}

            </div>

        </div>

    )
}

export default PageAnime