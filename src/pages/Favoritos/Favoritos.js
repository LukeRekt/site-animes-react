import styles from "./Favoritos.module.css"
function Favoritos (){
    return (
        <div>
            <div id={styles.imagem}>
            <img src="http://localhost:3232/static/imagens/assets/emConstrucao.png" alt="" srcset="" />
            </div>
            
        </div>//essa página deve ser apenas possível de se visualizar caso esteja logado.
    )
}

export default Favoritos