import styles from "./VerMais.module.css"

function BotaoVerMais(props){
    return (
        <div onClick={props.onClick} className={styles.container}>
            <p>Ver Mais</p>
        </div>
    )
}

export default BotaoVerMais