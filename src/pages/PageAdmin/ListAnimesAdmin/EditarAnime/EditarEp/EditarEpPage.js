import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './EditarEpPage.module.css'





const axios = require('axios');


function EditarEpPage(){

    const [posts, setPosts] = useState([]);
    const {temporada, id, ep } = useParams();


    const [nome, setNome] = useState()
    const [video, setVideo] = useState()
    const [videoDublado, setVideoDublado] = useState()
    const [animeImagem, setAnimeImagem] = useState()
    const [inicioAbertura, setInicioAbertura] = useState()
    const [fimAbertura, setFimAbertura] = useState()
 

    useEffect(() => {
      
        axios.get(`${process.env.REACT_APP_API_URL}/getanim/episodios/${temporada}/${id}/${ep}`)
          .then(res => {
            setNome(res.data.episodios.nome)
            setVideo(res.data.episodios.video)
            setVideoDublado(res.data.episodios.videoDublado)
            setAnimeImagem(res.data.episodios.animeImagem)
            setInicioAbertura(res.data.episodios.inicioAbertura)
            setFimAbertura(res.data.episodios.fimAbertura)
            
          }).catch((err) => {
            console.log(err)
          })
      }, [])
      const variables = {
        id: id,
        nome: nome,
        numero: ep,
        temporada: temporada,
        video: video,
        videoDublado: videoDublado,
        thumbnail: animeImagem,
        inicioAbertura: inicioAbertura,
        fimAbertura: fimAbertura,


        
    }
    const formData = new FormData();
  

    formData.append('data', JSON.stringify(variables));
    const handleRegister = async (e) => {
            axios.post(`${process.env.REACT_APP_API_URL}/episodios/admin/editep`, formData, { withCredentials: true }, {
                headers: {
                //   'Authorization': `${cookies.get('jwt')}`,
                'Content-Type': 'application/json'
                }
              })
              .catch((error) => {
                console.error(error)
              })
        
}

    return (
        <div className={styles.container}>
          
            <form>
            <input type="text" placeholder='Titulo EP' value={nome} onChange={(e) => setNome(e.target.value)}/>
            <input type="text" placeholder='Link Legendado' value={video} onChange={(e) => setVideo(e.target.value)}/>
            <input type="text" placeholder='Link Dublado' value={videoDublado} onChange={(e) => setVideoDublado(e.target.value)}/>
            <input type="text" placeholder='Thumbnail' value={animeImagem} onChange={(e) => setAnimeImagem(e.target.value)}/>
            <input type="text" placeholder='Inicio Abertura' value={inicioAbertura} onChange={(e) => setInicioAbertura(e.target.value)}/>
            <input type="text" placeholder='Fim Abertura' value={fimAbertura} onChange={(e) => setFimAbertura(e.target.value)}/>
            <button onClick={handleRegister}>Alterar</button>
            </form>
            
        </div>

    )
}

export default EditarEpPage