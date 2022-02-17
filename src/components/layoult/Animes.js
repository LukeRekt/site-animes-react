import styles from './Animes.module.css'
function Anime(props) {
    return(
            <div className={styles.animes}>
            <div className={styles.anime_box}>
            <img src={props.imagem} alt="" />
            <div className={styles.anime_over}>       
                <p>Arifureta Shokugyou...</p>      
                <p>ANIME</p> 
                <p>6 EPISÓDEOS</p>         
            </div>
            </div>
        </div>
        
    )
}

export default Anime