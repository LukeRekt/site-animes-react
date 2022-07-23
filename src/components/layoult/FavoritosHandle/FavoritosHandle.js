import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styles from "./FavoritosHandle.module.css"
import { HiEmojiSad } from "react-icons/hi";
import BotaoVerMais from '../BotaoVerMais/VerMais'
function FavoritosHandle (props){
    const [Favorited, setFavorited] = useState()
    const [verMais, setVermais] = useState(5)
    const [CarregandoFavoritos, setCarregandoFavoritos] = useState(true)

    const variables = {
        nomeUsuario: props.user,
        quantidade: verMais
    }

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_API_URL}/getallfavoritos`, variables)
            .then(res => {
                setFavorited(res.data.favoritos)
                setCarregandoFavoritos(false)
            })
    }, [verMais])

    return (
        
       <div className={styles.container}>
           <div className={styles.FavoritosContainer}> 
          {CarregandoFavoritos ? (<>Carregando</>) : ( Favorited.length == 0 ? (<div id={styles.nenhumFav}><p> Você não tem nenhum favorito <HiEmojiSad/></p></div>) : (Favorited.map((teste, index) => {
                    return <div key={index} className={styles.animeCapa}>
                    <Link to={`/anime/${teste.idAnime}`}>
                    <div className={styles.animeOver}>
                    <small>
                    <p>{teste.nomeAnime} </p>
                    </small>
                    </div>
                    <img src={teste.imagemAnime} alt="" />
                    </Link>
                    </div>           
        })))} 
        </div>
       <BotaoVerMais onClick={() => setVermais(verMais + 5)}/>
       </div>
    )
}

export default FavoritosHandle