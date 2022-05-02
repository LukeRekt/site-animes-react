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
            <Helmet>
            <title>{posts.nome}</title>
            <link rel="canonical" href="http://mysite.com/example" />
            {/* Microsoft */}
            <meta name="msapplication-TileImage" content="http://www.example.com/image01.jpg"/>

            {/* Fb & Wp */}
            <meta property="og:site_name" content="The Rock Photo Studio"/>
            <meta property="og:title" content="The Rock Photo Studio in Florida"/>
            <meta property="og:description" content="The best photo studio for your events"/>

            <meta property="og:image" content="http://www.example.com/image01.jpg"/>

<meta property="og:type" content="website" />
<meta property="og:image:type" content="image/jpeg"/>

{/* Tamanho da imagem. Uma tamanho maior que 300px nao funciona no whatsapp */}
<meta property="og:image:width" content="300"/>
<meta property="og:image:height" content="300"/>

{/* Site que vai ser acessado ao clicar */}
<meta property="og:url" content="http://teste.com"/>

            </Helmet>
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
                <Tabs id={id} temporadas={posts.temporadas}/>
                {/* eps aqui listados vindo direto de um novo server json buscando de acordo com o id do ep */}

            </div>

        </div>

    )
}

export default PageAnime