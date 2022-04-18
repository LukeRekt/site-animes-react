import VideoProgress from "../VideoProgress/VideoProgress"
import styles from "./AnimeAssistido.module.css"
function AnimeAssistido (){
    return (
        <div>
            <div className={styles.container}>
            <div className={styles.AnimeContainer}>
                <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/7LMSllDXEVBBwY7yQop2CY0AW7I.jpg" alt="" />
                <div className={styles.BarraProgresso}><VideoProgress temporada={1}/></div>
            </div>
            
        </div>
        </div>
    )
}
export default AnimeAssistido