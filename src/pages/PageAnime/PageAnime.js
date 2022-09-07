import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect, useContext } from 'react'
import { BsLightningChargeFill } from "react-icons/bs";

import { FaCheck } from "react-icons/fa";
import axios from 'axios'
import styles from './PageAnime.module.css'
import Tabs from '../../components/layoult/Tabs/Tabs';
import AnimeTemas from '../../components/layoult/AnimeTemas/AnimeTemas';
import { UserContext } from '../../UserContext'
import BotaoFavorito from '../../components/layoult/BotaoFavorito/BotaoFavorito';
import Helmet from 'react-helmet';

function PageAnime() {
    const { user } = useContext(UserContext);
    const {favoritos, setFavoritos} = useContext(UserContext);

    const { id } = useParams();
    const [posts, setPosts] = useState([])
    const [temas, setTemas] = useState([])

    const [temporadas, setTemporadas] = useState([])
    
    let navigate = useNavigate();
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/getanim/${id}`)
            .then(res => {
                setPosts(res.data.animes)
                setTemas(res.data.animes.temas)
                teste(res.data.animes.id)
            }).catch((err) => {
                return navigate("/");
            })

    }, [])


    function teste(id){
        axios.get(`${process.env.REACT_APP_API_URL}/gettemporada/${id}`)
        .then(res => {
            setTemporadas(res.data.temporadas)
            console.log("teste" + id)
        }).catch((err) => {
            // return navigate("/");
        })
    }
    // useEffect(() => {
        

    // }, [posts.id])

    function lancamento() {
        if (posts.lancamento === true) {
            return "EM LANÇAMENTO"
        } else {
            return "Completo"
        }
    }
    const lanc = lancamento();

    return (
        posts.id ? (<div className={styles.container}>
            
            <Helmet>
            <title>{posts.nome}</title>

            </Helmet>
            <div className={styles.nomeAnime}>
                {posts.nome}
            </div>

            <div className={styles.fotoAnime}>
                <img src={`${process.env.REACT_APP_API_URL}/${posts.imagem}`} alt="" />
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
                
                {user ? ( <BotaoFavorito user={user} nome={posts.nome} id={id} imagem={posts.imagem} />) : (<></>)}
                
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
                
                <Tabs id={posts.id} temporadas={temporadas.length}/>
                {/* eps aqui listados vindo direto de um novo server json buscando de acordo com o id do ep */}

            </div>

        </div>) : (<></>)
        

    )
}

export default PageAnime