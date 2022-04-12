import styles from './VideoProgress.module.css'

function VideoProgress(props) {
    return (
        <div className={styles.BarraTotal}>
            
            <dir className={styles.BarraConcluido} style={{width: `${props.porcentagem}%`}}></dir>
        </div>
    )
}

export default VideoProgress