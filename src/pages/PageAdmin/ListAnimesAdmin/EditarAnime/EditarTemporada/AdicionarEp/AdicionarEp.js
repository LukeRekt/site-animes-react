import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './AdicionarEp.module.css'

function AdicionarEp(){
    const { id, temporada } = useParams();
    const [posts, setPosts] = useState([])
    useEffect(() => {

        
        axios.get(`http://localhost:3232/getanim/episodios/${temporada}/${id}/`)
            .then(res => {
                setPosts(res.data.episodios)
                // console.log(posts)
            })
    }, [])
    return (
        <div className={styles.container}>
            {console.log(posts.length)}
            <form>
        <input type="text"  placeholder='Nome'/>
        <input type="text" placeholder='Video'/>
        <input type="text" placeholder='Anime Imagem'/>
        <input type="text" placeholder='Video Dublado'/>
        <input type="text" placeholder='Inicio Abertura'/>
        <input type="text" placeholder='Fim Abertura'/>
        <button>Enviar</button>
            </form>

        </div>
    )
                
            

}
export default AdicionarEp