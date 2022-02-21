import {Link} from 'react-router-dom';
import styles from './Animes.module.css'
function Anime(props) {
    return(
            <div className={styles.animes}>
        <Link to={`/anime/${props.id}`}>
            <div className={styles.anime_box}>
            
            <img src={props.imagem} alt="" />
            <div className={styles.anime_over}>       
                <div className={styles.anime_infos}>
                <p>{props.nome}</p>      
                <div className={styles.anime_botao}>ANIME</div> 
                <p>{props.episodeos} EPISÓDEOS</p>  
                </div>       
            </div>
            </div>
            </Link>
        </div>
        
    )
}

export default Anime