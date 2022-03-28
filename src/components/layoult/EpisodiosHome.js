import { AiFillPlayCircle } from "react-icons/ai";

import styles from "./EpisodiosHome.module.css"

function EpisodiosHome (props){
    return (
        <div className={styles.container}>
            
            <div className={styles.episodeInfos}>
                <div className={styles.fundoAnime}>
                    <div className={styles.qualidade}>
                        <p>FHD</p>
                    </div>
                    <p>{props.nome} 
                    </p>
                    <p>Episódio: 1</p>
                    <AiFillPlayCircle/>
                    </div>
            <img src={props.imagem} alt="" />
            
            </div>
            
        </div>
    )
}
export default EpisodiosHome