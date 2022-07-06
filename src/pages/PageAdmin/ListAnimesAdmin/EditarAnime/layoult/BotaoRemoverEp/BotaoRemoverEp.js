import styles from "./BotaoRemoverEp.module.css"
import axios from 'axios';


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
        
}

    return (
        <div className={styles.DivFoda} onClick={handleRegister}>asdadasdasd</div>
        
        )

}

export default BotaoRemoverEp