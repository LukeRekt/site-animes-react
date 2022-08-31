import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './AdicionarTemporada.module.css'





const axios = require('axios');


function AdicionarTemporada(){
    const {id} = useParams();

    const [nomeTemporada, setNomeTemporada] = useState([])
    const [temporada, setTemporada] = useState({})
 

      useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/gettemporada/${id}`)
            .then(res => {
                // setPosts(res.data.animes)
                setTemporada(res.data.temporadas)
                console.log(temporada)
            }).catch((err) => {
                
            })
    }, [id])

      const variables = {
        idAnime: id,
        nomeTemporada: nomeTemporada,
        temporadaAnime: temporada.length + 1,  
    }
    const formData = new FormData();
  

    formData.append('data', JSON.stringify(variables));
    const handleRegister = async (e) => {
            axios.post(`${process.env.REACT_APP_API_URL}/addtemporada`, formData, { withCredentials: true }, {
                headers: {
                //   'Authorization': `${cookies.get('jwt')}`,
                'Content-Type': 'application/json'
                }
              })
              .catch((error) => {
                console.error(error)
              })
        
}

    return (
        <div className={styles.container}>
          
            <form>
            <input type="text" placeholder='Nome Temporada' value={nomeTemporada} onChange={(e) => setNomeTemporada(e.target.value)}/>
           
            <button onClick={handleRegister}>Alterar</button>
            </form>
            
        </div>

    )
}

export default AdicionarTemporada