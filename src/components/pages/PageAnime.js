import {useParams} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Footer from '../layoult/Footer';
import styles from './PageAnime.module.css'
function PageAnime(){
    const {id} = useParams();

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:4000/animes/${id}`)
        .then(res => {
            setPosts(res.data)
            console.log(res)
        })
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.nomeAnime}>
                {posts.nome}
            </div>

            <div className={styles.fotoAnime}>
            {/* aqui vai a imagem com a div sobre o anime */}
            </div>
            <div className={styles.sinopseAnime}>
                {/* padrao de sinopse simples */}
            </div>
            <div className={styles.episodeosAnime}>
                {/* eps aqui listados vindo direto de um novo server json buscando de acordo com o id do ep */}
            </div>
        
        <Footer/>
        </div>
        
    )
}

export default PageAnime