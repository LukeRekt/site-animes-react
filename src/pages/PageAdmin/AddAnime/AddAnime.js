import axios from 'axios';
import { useState } from 'react';
import styles from './AddAnime.module.css'

function AddAnime(){

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [nota, setNota] = useState("");
    const [episodios, setEpisodios] = useState("");
    const [lancamento, setLancamento] = useState(false);
    const [diaLancamento, setDiaLancamento] = useState("");
    const [especiais, setEspeciais] = useState("");
    const [filmes, setFilmes] = useState("");
    const [autor, setAutor] = useState("");
    const [diretor, setDiretor] = useState("");
    const [estudio, setEstudio] = useState("");
    const [ano, setAno] = useState("");
    const [imagem, setImagem] = useState("");
    const [temporadas, setTemporadas] = useState("");
    

    const variables = {
        id:25,
        nome: nome,
        descricao: descricao,
        nota: nota,
        temporadas: temporadas,
        episodios: episodios,
        lancamento: lancamento,
        diaLancamento: diaLancamento,
        especiais: especiais,
        filmes: filmes,
        autor: autor,
        diretor: diretor,
        estudio: estudio,
        ano: ano,
        imagem: imagem
        
    }


    const handleRegister = async (e) => {
            axios.post('http://localhost:3232/addanimes', variables, { withCredentials: true }, {
                headers: {
                //   'Authorization': `${cookies.get('jwt')}`,
                'Content-Type': 'application/json'
                }
              })
              .catch((error) => {
                console.error(error)
              })
        
}


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
                <input type="number" placeholder="Nota" value={nota} onChange={(e) => setNota(e.target.value)} />
                <input type="number" placeholder="Episodios" value={episodios} onChange={(e) => setEpisodios(e.target.value)} />
                <span>Em Lancamento?</span>
                <input type="checkbox" placeholder="Lancamento" value={lancamento} onChange={(e) => setLancamento(!lancamento)} />
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
                    
                    */}

                <button onClick={handleRegister} className={styles.botao}>Registrar</button>
                           
            </form>
            <button onClick={()=> console.log(lancamento)} className={styles.botao}>Registrar</button>
        </div>
    )
                
            

}
export default AddAnime