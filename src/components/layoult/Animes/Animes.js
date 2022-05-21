import { Link } from 'react-router-dom';
import styles from './Animes.module.css'
import { AiFillPlayCircle } from "react-icons/ai";
function Animes(props) {
    function diminuirTamanho(nome) {
        let novoNome = nome.substr(0, 22)
        return novoNome + "...";
    }

    return (
        <div className={styles.animes}>
            <Link to={`/anime/${props.id}`}>
                <div className={styles.anime_box}>
                    <div className={styles.qualidade_anime}>
                        NOVO 
                    </div>
                    <AiFillPlayCircle />
                    <img src={props.imagem} alt="" />
                    <div className={styles.anime_over}>
                        <div className={styles.anime_infos}>
                            {/* <p>{props.nome}</p> */}
                            <p>{diminuirTamanho(props.nome)}</p>

                            <div className={styles.anime_botao}>ANIME</div>
                            {props.episodeos == 1 ? (<p>{props.episodeos} EPISÓDIO</p>) : (<p>{props.episodeos} EPISÓDIOS</p>)}
                        </div>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default Animes