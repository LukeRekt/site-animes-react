import styles from "./AnimeTemas.js"
function AnimeTemas(props){

  return props.temas.map(item => (
    <p>{item}</p>
));
}


export default AnimeTemas