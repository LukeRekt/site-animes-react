import { useContext, useState } from "react"
import styles from "./BarraBuscaOverlay.module.css"
import InstantSearch from "./InstantSearch"
import { AiOutlineClose } from "react-icons/ai";

import {useVisibility} from '../../context/Visibility'

function BarraBuscaOverlay(){
    const {visibility, setVisibility} = useVisibility();

    return (
        <div> {visibility ? (<div style={{display:"block"}} className={styles.container}>
           <div className={styles.searchWrapper}><InstantSearch/><div className={styles.fechar}><AiOutlineClose style={{cursor: "pointer"}} onClick={() => setVisibility(false)}/></div></div> 
        </div>) : (<></>)}</div>
        
    )
}
export default BarraBuscaOverlay