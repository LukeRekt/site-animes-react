import axios from 'axios';
import { useEffect, useState } from 'react'
import styles from './VideoProgress.module.css'

function VideoProgress(props) {


    const [tempoSalvo, setTempoSalvo] = useState();

    function calculoPorcentagem(){
        let calcA = (props.tempoAtual * 100) / props.tempoTotal;
        console.log(Math.floor(calcA))
         return setTempoSalvo((Math.floor(calcA)));
    }

    useEffect(() =>  {
        calculoPorcentagem();
    
   }, [])
   

    return (
        <div className={styles.BarraTotal}>
            {tempoSalvo == null ? (<></>) : (<div className={styles.BarraConcluido} style={{width: `${tempoSalvo}%`}}><p>{tempoSalvo}%</p></div>)}
            
        </div>
    )
}

export default VideoProgress