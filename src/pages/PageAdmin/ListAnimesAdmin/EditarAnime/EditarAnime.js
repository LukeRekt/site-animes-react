import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './EditarAnime.module.css'
import TemporadasEditar from './layoult/TemporadasEditar';

function EditarAnime(){
    const { id } = useParams();
    

    //valores do form
    
    const [nome, setNome] = useState([])
    const [idAnime, setIdAnime] = useState([])
    const [descricao, setDescricao] = useState([])
    const [nota, setNota] = useState([])
    const [episodios, setEpisodios] = useState([])
    const [diaLancamento, setDiaLancamento] = useState([])
    const [especiais, setEspeciais] = useState([])
    const [filmes, setFilmes] = useState([])
    const [autor, setAutor] = useState([])
    const [lancamento, setLancamento] = useState(false);
    const [nomeIngles, setNomeIngles] = useState("");
    const [diretor, setDiretor] = useState([])
    const [estudio, setEstudio] = useState([])
    const [ano, setAno] = useState([])
    const [imagem, setImagem] = useState([])
    const [temporadas, setTemporadas] = useState([])
    const [temas, setTemas] = useState("")
    const [imgData, setImgData] = useState([])
    

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/getanim/admin/${id}`)
            .then(res => {
                // setPosts(res.data.animes)
                setNome(res.data.animes.nome)
                setIdAnime(res.data.animes.id)
                setDescricao(res.data.animes.descricao)
                setNota(res.data.animes.nota)
                setEpisodios(res.data.animes.episodios)
                setDiaLancamento(res.data.animes.diaLancamento)
                setLancamento(res.data.animes.lancamento)
                setEspeciais(res.data.animes.especiais)
                setFilmes(res.data.animes.filmes)
                setAutor(res.data.animes.autor)
                setDiretor(res.data.animes.diretor)
                setEstudio(res.data.animes.estudio)
                setAno(res.data.animes.ano)
                setImagem(`${process.env.REACT_APP_API_URL}/${res.data.animes.imagem}`)
                setNomeIngles(res.data.animes.nomeIngles)
                setTemas(res.data.animes.temas)
                console.log(res.data.animes.lancamento)
            }).catch((err) => {
                
            })
    }, [lancamento])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/gettemporada/${id}`)
            .then(res => {
                // setPosts(res.data.animes)
                setTemporadas(res.data.temporadas)

            }).catch((err) => {
                
            })
    }, [lancamento, idAnime])
    
    const variables = {
        id: idAnime,
        nome: nome,
        descricao: descricao,
        nota: nota,
        temporadas: temporadas,
        episodios: episodios,
        lancamento: lancamento,
        diaLancamento: diaLancamento,
        nomeIngles: nomeIngles,
        especiais: especiais,
        filmes: filmes,
        autor: autor,
        diretor: diretor,
        estudio: estudio,
        ano: ano,
        temas: temas.toString().split(','),

        
    }
    const formData = new FormData();
  

    formData.append('data', JSON.stringify(variables));
    formData.append('screenshot', imagem)

    const onChangePicture = (e) => {
        if (e.target.files[0]) {
          setImagem(e.target.files[0]);
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            setImgData(reader.result);
          });
          reader.readAsDataURL(e.target.files[0]);
        }
      };
    const handleRegister = async (e) => {
        // setTemas(temas.split(','));
        //http://localhost:3232/addanimes
            axios.post(`${process.env.REACT_APP_API_URL}/Testes`, formData, { withCredentials: true }, {
                headers: {
                //   'Authorization': `${cookies.get('jwt')}`,
                'Content-Type': 'application/json'
                }
              })
              .catch((error) => {
                console.error(error)
              })
        
}
function Testando(){
    console.log(nome)
    console.log(descricao)
    console.log(nota)
    console.log(episodios)
    console.log(lancamento)
    console.log(diaLancamento)
    console.log(especiais)
    console.log(filmes)
    console.log(autor)
    console.log(diretor)
    console.log(estudio)
    console.log(ano)
    console.log(temporadas)
    console.log(temas)
}
    return (
        <div className={styles.container}>
            <div className={styles.imagem}>
                <img src={imgData} onError={(e) =>  {e.target.src = imagem}} alt="" />
            </div>
            <div className={styles.formulario}>
                <form>
                    <input type="text" value={nome} placeholder='Nome' onChange={(e) => setNome(e.target.value)}/>
                    <input type="text" value={nomeIngles} placeholder='Nome Ingles' onChange={(e) => setNomeIngles(e.target.value)}/>
                    <textarea cols="52" rows="9" placeholder="Descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
                    <input type="text" value={nota} placeholder='Nota' onChange={(e) => setNota(e.target.value)}/>
                    <input type="text" value={episodios} placeholder='Episodios' onChange={(e) => setEpisodios(e.target.value)}/>
                    <input type="checkbox" placeholder="Lancamento" checked={lancamento} onChange={(e) => setLancamento(!lancamento)} />
                    <input type="text" value={diaLancamento} placeholder='Dia de Lancamento' onChange={(e) => setDiaLancamento(e.target.value)}/>
                    <input type="text" value={especiais} placeholder='Especiais' onChange={(e) => setEspeciais(e.target.value)}/>
                    <input type="text" value={filmes} placeholder='Filmes' onChange={(e) => setFilmes(e.target.value)}/>
                    <input type="text" value={autor} placeholder='Autor' onChange={(e) => setAutor(e.target.value)}/>
                    <input type="text" value={diretor} placeholder='Diretor' onChange={(e) => setDiretor(e.target.value)}/>
                    <input type="text" value={estudio} placeholder='Estudio' onChange={(e) => setEstudio(e.target.value)}/>
                    <input type="text" value={ano} placeholder='Ano' onChange={(e) => setAno(e.target.value)}/>
                    <input type="file" name="screenshot" onChange={onChangePicture} />
                    {/* <input type="text" value={temporadas} placeholder='Temporadas' onChange={(e) => setTemporadas(e.target.value)}/> */}
                    <input type="text" value={temas} placeholder='Temas' onChange={(e) => setTemas(e.target.value)}/>
                    <button onClick={handleRegister}>Alterar</button>
                </form>
                
            </div>
            <div className={styles.temporadas}>
                    {!temporadas ? (<p>Erro ao buscar temporadas</p>) : (<TemporadasEditar temporadas={temporadas} id={idAnime}/>)}
                </div>
            {console.log(nome)}
            {console.log(temas)}
            </div>
    )
                
            

}
export default EditarAnime