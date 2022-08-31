import { Link } from "react-router-dom";
import styles from "./TemporadasEditar.module.css"
import { MdOutlineAdd } from "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";
function TemporadasEditar(props){

    return ( <div className={styles.container}>
        <h1>Temporadas</h1>
        <div className={styles.listTemporadas}>
        {props.temporadas.map((post, index) => {
            return <Link to={`/admin/editar/${props.id}/${index + 1}`}>
            <div className={styles.barraTemporada}>
            <p>Temporada: {post.temporadaAnime} - {post.nomeTemporada}</p>
            <div className={styles.editarTemporada}><BsFillPencilFill/></div>
            
            </div>
            </Link>
        })}
        
        <Link to={`/admin/adicionartemp/${props.id}`}>
        <MdOutlineAdd/>
        </Link>
        
        </div>
    </div>)
}
export default TemporadasEditar