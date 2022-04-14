import { AiFillPlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import VideoProgress from "../VideoProgress/VideoProgress";

import styles from "./EpisodiosHome.module.css"
import { UserContext } from '../../../UserContext'
import { useContext } from "react";

function EpisodiosHome(props) {
    // const { user } = useContext(UserContext);
    return (
        <div className={styles.container}>
            <Link to={`anime/${props.id}/${props.temporada}/${props.numero}`}>
                <div className={styles.episodeInfos}>

                    <div className={styles.fundoAnime}>
                    
                        <div className={styles.qualidade}>
                            <p>FHD</p>
                            
                        </div>

                        {/* {user ? (<div className={styles.progressoAnime}>
                        <VideoProgress user={user} idanime={props.id} temporada={props.temporada} episodio={props.numero}/>
                        </div>) : (<></>)} */}
                        
                        <div className={styles.textosAnime}>
                            <p>Episódio: {props.numero}</p>
                            <p>{props.nome}
                            </p>
                            <p>{props.anime}</p>
                        </div>
                        
                        <AiFillPlayCircle />
                    </div>
                    <img src={props.imagem} alt="" />

                </div>
            </Link>
        
        </div>
    
    )
}
export default EpisodiosHome