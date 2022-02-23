import {useParams, useNavigate} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Footer from '../layoult/Footer';
import styles from './PageAnime.module.css'

function PageAnime(){


    const {id} = useParams();

    const [posts, setPosts] = useState([])
    let navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:4000/animes/${id}`)
        .then(res => {
            setPosts(res.data)
            console.log(res)
        }).catch((err) =>{
            return navigate("/");
        })
    }, [])
    function lancamento () {
        if(posts.lancamento == true){
            return "EM LANÇAMENTO"
        }else{
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
                
            </div>
            <div className={styles.episodeosAnime}></div>
                <div className={styles.especiaisAnime}></div>
                <div className={styles.filmesAnime}></div>
                <div className={styles.ProdAnime}></div>
                <div className={styles.ProdAnime}></div>
                <div className={styles.ProdAnime}></div>
                <div className={styles.ProdAnime}></div>
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