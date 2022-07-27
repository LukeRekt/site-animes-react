
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import VideoProgress from "../VideoProgress/VideoProgress"
import styles from "./AnimeAssistido.module.css"
import { HiEmojiSad } from "react-icons/hi";
import BotaoVerMais from "../BotaoVerMais/VerMais";
function AnimeAssistido (props){
    const [porcentagem, setPorcentagem] = useState([]);
    const [episodios, setEpisodiosQuantidade] = useState(6);
    const variables = {
        nomeUsuario: props.user,
        quantidadeEps: episodios
      }
    useEffect(() =>  {
       
        axios.post(`${process.env.REACT_APP_API_URL}/getallprogresso`,  variables)
     .then(res => {
         setPorcentagem(res.data.progresso)
         console.log(porcentagem)
        // setPorcentagem(res);a
     })
   }, [props.user, episodios])

    return (
        <div className={styles.containerGeral}>
            <div className={styles.container}>
                {porcentagem.length !== 0 ? (porcentagem.map((post, index) => {
                    
                    return <Link key={index} to={`/anime/${post.idAnime}/${post.temporadaAnime}/${post.episodioAnime}`}> 
                    <div  className={styles.AnimeContainer}>
                        
                          <img src={`${process.env.REACT_APP_API_URL}/${post.animeImagem}`} alt="" />
                          <div className={styles.AnimeOver}>
                              <p>{post.nomeAnime}</p>
                              <p>Temporada: {post.temporadaAnime}</p>
                              <p>Ep: {post.episodioAnime}</p>
                              <p>{post.nomeEp}</p>
                              </div>
                         <div className={styles.BarraProgresso}>
                         
                             <VideoProgress tempoAtual={post.tempoAtual} tempoTotal={post.tempoTotal}/>
                            
                         </div>
                         
                     </div></Link>
                     
                             })) : (<p id={styles.nadaEncontrado}>Você ainda não assitiu nada <HiEmojiSad/></p>)}
          
            
        </div>
        <div id={styles.areaBotao}>
        <BotaoVerMais onClick={() => setEpisodiosQuantidade(episodios + 5)}/>
        </div>
        
        </div>
    )
}
export default AnimeAssistido