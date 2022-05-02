import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './EditarAnime.module.css'

function EditarAnime(){
    const { id } = useParams();
    const [posts, setPosts] = useState([])

    //valores do form
    const [nome, setNome] = useState([])
    const [descricao, setDescricao] = useState([])
    const [nota, setNota] = useState([])
    const [episodios, setEpisodios] = useState([])
    const [diaLancameto, setDiaLancameto] = useState([])
    const [especiais, setEspeciais] = useState([])
    const [filmes, setFilmes] = useState([])
    const [autor, setAutor] = useState([])
    const [diretor, setDiretor] = useState([])
    const [estudio, setEstudio] = useState([])
    const [ano, setAno] = useState([])
    const [temporadas, setTemporadas] = useState([])
    const [temas, setTemas] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3232/getanim/${id}`)
            .then(res => {
                // setPosts(res.data.animes)
                
                setNome(res.data.animes.nome)
                setDescricao(res.data.animes.descricao)
                setNota(res.data.animes.nota)
                setEpisodios(res.data.animes.episodios)
                setDiaLancameto(res.data.animes.diaLancameto)
                setEspeciais(res.data.animes.especiais)
                setFilmes(res.data.animes.filmes)
                setAutor(res.data.animes.autor)
                setDiretor(res.data.animes.diretor)
                setEstudio(res.data.animes.estudio)
                setAno(res.data.animes.ano)
                setTemporadas(res.data.animes.temporadas)
                setTemas(res.data.animes.temas)
            }).catch((err) => {
                
            })

    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.imagem}>
                <img src={posts.imagem} alt="" />
            </div>
            <div className={styles.formulario}>
                <form>
                    <input type="text" value={nome} placeholder='Nome' />
                    <textarea cols="52" rows="9" placeholder="Descricao" value={descricao}></textarea>
                    <input type="text" value={nota} placeholder='Nota' />
                    <input type="text" value={episodios} placeholder='Episodios' />
                    <input type="checkbox" name="" id="" />
                    <input type="text" value={diaLancameto} placeholder='Dia de Lancamento' />
                    <input type="text" value={especiais} placeholder='Especiais' />
                    <input type="text" value={filmes} placeholder='Filmes' />
                    <input type="text" value={autor} placeholder='Autor' />
                    <input type="text" value={diretor} placeholder='Diretor' />
                    <input type="text" value={estudio} placeholder='Estudio' />
                    <input type="text" value={ano} placeholder='Ano' />
                    <input type="file" name="" id="" />
                    <input type="text" value={temporadas} placeholder='Temporadas' />
                    <input type="text" value={temas} placeholder='Temas' />
                    <button>Enviar</button>
                </form>
            </div>
            {console.log(nome)}
            {console.log(temas)}
            </div>
    )
                
            

}
export default EditarAnime