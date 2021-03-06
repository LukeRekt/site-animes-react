import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './AdicionarEp.module.css'

function AdicionarEp(){
    const { id, temporada } = useParams();
    const [posts, setPosts] = useState([])

    const [nome, setNome] = useState([])
    const [nomeAnime, setNomeAnime] = useState([])
    const [video, setVideo] = useState([])
    const [imagem, setImagem] = useState([])
    const [videoDublado, setVideoDublado] = useState([])
    const [inicioAbertura, setInicioAbertura] = useState([])
    const [fimAbertura, setFimAbertura] = useState([])
    useEffect(() => {

        
        axios.get(`${process.env.REACT_APP_API_URL}/getanim/episodios/${temporada}/${id}/`)
            .then(res => {
                setPosts(res.data.episodios)
                // console.log(posts)
            })
    }, [])
    const variables = {
        id: id,
        numero: posts.length + 1,
        nome: nome,
        nomeAnime: nomeAnime,
        video: video,
        animeImagem: imagem,
        // nomeAnime:
        videoDublado: videoDublado,
        temporada: temporada, 
        inicioAbertura: inicioAbertura,
        fimAbertura: fimAbertura
    }
    const formData = new FormData();
  

    formData.append('data', JSON.stringify(variables));
    const handleRegister = async (e) => {
     
            axios.post(`${process.env.REACT_APP_API_URL}/episodios/admin/addep`, formData, { withCredentials: true }, {
                headers: {
                'Content-Type': 'application/json'
                }
              })
              .catch((error) => {
                console.error(error)
              })
              //document.location.reload(true);
        
}
    return (
        <div className={styles.container}>
            {console.log(posts)}
            <form>
        <input type="text" value={nome} placeholder='Nome' onChange={(e) => setNome(e.target.value)}/>
        <input type="text" value={nomeAnime} placeholder='Nome Anime' onChange={(e) => setNomeAnime(e.target.value)}/>
        <input type="text" value={video} placeholder='Video' onChange={(e) => setVideo(e.target.value)}/>
        <input type="text" value={imagem} placeholder='Anime Imagem' onChange={(e) => setImagem(e.target.value)}/>
        <input type="text" value={videoDublado} placeholder='Video Dublado' onChange={(e) => setVideoDublado(e.target.value)}/>
        <input type="text" value={inicioAbertura} placeholder='Inicio Abertura' onChange={(e) => setInicioAbertura(e.target.value)}/>
        <input type="text" value={fimAbertura} placeholder='Fim Abertura' onChange={(e) => setFimAbertura(e.target.value)}/>
        <button onClick={handleRegister}>Enviar</button>
            </form>

        </div>
    )
                
            

}
export default AdicionarEp