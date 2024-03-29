import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './AdicionarEp.module.css'

function AdicionarEp(){
    const { id, temporada } = useParams();
    const [posts, setPosts] = useState([])
    const [animePosts, setAnimePosts] = useState([])

    const [nome, setNome] = useState()
    const [nomeAnime, setNomeAnime] = useState([])
    const [video, setVideo] = useState([])
    const [imagem, setImagem] = useState([])
    const [imgData, setImgData] = useState([])
    const [videoDublado, setVideoDublado] = useState("nao")
    const [sinopseEp, setSinopseEp] = useState("")
    const [inicioAbertura, setInicioAbertura] = useState(0)
    const [fimAbertura, setFimAbertura] = useState(0)
    const [fimAberturaTotal, setFimAberturaTotal] = useState(0)

    let navigate = useNavigate();

    useEffect(() => {

        
        axios.get(`${process.env.REACT_APP_API_URL}/getanim/admin/${id}/`)
            .then(res => {
              setAnimePosts(res.data.animes)
              console.log(res.data.animes)
              setNomeAnime(res.data.animes.nome);
            })
    }, [])

    useEffect(() => {

        
      axios.get(`${process.env.REACT_APP_API_URL}/getanim/episodios/${temporada}/${id}/`)
          .then(res => {
              setPosts(res.data.episodios)
               
          })
  }, [])


    const variables = {
        id: id,
        numero: posts.length + 1,
        nome: nome,
        nomeAnime: animePosts.nome,
        video: video,
        animeImagem: imagem,
        // nomeAnime:
        videoDublado: videoDublado,
        temporada: temporada, 
        sinopseEp: sinopseEp, 
        inicioAbertura: inicioAbertura,
        fimAbertura: fimAbertura,
        slug: animePosts.slug,
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
              }).then(function (response) {
                console.log("response :", response.status);
                if(response.status === 200){
                  console.log("Ok");
                  navigate(`/admin/editar/${id}`);
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
        <img src={imgData} onError={(e) =>  {e.target.src = `${process.env.REACT_APP_API_URL}/static/animes/dropkick/t1/4.png`}} alt="" />
        {/* <input type="text" value={videoDublado} placeholder='Video Dublado' onChange={(e) => setVideoDublado(e.target.value)}/> */}
        <textarea cols="52" rows="8" placeholder="sinopseEp" value={sinopseEp} onChange={(e) => setSinopseEp(e.target.value)} ></textarea>
        <div>
          <input type="text" placeholder='Inicio Abertura Minutos' onChange={(e) => setInicioAbertura(e.target.value * 60)}/>
          <input type="text" placeholder='Inicio Abertura Segundos' onChange={(e) => setInicioAbertura(parseInt(inicioAbertura) + parseInt(e.target.value))}/>
        </div>
        <div>
          <input type="text" placeholder='Fim Abertura Minutos' onChange={(e) => setFimAbertura(e.target.value * 60)}/>
          <input type="text" placeholder='Fim Abertura Segundos' onChange={(e) => setFimAbertura(parseInt(fimAbertura) + parseInt(e.target.value))}/></div>
        
        
        {/* <button onClick={handleRegister}>Enviar</button> */}
            </form>
            {/* <button onClick={() => console.log(inicioAbertura)}>Enviar</button>
            <button onClick={() => console.log(fimAbertura)}>Enviar</button> */}
             <button onClick={handleRegister}>Enviar</button>
        </div>
    )
                
            

}
export default AdicionarEp