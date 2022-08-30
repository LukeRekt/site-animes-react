import { Link } from "react-router-dom";
import styles from "./TemporadasEditar.module.css"
function TemporadasEditar(props){

    return ( <div className={styles.container}>
        <h1>Temporadas</h1>
        <div className={styles.listTemporadas}>
        {props.temporadas.map((post, index) => {
            return <Link to={`/admin/editar/${props.id}/${index + 1}`}>
            <div className={styles.barraTemporada}>
            <p>Temporada: {post.temporadaAnime} - {post.nomeTemporada}</p>
            </div>
            </Link>
        })}
        </div>
    </div>)
}
export default TemporadasEditar