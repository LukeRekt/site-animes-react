import {useParams, useNavigate} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Footer from '../layoult/Footer';
import styles from './PageAnime.module.css'

function PageAnime(){

    function erro(){
        return (<div>
            <h1>aaa</h1>
        </div>)
    }

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
        
        
        </div>
        
    )
}

export default PageAnime