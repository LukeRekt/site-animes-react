import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Footer from '../layoult/Footer';
import styles from './PageAnime.module.css'

function PageAnime() {


    const { id } = useParams();

    const [posts, setPosts] = useState([])
    let navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:4000/animes/${id}`)
            .then(res => {
                setPosts(res.data)
                console.log(res)
            }).catch((err) => {
                return navigate("/");
            })
    }, [])
    function lancamento() {
        if (posts.lancamento == true) {
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
                    <p>Episodeos</p>
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
                {/* padrao de sinopse simples */}
            </div>
            <div className={styles.episodeosAnime}>

                {/* eps aqui listados vindo direto de um novo server json buscando de acordo com o id do ep */}
            </div>


        </div>

    )
}

export default PageAnime