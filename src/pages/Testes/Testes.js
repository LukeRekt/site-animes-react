import axios from 'axios'
import React, { useState, useEffect} from 'react'
function Testes (){ 

    //prototipo para upload de animes com sua respectiva thumb
    const variables = {
        nomeUsuario: "Luke",
    }
    const formData = new FormData();
  
    const [Favorited, setFavorited] = useState([])

    

    const onClickFavorite = () => {
        formData.append('screenshot', Favorited)
        formData.append('data', JSON.stringify(variables));
        if (Favorited == null || variables.nomeUsuario == null) {console.log("imagem ou nome faltando");}
        else{
        axios.post('http://localhost:3232/testes', formData, { withCredentials: true }, {

          })
          .then((res) => {
            console.log(Favorited);
          })
          .catch((error) => {
            console.error(error)
          })
}
}

return (<>
<input type="file" name="screenshot" onChange={(e) => setFavorited(e.target.files[0])} />
<button onClick={onClickFavorite}>Teste</button>
{/* //onClickFavorite */}
</>)
}

export default Testes