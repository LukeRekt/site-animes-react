import { useState } from 'react';
import styles from './AddAnime.module.css'

function AddAnime(){

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [nota, setNota] = useState("");
    const [episodios, setEpisodios] = useState("");
    const [lancamento, setLancamento] = useState("");
    const [diaLancamento, setDiaLancamento] = useState("");
    const [especiais, setEspeciais] = useState("");
    const [filmes, setFilmes] = useState("");
    const [autor, setAutor] = useState("");
    const [diretor, setDiretor] = useState("");
    const [estudio, setEstudio] = useState("");
    const [ano, setAno] = useState("");
    const [imagem, setImagem] = useState("");
    const [temporadas, setTemporadas] = useState("");

    // const handleRegister = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const userAvatar = `http://localhost:3232/static/imagens/avatars/${username}.png`;
    //         const res = await register({ username, email, password, userAvatar, userBanner });
    //         if (res.error) toast.warning(res.error);
    //         else {
    //             toast.success(res.message);
    //             navigate('/login');
    //         }
    //     } catch (err) {
    //         toast.error(err);
    //     }
    // }

    return (
        <div className={styles.container}>


            <form className={styles.login}>
                <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                <input type="text" placeholder="Descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                <input type="text" placeholder="Nota" value={nota} onChange={(e) => setNota(e.target.value)} />
                <input type="text" placeholder="Episodios" value={episodios} onChange={(e) => setEpisodios(e.target.value)} />
                <input type="text" placeholder="Lancamento" value={lancamento} onChange={(e) => setLancamento(e.target.value)} />
                <input type="text" placeholder="Dia Lancamento" value={diaLancamento} onChange={(e) => setDiaLancamento(e.target.value)} />
                <input type="text" placeholder="Especiais" value={especiais} onChange={(e) => setEspeciais(e.target.value)} />
                <input type="text" placeholder="Filmes" value={filmes} onChange={(e) => setFilmes(e.target.value)} />
                <input type="text" placeholder="Autor" value={autor} onChange={(e) => setAutor(e.target.value)} />
                <input type="text" placeholder="Diretor" value={diretor} onChange={(e) => setDiretor(e.target.value)} />
                <input type="text" placeholder="Estudio" value={estudio} onChange={(e) => setEstudio(e.target.value)} />
                <input type="text" placeholder="Ano" value={ano} onChange={(e) => setAno(e.target.value)} />
                <input type="text" placeholder="Imagem" value={imagem} onChange={(e) => setImagem(e.target.value)} />
                <input type="text" placeholder="Temporadas" value={temporadas} onChange={(e) => setTemporadas(e.target.value)} />
               
                {/* disabled={
                    !username ||
                    !email ||
                    !password ||
                    !confirmPassword ||
                    password != confirmPassword ||
                    !hasSixChar ||
                    !hasLowerChar ||
                    !hasUpperChar ||
                    !hasNumber ||
                    !hasSpecialChar} 
                    onClick={handleRegister}
                    */}

                <button className={styles.botao}>Registrar</button>
                           
            </form>
        </div>
    )


}
export default AddAnime