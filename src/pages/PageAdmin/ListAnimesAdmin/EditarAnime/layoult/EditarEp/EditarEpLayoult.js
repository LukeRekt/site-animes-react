import styles from './EditarEpLayoult.module.css'
import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';



function EditarEpLayout() {
    const { id, temporada } = useParams();
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3232/getanim/episodios/${id}/${temporada}`)
            .then(res => {
                setPosts(res.data.episodios)
            })
    }, [])
    return (
        <div className={styles.container}>
            {console.log(posts)}
             {posts.map(map =>
                {
                   return <div key={map.id} className={styles.Episodios}>
                       <p>Nome EP: {map.nome}</p>
                       <p>EP: {map.numero}</p>
                       
                   <img src={map.animeImagem} alt="" />
                   </div>
                })} 
           {console.log(posts)}
            
            </div>
    )
}

export default EditarEpLayout