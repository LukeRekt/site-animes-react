import axios from "axios";
import { useEffect, useState } from "react"
import VideoProgress from "../VideoProgress/VideoProgress"
import styles from "./AnimeAssistido.module.css"
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
        // setPorcentagem(res);
     })
   }, [props.user])

    return (
        <div>
            <div className={styles.container}>
                {porcentagem.map((post, index) => {
       return <div key={index} className={styles.AnimeContainer}>
             <img src={post.animeImagem} alt="" />
            <div className={styles.BarraProgresso}><VideoProgress tempoAtual={post.tempoAtual} tempoTotal={post.tempoTotal}/></div>
        </div>
                })}
          
            
        </div>
        </div>
    )
}
export default AnimeAssistido