import styles from "./AnimeTemas.module.css"
function AnimeTemas(props){
var temas = props.temas;
  return(
      <div className={styles.container}>
          {temas.map(item => (
    <p className={styles.tema}>{item}</p>
))}
          
      </div>
    
  )}


export default AnimeTemas
