import axios from 'axios'
import React, { useState, useEffect} from 'react'
import styles from "./Testes.module.css"
import { useLoginVisibility } from '../../context/LoginVisibility';
function Testes (){ 
  const { setLoginVisibility } = useLoginVisibility();
    //prototipo para upload de animes com sua respectiva thumb
    const variables = {
        nome: "Luke",
    }
    const formData = new FormData();
  
    const [Favorited, setFavorited] = useState([])
    formData.append('data', JSON.stringify(variables));
    

    const onClickFavorite = () => {
        formData.append('screenshot', Favorited)
        
       
        axios.post('http://localhost:3232/testes', formData, { withCredentials: true }, {

          })
          .then((res) => {
            console.log(Favorited);
          })
          .catch((error) => {
            console.error(error)
          })
}

return (<div className={styles.container}>

<input type="file" name="screenshot" onChange={(e) => setFavorited(e.target.files[0])} />
<button onClick={onClickFavorite}>Teste</button>





<button onClick={() => setLoginVisibility(true)}>PAGINA DE LOGIN</button>




{/* //onClickFavorite */}
</div>)
}

export default Testes