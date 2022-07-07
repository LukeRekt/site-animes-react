import styles from "./BotaoRemoverEp.module.css"
import axios from 'axios';
import { AiFillCloseSquare } from "react-icons/ai";

function BotaoRemoverEp (props){
    const variables = {
        id: props.id,
        numero: props.numero,
        temporada: props.temporada, 
    }
    const formData = new FormData();
  

    formData.append('data', JSON.stringify(variables));
    const handleRegister = async (e) => {
     
            axios.post('http://localhost:3232/episodios/admin/remep', formData, { withCredentials: true }, {
                headers: {
                'Content-Type': 'application/json'
                }
              })
              .catch((error) => {
                console.error(error)
              })
              document.location.reload(true);
        
}

    return (
        <div className={styles.DivFoda} onClick={handleRegister}>
          <AiFillCloseSquare/>
        </div>
        
        )

}

export default BotaoRemoverEp