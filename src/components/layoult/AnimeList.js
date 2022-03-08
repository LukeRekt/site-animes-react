
import axios from 'axios'
import styles from "./AnimeList.module.css"
import {Link} from 'react-router-dom';


function AnimeList(props){

    function testeNome(idUm, idDois, nome, episodio){
        if(idUm == idDois){
            return (<div>
                
                <Link to={`/anime/${idUm}/${episodio}`}>
                    
                <div className={styles.AnimeThumb}>
                <div className={styles.pimba}><img src="https://subanimes.biz/wp-content/uploads/2021/09/kimetsu-no-yaiba-demon-slayer-mugen-arc-online-subanimes-fhd.jpg" alt="" /></div>
                <p>Episódio: {episodio}</p>
                 <p>Título: {nome}</p>
                </div>
                </Link>
                </div>
            )
        
        }
    }

    return (
        <div>
           
           {testeNome(props.id, props.iddois, props.nome, props.episodio)}
           
                
                
                </div>
            // /* {testeNome(props.id, props.iddois, props.nome)}
            // {console.log("id " + props.id)}
            // {console.log("iddois " + props.iddois)}
            // {console.log("nome " + props.nome)}
            // {testeNome(props.nome, props.id, props.iddois)} */
        
        
    )
}

export default AnimeList