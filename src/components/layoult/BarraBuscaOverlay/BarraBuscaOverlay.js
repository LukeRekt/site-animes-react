import styles from "./BarraBuscaOverlay.module.css"
import InstantSearch from "../InstantSearch/InstantSearch"
import { AiOutlineClose } from "react-icons/ai";

import { useVisibility } from '../../../context/Visibility'

function BarraBuscaOverlay() {
    const { visibility, setVisibility } = useVisibility();

    return (
        <div> {visibility ? (<div style={{ opacity: "1" }} className={styles.container}>
            <div className={styles.searchWrapper}><InstantSearch /><div className={styles.fechar}><AiOutlineClose style={{ cursor: "pointer" }} onClick={() => setVisibility(false)} /></div></div>
        </div>) : (<div style={{ visibility: "hidden", opacity: "0" }} className={styles.container}></div>)}</div>

    )
}
export default BarraBuscaOverlay