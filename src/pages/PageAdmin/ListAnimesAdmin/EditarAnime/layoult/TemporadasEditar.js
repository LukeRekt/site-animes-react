import styles from "./TemporadasEditar.module.css"
function TemporadasEditar(props){

    function Teste(propsa){
    
        var indents = [];
        for (var i = 0; i < propsa; i++) {
          indents.push(<span className='indent' key={i}></span>);
        }
        return indents;
      }

    return ( <div className={styles.container}>
        
        <h1>Temporadas</h1>
        <div className={styles.listTemporadas}>

        {Teste(props.temporadas).map((post, index) => {
            return <div className={styles.barraTemporada}>
            <p>Temporada: {index + 1}</p>
            </div>
        })}


            
            
        
        </div>
    </div>)
}
export default TemporadasEditar