
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import VideoProgress from "../VideoProgress/VideoProgress"
import styles from "./AnimeAssistido.module.css"
import { HiEmojiSad } from "react-icons/hi";
function AnimeAssistido (props){
    const [porcentagem, setPorcentagem] = useState([]);
    const variables = {
        nomeUsuario: props.user,
      }
    useEffect(() =>  {
       
        axios.post('http://localhost:3232/getallprogresso',  variables)
     .then(res => {
         setPorcentagem(res.data.progresso)
         console.log(porcentagem)
        // setPorcentagem(res);a
     })
   }, [props.user])

    return (
        <div>
            <div className={styles.container}>
                {porcentagem.length !== 0 ? (porcentagem.map((post, index) => {
                    
                    return <Link key={index} to={`/anime/${post.idAnime}/${post.temporadaAnime}/${post.episodioAnime}`}> 
                    <div  className={styles.AnimeContainer}>
                        
                          <img src={post.animeImagem} alt="" />
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
        </div>
    )
}
export default AnimeAssistido