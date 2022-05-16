import styles from "./VerMais.module.css"

function BotaoVerMais(props){
    return (
        <div onClick={props.onClick} className={styles.container}>
            <button>Ver Mais</button>
        </div>
    )
}

export default BotaoVerMais