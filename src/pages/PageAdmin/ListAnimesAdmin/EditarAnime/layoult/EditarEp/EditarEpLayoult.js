import styles from './EditarEpLayoult.module.css'
const teste = ["a", "a"]
function EditarEpLayout() {
    return (
        <div className={styles.container}>
            {teste.map(map =>
                {
                   return <div className={styles.Episodios}>a</div>
                })}
           
            
            </div>
    )
}

export default EditarEpLayout