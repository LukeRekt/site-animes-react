import { useState } from 'react';
import { useEffect } from 'react';
import styles from './EditarEpPage.module.css'





const axios = require('axios');


function EditarEpPage(){

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3232/getanim/episodios/1/1/1`)
          .then(res => {
            setPosts(res.data.episodios)
            // console.log(posts.nome)
          }).catch((err) => {
            console.log(err)
          })
      }, [])
    return (
        <div className={styles.container}>
            <form>
            <input type="text" placeholder='Titulo EP' value={posts.nome}/>
            <input type="text" placeholder='Link Legendado' value={posts.video}/>
            <input type="text" placeholder='Link Dublado' value={posts.videoDublado}/>
            <input type="text" placeholder='Thumbnail' value={posts.animeImagem}/>
            <input type="text" placeholder='Inicio Abertura' value={posts.inicioAbertura}/>
            <input type="text" placeholder='Fim Abertura' value={posts.fimAbertura}/>
            <button>Enviar</button>
            </form>
        </div>

    )
}

export default EditarEpPage