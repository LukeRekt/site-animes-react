import FavoritosHandle from "../../components/layoult/FavoritosHandle/FavoritosHandle"
import styles from "./Favoritos.module.css"
import { UserContext } from '../../UserContext'
import { useContext } from "react";
import VideoProgress from "../../components/layoult/VideoProgress/VideoProgress";
import AnimeAssistidoPlaceholder from "../../components/layoult/AnimeAssistidoPlaceholder/AnimeAssistidoPlaceholder";
function Favoritos (){
    return (
        <div>
            
            
            <div id={styles.imagem}>
            {/* <img src="http://localhost:3232/static/imagens/assets/emConstrucao.png" alt="" srcset="" /> */}
            
            </div>
            <AnimeAssistidoPlaceholder/>
        </div>//essa página deve ser apenas possível de se visualizar caso esteja logado.
    )
}

export default Favoritos