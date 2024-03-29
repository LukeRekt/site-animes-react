import axios from 'axios';
import { useState } from 'react';
import styles from './AddAnime.module.css'

function AddAnime(props){
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [nota, setNota] = useState("");
    const [episodios, setEpisodios] = useState("");
    const [lancamento, setLancamento] = useState(false);
    const [dublado, setDublado] = useState(false);
    const [diaLancamento, setDiaLancamento] = useState("");
    const [especiais, setEspeciais] = useState("");
    const [filmes, setFilmes] = useState("");
    const [autor, setAutor] = useState("");
    const [nomeIngles, setNomeIngles] = useState("");
    const [diretor, setDiretor] = useState("");
    const [estudio, setEstudio] = useState("");
    const [ano, setAno] = useState("");
    const [imagem, setImagem] = useState([])
    const [imgData, setImgData] = useState([])
    const [temas, setTemas] = useState("")
    const [slugLink, setSlugLink] = useState("teste")

    const variables = {
        id: props.totalIds + 1,
        nome: nome,
        slug: ConverterParaSlug(nome),
        descricao: descricao,
        nota: nota,
        episodios: episodios,
        lancamento: lancamento,
        dublado: dublado,
        nomeIngles: nomeIngles,
        diaLancamento: diaLancamento,
        especiais: especiais,
        filmes: filmes,
        autor: autor,
        diretor: diretor,
        estudio: estudio,
        ano: ano,
        temas: temas.split(','),
        
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
function ConverterParaSlug (str) {
  str = str.replace(/^\s+|\s+$/g, '');
  str = str.toLowerCase();

 
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to   = "aaaaeeeeiiiioooouuuunc------";
  for (var i=0, l=from.length ; i<l ; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') 
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

      console.log(slugLink)
  return str;
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
              <div id={styles.formLeft}>
                <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                <input type="text" value={nomeIngles} placeholder='Nome Ingles' onChange={(e) => setNomeIngles(e.target.value)}/>
                {/* <input type="text" placeholder="Descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} /> */}
                <textarea cols="52" rows="8" placeholder="Descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} ></textarea>
                <input type="number" placeholder="Nota" value={nota} onChange={(e) => setNota(e.target.value)} />
                <input type="number" placeholder="Episodios" value={episodios} onChange={(e) => setEpisodios(e.target.value)} />
                {/* <input type="text" placeholder="Link" value={slugLink} onChange={(e) => setSlugLink(ConverterParaSlug(e.target.value))} /> */}
                <div id={styles.checkForm}>
                <p>Em Lancamento?</p>
                <input type="checkbox" placeholder="Lancamento" value={lancamento} onChange={(e) => setLancamento(!lancamento)} />
                <p>Dublado?</p>
                <input type="checkbox" placeholder="Dublado" value={dublado} onChange={(e) => setDublado(!dublado)} />
                </div>
                <input type="text" placeholder="Dia Lancamento" value={diaLancamento} onChange={(e) => setDiaLancamento(e.target.value)} />
                <input type="text" placeholder="Especiais" value={especiais} onChange={(e) => setEspeciais(e.target.value)} />
                </div>
                <div id={styles.formRight}>
                
                <input type="text" placeholder="Filmes" value={filmes} onChange={(e) => setFilmes(e.target.value)} />
                <input type="text" placeholder="Autor" value={autor} onChange={(e) => setAutor(e.target.value)} />
                <input type="text" placeholder="Diretor" value={diretor} onChange={(e) => setDiretor(e.target.value)} />
                <input type="text" placeholder="Estudio" value={estudio} onChange={(e) => setEstudio(e.target.value)} />
                <input type="text" placeholder="Ano" value={ano} onChange={(e) => setAno(e.target.value)} />
                {/* <input type="text" placeholder="Imagem" value={imagem} onChange={(e) => setImagem(e.target.value)}  /> */}
                <input type="file" name="screenshot" onChange={onChangePicture} />
                {/* <input type="text" placeholder="Temporadas" value={temporadas} onChange={(e) => setTemporadas(e.target.value)} /> */}
                <input type="text" placeholder="Temas" value={temas} onChange={(e) => setTemas(e.target.value)} />
                <button onClick={handleRegister} className={styles.botao}>Registrar</button>
                           <p>TotalAnimes: {props.totalIds}</p>
                </div>
               
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

                
            </form>
            
            <div className={styles.testeImagem}><img src={imgData} onError={(e) =>  {e.target.src = 'http://localhost:3232/static/imagens/assets/capasanimes/capapadrao.png'}} alt="" /></div>
            {/* <button onClick={()=> console.log(temas.split(','))} className={styles.botao}>Registrar</button> */}
            {/* <button onClick={() => CoverterParaSlug("")} className={styles.botao}>Registrar</button> */}
            
        </div>
    )
                
            

}
export default AddAnime