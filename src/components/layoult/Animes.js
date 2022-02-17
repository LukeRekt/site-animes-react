import styles from './Animes.module.css'
function Anime(props) {
    return(
            <div className={styles.animes}>
            <div className={styles.anime_box}>
            <img src={props.imagem} alt="" />
            </div>
        </div>
        
    )
}

export default Anime