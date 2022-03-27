import styles from "./EpisodiosHome.module.css"

function EpisodiosHome (props){
    return (
        <div className={styles.container}>
            
            <div className={styles.episodeInfos}>
            <img src={props.imagem} alt="" />
            <p>{props.nome}</p>
            <p>{props.id}</p>
            </div>
            
        </div>
    )
}
export default EpisodiosHome