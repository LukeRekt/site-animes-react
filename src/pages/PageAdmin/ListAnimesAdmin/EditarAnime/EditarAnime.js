import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './EditarAnime.module.css'
import TemporadasEditar from './layoult/TemporadasEditar';

function EditarAnime(){
    const { id } = useParams();
    

    //valores do form
    
    const [nome, setNome] = useState([])
    const [descricao, setDescricao] = useState([])
    const [nota, setNota] = useState([])
    const [episodios, setEpisodios] = useState([])
    const [diaLancamento, setDiaLancamento] = useState([])
    const [especiais, setEspeciais] = useState([])
    const [filmes, setFilmes] = useState([])
    const [autor, setAutor] = useState([])
    const [diretor, setDiretor] = useState([])
    const [estudio, setEstudio] = useState([])
    const [ano, setAno] = useState([])
    const [imagem, setImagem] = useState([])
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
                setDiaLancamento(res.data.animes.diaLancamento)
                setEspeciais(res.data.animes.especiais)
                setFilmes(res.data.animes.filmes)
                setAutor(res.data.animes.autor)
                setDiretor(res.data.animes.diretor)
                setEstudio(res.data.animes.estudio)
                setAno(res.data.animes.ano)
                setImagem(res.data.animes.imagem)
                setTemporadas(res.data.animes.temporadas)
                setTemas(res.data.animes.temas)
            }).catch((err) => {
                
            })

    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.imagem}>
                <img src={imagem} alt="" />
            </div>
            <div className={styles.formulario}>
                <form>
                    <input type="text" value={nome} placeholder='Nome' onChange={(e) => setNome(e.target.value)}/>
                    <textarea cols="52" rows="9" placeholder="Descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
                    <input type="text" value={nota} placeholder='Nota' onChange={(e) => setNota(e.target.value)}/>
                    <input type="text" value={episodios} placeholder='Episodios' onChange={(e) => setEpisodios(e.target.value)}/>
                    <input type="checkbox" name="" id="" />
                    <input type="text" value={diaLancamento} placeholder='Dia de Lancamento' onChange={(e) => setDiaLancamento(e.target.value)}/>
                    <input type="text" value={especiais} placeholder='Especiais' onChange={(e) => setEspeciais(e.target.value)}/>
                    <input type="text" value={filmes} placeholder='Filmes' onChange={(e) => setFilmes(e.target.value)}/>
                    <input type="text" value={autor} placeholder='Autor' onChange={(e) => setAutor(e.target.value)}/>
                    <input type="text" value={diretor} placeholder='Diretor' onChange={(e) => setDiretor(e.target.value)}/>
                    <input type="text" value={estudio} placeholder='Estudio' onChange={(e) => setEstudio(e.target.value)}/>
                    <input type="text" value={ano} placeholder='Ano' onChange={(e) => setAno(e.target.value)}/>
                    <input type="file" name="" id="" />
                    <input type="text" value={temporadas} placeholder='Temporadas' onChange={(e) => setTemporadas(e.target.value)}/>
                    <input type="text" value={temas} placeholder='Temas' onChange={(e) => setTemas(e.target.value)}/>
                    <button>Alterar</button>
                </form>
                
            </div>
            <div className={styles.temporadas}>
                    <TemporadasEditar temporadas={temporadas} id={id}/>
                </div>
            {console.log(nome)}
            {console.log(temas)}
            </div>
    )
                
            

}
export default EditarAnime