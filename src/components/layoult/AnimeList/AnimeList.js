import axios from 'axios'
import styles from "./AnimeList.module.css"
import { Link } from 'react-router-dom';


function AnimeList(props) {
    function testeNome(idUm, idDois, nome, episodio, temporada, imagem) {
        if (idUm == idDois) {
            return (<div>

                <Link to={`/anime/${idUm}/${temporada}/${episodio}`}>

                    <div className={styles.AnimeThumb}>
                    
                        <div className={styles.AnimeQualidade}><p>FHD</p></div>
                       
                        <div className={styles.pimba}><img src={imagem} alt="" /></div>
                        <p>Episódio: {episodio}</p>
                        <p>{nome}</p>
                        <div className={styles.AnimeLingua}><div id={styles.AnimeDublado}><p>Dublado</p></div></div>
                    </div>
                   
                </Link>
            </div>
            )

        }
    }

    return (
        <div>

            {testeNome(props.id, props.iddois, props.nome, props.episodio, props.temporada, props.imagem)}



        </div>
        // /* {testeNome(props.id, props.iddois, props.nome)}
        // {console.log("id " + props.id)}
        // {console.log("iddois " + props.iddois)}
        // {console.log("nome " + props.nome)}
        // {testeNome(props.nome, props.id, props.iddois)} */


    )
}

export default AnimeList