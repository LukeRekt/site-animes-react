import styles from './EditarEpLayoult.module.css'
import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

import { BsFillPencilFill } from "react-icons/bs";
import BotaoRemoverEp from '../BotaoRemoverEp/BotaoRemoverEp';

function EditarEpLayout() {
    const { id, temporada } = useParams();
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/getanim/episodios/${temporada}/${id}`)
            .then(res => {
                setPosts(res.data.episodios)
            })
    }, [])
    return (
        <div className={styles.container}>
            {console.log(posts)}
            {!posts ? (<p>Nada</p>) : (posts.map(map =>
                {
                   return <div key={map.id} className={styles.Episodios}>
                    <BotaoRemoverEp id={id} temporada={temporada} numero={map.numero}/>
                    <Link to={`/admin/editar/${id}/${temporada}/${map.numero}`}>
                       <p>Nome EP: {map.nome}</p>
                       <p>EP: {map.numero}</p>
                       <div className={styles.icones}>
                       
                       <BsFillPencilFill/>
                       
                       </div>
                   <img src={`${process.env.REACT_APP_API_URL}/${map.animeImagem}`} alt="" />
                   </Link>
                   </div>
                }))}
              
           {console.log(posts)}
            
            </div>
    )
}

export default EditarEpLayout