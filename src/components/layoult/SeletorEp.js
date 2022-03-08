import styles from './SeletorEP.module.css'
import { Link } from 'react-router-dom'
function SeletorEP(props) {

    //terminar a estilizacao da lista de episódios
    function testeNome(idUm, idDois, nome, episodio) {
        if (idUm == idDois && episodio != props.atual) {
            return (<div>

                <Link to={`/anime/${idUm}/${episodio}`}>
                    <div className={styles.Eps}>
                        <p>Episódio: {episodio}</p>
                        <p>
                            Título: {nome}
                        </p>
                        </div>
                </Link>
            </div>
            )
            
        }
        if(idUm == idDois && episodio == props.atual){
            return(
                <div className={styles.Eps} style={{background: "blue"}}>
                <p>Episódio: {episodio}</p>
                <p>
                    Título: {nome}
                </p>
                </div>
            )
        }
    }
    return (
        <div>{testeNome(props.id, props.iddois, props.nome, props.episodio)}</div>
        //<div className={styles.Eps}><p>{props.nome}</p></div>

    )
}

export default SeletorEP