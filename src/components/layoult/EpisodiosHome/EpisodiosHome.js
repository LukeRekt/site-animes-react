import { AiFillPlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

import styles from "./EpisodiosHome.module.css"

function EpisodiosHome(props) {

    return (
        <div className={styles.container}>
            <Link to={`anime/${props.id}/${props.temporada}/${props.numero}`}>
                <div className={styles.episodeInfos}>

                    <div className={styles.fundoAnime}>
                        <div className={styles.qualidade}>
                            <p>FHD</p>
                        </div>

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