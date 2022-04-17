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

    function calculoPorcentagem(tempoAtual, tempoTotal){
        let calcA = (tempoAtual * 100) / tempoTotal;
         return setTempoSalvo(calcA);
    }
    useEffect(() =>  {
        axios.post('http://localhost:3232/getprogresso',  variables, { withCredentials: true })
     .then(res => {
        calculoPorcentagem(res.data.tempoAtual, res.data.tempoTotal);
     })
   }, [])

    return (
        <div className={styles.BarraTotal}>
            {tempoSalvo == null ? (<></>) : (<dir className={styles.BarraConcluido} style={{width: `${tempoSalvo}%`}}></dir>)}
            
        </div>
    )
}

export default VideoProgress