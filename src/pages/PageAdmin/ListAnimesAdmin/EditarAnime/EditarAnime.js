import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './EditarAnime.module.css'

function EditarAnime(){
    const { id } = useParams();
    const [posts, setPosts] = useState([])
    const [temas, setTemas] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3232/getanim/${id}`)
            .then(res => {
                setPosts(res.data.animes)
                setTemas(res.data.animes.temas)
            }).catch((err) => {
                
            })

    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.imagem}>
            <img src={posts.imagem} alt="" />
            </div>
            {console.log(posts)}
            {console.log(temas)}
            </div>
    )
                
            

}
export default EditarAnime