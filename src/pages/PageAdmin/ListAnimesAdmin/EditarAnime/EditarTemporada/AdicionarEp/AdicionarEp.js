import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './AdicionarEp.module.css'

function AdicionarEp(){
    const { id, temporada } = useParams();
    const [posts, setPosts] = useState([])

    const [nome, setNome] = useState()
    const [nomeAnime, setNomeAnime] = useState([])
    const [video, setVideo] = useState([])
    const [imagem, setImagem] = useState([])
    const [imgData, setImgData] = useState([])
    const [videoDublado, setVideoDublado] = useState([])
    const [inicioAbertura, setInicioAbertura] = useState([])
    const [fimAbertura, setFimAbertura] = useState([])


    useEffect(() => {

        
        axios.get(`${process.env.REACT_APP_API_URL}/getanim/episodios/${temporada}/${id}/`)
            .then(res => {
                setPosts(res.data.episodios)
                 setNomeAnime(res.data.episodios[0].nomeAnime);
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
    formData.append('video', video)
    formData.append('videoDublado', videoDublado)
    formData.append('screenshot', imagem)

    const onChangePicture = (e) => {
      if (e.target.files[0]) {
        setImagem(e.target.files[0]);
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          setImgData(reader.result);
        });
        reader.readAsDataURL(e.target.files[0]);
      }
    };

    const onChangeVideo = (e) => {
        if (e.target.files[0]) {
            console.log(e.target.files[0])
          setVideo(e.target.files[0]);
        }
      };
      const onChangeVideoDublado = (e) => {
        if (e.target.files[0]) {
            console.log(e.target.files[0])
          setVideoDublado(e.target.files[0]);
        }
      };
    const handleRegister = async (e) => {
     
            axios.post(`${process.env.REACT_APP_API_URL}/episodios/admin/addep`, formData, { withCredentials: true }, {
                headers: {
                'Content-Type': 'application/json'
                }
              })
              .catch((error) => {
                console.error(error)
              })
              // document.location.reload(true);
        
}
    return (
        <div className={styles.container}>
            {console.log(posts)}
            <form>
        <input type="text" value={nome} placeholder='Nome' onChange={(e) => setNome(e.target.value)}/>
        <input type="text" value={nomeAnime} placeholder='Nome Anime' onChange={(e) => setNomeAnime(e.target.value)}/>
        {/* <input type="text" value={video} placeholder='Video' onChange={(e) => setVideo(e.target.value)}/> */}
        <p>Video</p>
        <input type="file" name="video" onChange={onChangeVideo}/>
        <p>VideoDublado</p>
        <input type="file" name="videoDublado" onChange={onChangeVideoDublado}/>
        {/* <input type="text" value={imagem} placeholder='Anime Imagem' onChange={(e) => setImagem(e.target.value)}/> */}
        <p>Thumbnail</p>
        <input type="file" name="screenshot" accept="image/*" onChange={onChangePicture} />
        <img src={imgData} onError={(e) =>  {e.target.src = 'http://localhost:3232/static/animes/dropkick/t1/4.png'}} alt="" />
        {/* <input type="text" value={videoDublado} placeholder='Video Dublado' onChange={(e) => setVideoDublado(e.target.value)}/> */}
        <input type="text" value={inicioAbertura} placeholder='Inicio Abertura' onChange={(e) => setInicioAbertura(e.target.value)}/>
        <input type="text" value={fimAbertura} placeholder='Fim Abertura' onChange={(e) => setFimAbertura(e.target.value)}/>
        <button onClick={handleRegister}>Enviar</button>
            </form>
            <button onClick={handleRegister}>Enviar</button>
        </div>
    )
                
            

}
export default AdicionarEp