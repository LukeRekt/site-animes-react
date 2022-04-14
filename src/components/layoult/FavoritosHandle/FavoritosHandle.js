import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styles from "./FavoritosHandle.module.css"
import { HiEmojiSad } from "react-icons/hi";
function FavoritosHandle (props){
    const [Favorited, setFavorited] = useState()
    const [CarregandoFavoritos, setCarregandoFavoritos] = useState(true)

    const variables = {
        nomeUsuario: props.user,
    }

    useEffect(() => {
        axios.post('http://localhost:3232/getallfavoritos', variables)
            .then(res => {
                setFavorited(res.data.favoritos)
                setCarregandoFavoritos(false)
            })
    }, [])

    return (
        
       <div className={styles.container}>
          {CarregandoFavoritos ? (<>Carregando</>) : ( Favorited.length == 0 ? (<div id={styles.nenhumFav}><p> Você não tem nenhum favorito <HiEmojiSad/></p></div>) : (Favorited.map(teste => {
                    return <div className={styles.animeCapa}>
                    <Link to={`/anime/${teste.idAnime}`}>
                    <div className={styles.animeOver}>
                    <small>
                    <p>{teste.nomeAnime} </p>
                    </small>
                    </div>
                    <img src={teste.imagemAnime} alt="" />
                    </Link>
                    </div>
                
                {/* {console.log(teste.idAnime, teste.nomeAnime, teste.nomeUsuario, teste.imagemAnime)} */}
                 
               
               
        })))} 
       
       </div>
        
        
    )
}

export default FavoritosHandle