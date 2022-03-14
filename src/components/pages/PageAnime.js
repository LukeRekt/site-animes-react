import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './PageAnime.module.css'
import Tabs from '../layoult/Tabs';

function PageAnime() {


    const { id } = useParams();
    const [posts, setPosts] = useState([])
    let navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://serverdacupula.ddns.net:4000/animes/${id}`)
            .then(res => {
                setPosts(res.data)
                console.log(res)
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
                    <p>{lanc}</p>
                    <p>{posts.diaLancamento}</p>
                </div>
                <div className={styles.boxInfoAnimes}>
                    <p>Episódios</p>
                    {posts.episodeos}</div>
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
                <p>Segunda Temporada, Hajime Nagumo, de dezessete anos, é um otaku típico. No entanto, a sua vida simples é subitamente alterada quando ele, juntamente com o resto da sua classe, é transportado para um mundo de fantasia! Eles são tratados como heróis e encarregados do dever de salvar a raça humana da extinção. Mas o que deveria ter sido o sonho de qualquer otaku rapidamente se transforma num pesadelo para Hajime. </p>
                
            </div>
            <div className={styles.episodeosAnime}>
            <Tabs id={posts.id}/>
                {/* eps aqui listados vindo direto de um novo server json buscando de acordo com o id do ep */}

            </div>

        </div>

    )
}

export default PageAnime