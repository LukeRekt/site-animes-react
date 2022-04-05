import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { FaCheck } from "react-icons/fa";

import axios from 'axios'
import styles from './PageAnime.module.css'
import Tabs from '../layoult/Tabs';
import AnimeTemas from '../layoult/AnimeTemas';

function PageAnime() {


    const { id } = useParams();
    const [posts, setPosts] = useState([])
    const [temas, setTemas] = useState([])
    let navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://192.168.1.8:3232/getanim/${id}`)
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
    let lanc = lancamento();

    return (
        <div className={styles.container}>
            <div className={styles.nomeAnime}>
                {posts.nome}
            </div>

            <div className={styles.fotoAnime}>
                <img src={posts.imagem} alt="" />
                <div className={styles.sobreAnime}>

                    <div className={styles.sobreAnimeTexto}>
                        <FaCheck />
                        <p>{lanc}</p>
                        <p>{posts.diaLancamento}</p>
                    </div>

                </div>
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