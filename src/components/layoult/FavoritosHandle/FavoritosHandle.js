import axios from "axios"
import { useEffect, useState } from "react"
import styles from "./FavoritosHandle.module.css"
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
          {CarregandoFavoritos ? (<>Carregando</>) : ( Favorited.map(teste => {
            return <div className={styles.animeCapa}><img src={teste.imagemAnime} alt="" /></div>
                {/* {console.log(teste.idAnime, teste.nomeAnime, teste.nomeUsuario, teste.imagemAnime)} */}
                 
               
               
        }))} 
       
       </div>
        
        
    )
}

export default FavoritosHandle