import axios from 'axios'
import React, { useState, useEffect} from 'react'
import styles from "./BotaoFavorito.module.css"
import { FiHeart } from "react-icons/fi";
function BotaoFavorito (props){ 

    const [Favorited, setFavorited] = useState()

    const variables = {
        nomeUsuario: props.user,
        nomeAnime: props.nome,
        idAnime: props.id,
        imagemAnime: props.imagem
    }

    const onClickFavorite = () => {
        if (Favorited) {
        axios.post('http://localhost:3232/remfavorito', variables, { withCredentials: true }, {
            headers: {
            //   'Authorization': `${cookies.get('jwt')}`,
            'Content-Type': 'application/json'
            }
          })
          .then((res) => {
            setFavorited(!Favorited)
          })
          .catch((error) => {
            console.error(error)
          })
        }else{
            axios.post('http://localhost:3232/favoritar', variables, { withCredentials: true }, {
                headers: {
                //   'Authorization': `${cookies.get('jwt')}`,
                'Content-Type': 'application/json'
                }
              })
              .then((res) => {
                setFavorited(!Favorited)
              })
              .catch((error) => {
                console.error(error)
              })
        }
}
useEffect(() => {
    axios.post('http://localhost:3232/getfavorito', variables, { withCredentials: true })
    .then(response => {
        if (response.data.success) {
            setFavorited(response.data.subcribed)
            console.log(response.data.subcribed)
        } else {
            
        }
    })

}, [])
return (<>
{Favorited == true ? (<div onClick={onClickFavorite} className={styles.favoritar}><div id={styles.favoritado}><p><FiHeart/> Favorito</p></div></div>) : (<div onClick={onClickFavorite} className={styles.favoritar}><p><FiHeart/> Favoritar</p></div>)}
</>)
}

export default BotaoFavorito