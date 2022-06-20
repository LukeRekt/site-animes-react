import styles from './EditarEpPage.module.css'

function EditarEpPage(){
    return (
        <div className={styles.container}>
            <form>
            <input type="text" placeholder='Nome'/>
            <input type="text" placeholder='Titulo EP'/>
            <input type="text" placeholder='Link Legendado'/>
            <input type="text" placeholder='Link Dublado'/>
            <button>Enviar</button>
            </form>
        </div>

    )
}

export default EditarEpPage