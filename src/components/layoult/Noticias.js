import styles from './Noticias.module.css'
function Noticias() {
    return (
        <div>
             <div className={styles.noticias}>
                <h4>Boa Noite, Zap!</h4>
                <h5>Não sabe como assistir? <a href="">CLIQUE AQUI</a> e aprenda agora mesmo 🍙</h5>
                <p>Esta assistindo pelo celular e está sendo redirecionado para o twitter? Não sabe o que fazer? <a href="">CLIQUE AQUI</a> e aprenda agora mesmo como resolver 📛</p>
                <p>Equipe ZapAnimes 📞</p>
                <p>👾 Discord</p>
                <p>📷 Instagram</p>
                <p>🐦 Twitter</p>
            </div>
        </div>
    )
}
export default Noticias