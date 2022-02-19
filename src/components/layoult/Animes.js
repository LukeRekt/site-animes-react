import styles from './Animes.module.css'
function Anime(props) {
    return(
            <div className={styles.animes}>
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
        </div>
        
    )
}

export default Anime