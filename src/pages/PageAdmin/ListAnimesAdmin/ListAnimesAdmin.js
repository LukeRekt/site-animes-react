import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styles from "./ListAnimesAdmin.module.css"
import { HiEmojiSad } from "react-icons/hi";
function ListAnimesAdmin (props){
    const [AnimesAdmin, setAnimesAdmin] = useState()
    const [CarregandoAnimesAdmin, setCarregandoFavoritos] = useState(true)


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/getanim`)
            .then(res => {
                setAnimesAdmin(res.data.animes)
                setCarregandoFavoritos(false)
            })
    }, [])

    return (
        
       <div className={styles.container}>
  
  {CarregandoAnimesAdmin ? (<>Carregando</>) : ( AnimesAdmin.length == 0 ? (<div id={styles.nenhumFav}><p> Você não tem nenhum favorito <HiEmojiSad/></p></div>) : (AnimesAdmin.map((teste, index) => {
                    return <div key={index} className={styles.animeCapa}>
                    <Link to={`/admin/editar/${teste.id}`}>
                    <div className={styles.animeOver}>
                    <small>
                    <p>{teste.nome} </p>
                    </small>
                    </div>
                    <img src={teste.imagem} alt="" />
                    </Link>
                    </div>
                
                {/* {console.log(teste.idAnime, teste.nomeAnime, teste.nomeUsuario, teste.imagemAnime)} */}
                 
               
               
        })))} 
       </div>
        
        
    )
}

export default ListAnimesAdmin