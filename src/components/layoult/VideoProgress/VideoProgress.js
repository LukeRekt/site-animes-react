import axios from 'axios';
import { useEffect, useState } from 'react'
import styles from './VideoProgress.module.css'

function VideoProgress(props) {
    const variables = {
        nomeUsuario: "Luke",
        temporadaAnime: props.temporada,
        episodioAnime: 1,
        idAnime: 1,
      }

    const [tempoSalvo, setTempoSalvo] = useState();
    useEffect(() => {
        axios.post('http://localhost:3232/getprogresso',  variables, { withCredentials: true })
     .then(res => {
          setTempoSalvo(res.data.tempoAtual)
          console.log(tempoSalvo)
         // setCarregandoFavoritos(false)
     })
   }, [])

    return (
        <div className={styles.BarraTotal}>
            {tempoSalvo == null ? (<></>) : (<dir className={styles.BarraConcluido} style={{width: `${tempoSalvo}%`}}></dir>)}
            
        </div>
    )
}

export default VideoProgress