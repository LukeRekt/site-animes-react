import styles from './BotaoInfo.module.css'
import { AiOutlinePlayCircle } from 'react-icons/ai';

function BotaoInfo (props){
    return (
        <div className={styles.container}>
            <p><AiOutlinePlayCircle size='26px'/> {props.mensagem}</p>
        </div>
    )
}

export default BotaoInfo