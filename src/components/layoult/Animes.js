import styles from './Animes.module.css'
function Anime(props) {
    return(
            <div className={styles.animes}>
            <div className={styles.anime_box}>
            <img src={props.imagem} alt="" />
            <div className={styles.anime_over}>       
                <div className={styles.anime_infos}>
                <p>Arifureta Shokugyou...</p>      
                <div className={styles.anime_botao}>ANIME</div> 
                <p>6 EPISÓDEOS</p>  
                </div>       
            </div>
            </div>
        </div>
        
    )
}

export default Anime