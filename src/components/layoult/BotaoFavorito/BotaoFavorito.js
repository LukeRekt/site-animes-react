import axios from 'axios'
import React, { useState, useEffect} from 'react'
import styles from "./BotaoFavorito.module.css"
import { AiFillHeart } from "react-icons/ai";
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
        axios.post(`${process.env.REACT_APP_API_URL}/remfavorito`, variables, { withCredentials: true }, {
            headers: {
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
            axios.post(`${process.env.REACT_APP_API_URL}/favoritar`, variables, { withCredentials: true }, {
                headers: {
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
    axios.post(`${process.env.REACT_APP_API_URL}/getfavorito`, variables, { withCredentials: true })
    .then(response => {
        if (response.data.success) {
            setFavorited(response.data.subcribed)
            console.log(response.data.subcribed)
        } else {
            
        }
    })

}, [])
return (<>
{Favorited == true ? (<div onClick={onClickFavorite} className={styles.favoritar}><div id={styles.favoritado}><p><AiFillHeart/> Favorito</p></div></div>) : (<div onClick={onClickFavorite} className={styles.favoritar}><p><AiFillHeart/> Favoritar</p></div>)}
</>)
}

export default BotaoFavorito