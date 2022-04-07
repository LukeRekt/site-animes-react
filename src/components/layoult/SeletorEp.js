import styles from './SeletorEP.module.css'
import { Link } from 'react-router-dom'
function SeletorEP(props) {
    //terminar a estilizacao da lista de episódios
    function testeNome(idUm, idDois, temporada, nome, episodio) {
        if (idUm == idDois && episodio != props.atual && episodio >= props.atual) {
            return (<div>

                <Link to={`/anime/${idUm}/${temporada}/${episodio}`}>
                    <div className={styles.Eps}>
                        <div className={styles.epNum}><p >00{episodio}</p></div>
                        <div className={styles.displayTitulos}>
                    <p className={styles.titulo}>Episódio</p>
                    <p className={styles.titulo}>{nome}</p>

                    </div>
                    </div>
                </Link>
                
            </div>
           
            )

        }
        if (idUm == idDois && episodio == props.atual) {
            return (
                <div className={styles.Eps} style={{ background: "#FFBE63" }}>
                    <div className={styles.epNum}><p id={styles.atual}>00{episodio}</p></div>
                    <div className={styles.displayTitulos}>
                    <p className={styles.titulo}>Episódio</p>
                    <p className={styles.titulo}>{nome}</p>
                    </div>

                        
                    
                </div>
            )
        }
    }
    return (
        <div>{testeNome(props.id, props.iddois, props.temporada, props.nome, props.episodio)}</div>
        //<div className={styles.Eps}><p>{props.nome}</p></div>

    )
}

export default SeletorEP