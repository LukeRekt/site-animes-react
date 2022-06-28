import { useState } from 'react';
import EditarEpLayout from '../layoult/EditarEp/EditarEpLayoult';
import styles from './EditarTemporada.module.css'
import { MdOutlineAdd } from "react-icons/md";
function EditarTemporada(){
    return (
        <div className={styles.container}>
            <EditarEpLayout/>
            <div className={styles.adicionarEp}>
            <MdOutlineAdd/>
            </div>
        </div>
    )
                
            

}
export default EditarTemporada